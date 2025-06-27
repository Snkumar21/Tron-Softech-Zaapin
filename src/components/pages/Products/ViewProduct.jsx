import React, { useState } from 'react';
import {
    Box, Typography, Paper, Table, TableHead, TableRow, TableCell,
    TableBody, Select, MenuItem, InputBase, Button, Grid, Avatar
} from '@mui/material';

// 🟩 Product Data
const initialProducts = [
    { id: 1, image: '../src/assets/pepsi 750ml.jpeg', category: 'COLD DRINKS', name: 'PEPSI 750 ml', offer: 'NO OFFER', price: '30/-', recommended: 'no' },
    { id: 2, image: '../src/assets/mountain due can.jpeg', category: 'COLD DRINKS', name: 'MOUNTAIN DEW CAN', offer: 'NO OFFER', price: '30/-', recommended: 'no' },
    { id: 3, image: '../src/assets/mountain due.jpeg', category: 'COLD DRINKS', name: 'MOUNTAIN DEW', offer: 'NO OFFER', price: '50/-', recommended: 'no' },
    { id: 4, image: '../src/assets/sprite can.jpeg', category: 'COLD DRINKS', name: 'SPRITE CAN', offer: 'NO OFFER', price: '30/-', recommended: 'no' },
    { id: 5, image: '../src/assets/coca cola can.jpg', category: 'COLD DRINKS', name: 'COCA COLA CAN', offer: 'NO OFFER', price: '30/-', recommended: 'no' },
    { id: 6, image: '../src/assets/fanta can.jpeg', category: 'COLD DRINKS', name: 'FANTA CAN', offer: 'NO OFFER', price: '30/-', recommended: 'no' },
    { id: 7, image: '../src/assets/limca soda.jpeg', category: 'COLD DRINKS', name: 'LIMCA', offer: 'NO OFFER', price: '60/-', recommended: 'no' },
    { id: 8, image: '../src/assets/mirinda can.jpeg', category: 'COLD DRINKS', name: 'MIRINDA CAN', offer: 'NO OFFER', price: '40/-', recommended: 'no' },
    // Add more here...
];

const ViewProduct = () => {
    const [products, setProducts] = useState(initialProducts);
    const [entriesToShow, setEntriesToShow] = useState(10);
    const [search, setSearch] = useState('');

    // 🟦 Filter and paginate
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    const visibleProducts = filtered.slice(0, entriesToShow);

    // 🔴 Delete
    const deleteProduct = (index) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const newList = [...products];
            newList.splice(index, 1);
            setProducts(newList);
        }
    };

    // 🟢 Edit
    const editProduct = (index) => {
        const newName = prompt('Enter new name:', products[index].name);
        if (newName) {
            const updated = [...products];
            updated[index].name = newName;
            setProducts(updated);
        }
    };

    // 🟡 Add Photo
    const addPhoto = (index) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const reader = new FileReader();
            reader.onload = function (ev) {
                const updated = [...products];
                updated[index].image = ev.target.result;
                setProducts(updated);
            };
            reader.readAsDataURL(e.target.files[0]);
        };
        input.click();
    };

    // 🔵 View
    const viewProduct = (index) => {
        alert(`Product: ${products[index].name}`);
    };

    return (
        <Box sx={{ p: 3, background: '#f9f9f9', minHeight: '100vh' }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Product List
                </Typography>

                {/* Controls */}
                <Grid container justifyContent="space-between" alignItems="center" mb={2}>
                    <Grid item>
                        <Typography component="label" mr={1}>
                            Show Entries:
                        </Typography>
                        <Select
                            value={entriesToShow}
                            onChange={(e) => setEntriesToShow(Number(e.target.value))}
                            size="small"
                        >
                            {[5, 10, 25, 50, 100].map((num) => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                    </Grid>

                    <Grid item>
                        <InputBase
                            placeholder="Search product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{
                                px: 2,
                                py: 1,
                                border: '1px solid #ccc',
                                borderRadius: 1,
                                background: '#fff',
                                width: '200px'
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Product Table */}
                <Table sx={{ backgroundColor: '#fff' }}>
                    <TableHead sx={{ backgroundColor: '#333' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#fff' }}>ID</TableCell>
                            <TableCell sx={{ color: '#fff' }}>Image</TableCell>
                            <TableCell sx={{ color: '#fff' }}>Category</TableCell>
                            <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                            <TableCell sx={{ color: '#fff' }}>Offer</TableCell>
                            <TableCell sx={{ color: '#fff' }}>Price</TableCell>
                            <TableCell sx={{ color: '#fff' }}>Recommended</TableCell>
                            <TableCell sx={{ color: '#fff' }} colSpan={4}>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {visibleProducts.map((product, index) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>
                                    <Avatar src={product.image} alt={product.name} variant="rounded" />
                                </TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.offer}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.recommended}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{ backgroundColor: '#f0ad4e' }}
                                        onClick={() => viewProduct(index)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{ backgroundColor: '#5cb85c' }}
                                        onClick={() => editProduct(index)}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{ backgroundColor: '#5bc0de' }}
                                        onClick={() => addPhoto(index)}
                                    >
                                        + Add Photo
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{ backgroundColor: '#d9534f' }}
                                        onClick={() => deleteProduct(index)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default ViewProduct;