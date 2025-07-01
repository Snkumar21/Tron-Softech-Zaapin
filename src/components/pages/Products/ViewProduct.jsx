import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Paper, Table, TableHead, TableRow, TableCell,
  TableBody, Select, MenuItem, InputBase, Button, Grid, Avatar, Dialog,
  DialogActions, DialogContent, DialogTitle, TextField
} from '@mui/material';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [search, setSearch] = useState('');
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // 🔄 Load products
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = products.filter(p =>
    p.productName.toLowerCase().includes(search.toLowerCase())
  );

  const visibleProducts = filtered.slice(0, entriesToShow);

  // 🟠 DELETE Product
  const deleteProduct = (id) => {
    if (window.confirm('Delete this product?')) {
      axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(() => setProducts(products.filter(p => p._id !== id)))
        .catch(err => alert("Error deleting"));
    }
  };

  // 🟡 EDIT Product
  const handleEditClick = (product) => {
    setCurrentProduct({ ...product });
    setEditDialogOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

    const handleEditSubmit = () => {
        axios.put(`http://localhost:5000/api/products/${currentProduct._id}`, currentProduct)
            .then(res => {
                setProducts(products.map(p => (p._id === res.data._id ? res.data : p)));
                setEditDialogOpen(false);
            })
            .catch(err => {
                console.error("Edit error:", err);
                alert("Update failed");
            });
    };

    // 🟢 ADD / UPDATE PHOTO
    const handleImageUpload = (id) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = async (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('image', file);

            try {
                const res = await axios.patch(`http://localhost:5000/api/products/upload-image/${id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                setProducts(products.map(p => (p._id === id ? res.data : p)));
            } catch (err) {
                console.error("Image upload error:", err);
                alert("Image upload failed");
            }
        };

        input.click();
    };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Product List</Typography>

        {/* Table Filter Controls */}
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Grid item>
            <Select value={entriesToShow} onChange={e => setEntriesToShow(Number(e.target.value))}>
              {[5, 10, 25, 50].map(n => <MenuItem key={n} value={n}>{n}</MenuItem>)}
            </Select>
          </Grid>
          <Grid item>
            <InputBase placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
          </Grid>
        </Grid>

        {/* Product Table */}
        <Table>
          <TableHead sx={{ backgroundColor: '#333' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>#</TableCell>
              <TableCell sx={{ color: '#fff' }}>Image</TableCell>
              <TableCell sx={{ color: '#fff' }}>Category</TableCell>
              <TableCell sx={{ color: '#fff' }}>Name</TableCell>
              <TableCell sx={{ color: '#fff' }}>Offer</TableCell>
              <TableCell sx={{ color: '#fff' }}>Price</TableCell>
              <TableCell sx={{ color: '#fff' }}>Recommended</TableCell>
              <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleProducts.map((p, i) => (
              <TableRow key={p._id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell><Avatar src={p.image} variant="rounded" /></TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.productName}</TableCell>
                <TableCell>{p.offer}</TableCell>
                <TableCell>{p.displayPrice}</TableCell>
                <TableCell>{p.recommended}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => handleEditClick(p)} sx={{ mr: 1 }}>Edit</Button>
                  <Button size="small" onClick={() => handleImageUpload(p._id)} sx={{ mr: 1 }}>Add Photo</Button>
                  <Button size="small" onClick={() => deleteProduct(p._id)} color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* 🧾 Edit Product Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField label="Product Name" fullWidth margin="dense" name="productName"
            value={currentProduct?.productName || ''} onChange={handleEditChange} />
          <TextField label="Display Price" fullWidth margin="dense" name="displayPrice"
            value={currentProduct?.displayPrice || ''} onChange={handleEditChange} />
          <TextField label="Offer" fullWidth margin="dense" name="offer"
            value={currentProduct?.offer || ''} onChange={handleEditChange} />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSubmit} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ViewProduct;