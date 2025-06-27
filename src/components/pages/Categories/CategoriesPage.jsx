import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const dummyData = [
  {name: 'CHINESE', img: '../src/assets/chinese.jpg'},
  {name: 'TANDOOR', img: '../src/assets/tandoor.jpg'},
  { name: 'COLD DRINKS', img: '../src/assets/coca cola can.jpg'},
  {name: 'DESSERTS', img: '../src/assets/deserts.jpg'},
  {name: 'ITALIAN',img: '../src/assets/italian.jpg'},
  {name: 'SOUTH INDIAN', img: '../src/assets/south-indian.jpg'},
  {name: 'NORTH INDIAN', img: '../src/assets/north-indian.jpg'},
  {name: 'FAST FOOD', img: '../src/assets/fastfood.jpg'},
  {name: 'ICE-CREAMS', img: '../src/assets/ice-cream.jpg'},
];

function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(10);

  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Left Form */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
           }}
           >
            <Typography variant="h5" gutterBottom>
              Add Product Category
            </Typography>
            <TextField
              fullWidth
              label="Product Category Name"
              variant="outlined"
              margin="normal"
            />
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Category Image
            </Typography>
           <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              sx={{ mb: 2 }}
            >
              Upload
              <input type="file" hidden />
            </Button>
            <Button variant="contained"  color="primary" fullWidth sx={{ backgroundColor: '#FFB347' }}>
              Submit
            </Button>
          </Paper>
        </Grid>

        {/* Right Table */}
        <Grid item xs={12} md={8}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <Typography variant="h6" gutterBottom>
              List of Product Categories
            </Typography>

            {/* Dropdown and Search */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="entries-label">Show</InputLabel>
                <Select
                  labelId="entries-label"
                  value={entries}
                  label="Show"
                  onChange={(e) => setEntries(e.target.value)}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>

              <TextField
                size="small"
                label="Search"
                variant="outlined"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Box>

            {/* Table */}
            <TableContainer sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead sx={{ backgroundColor: '#FFB347' }}>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Product Category Name</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.slice(0, entries).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: '80px', height: '80px', borderRadius: '10px', objectFit: 'cover' }}
                        />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <Button variant="outlined" color="success" size="small">
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" color="error" size="small">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredData.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        No categories found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CategoriesPage;