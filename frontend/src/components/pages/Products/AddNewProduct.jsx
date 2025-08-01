import React, { useState } from 'react';
import axios from 'axios';
import {
    Box, Typography, Paper, TextField, MenuItem, Button, Grid
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const categories = ['Food', 'Beverage'];
const subCategories = ['Snacks', 'Juice'];
const productTypes = ['VEG', 'NON-VEG'];
const offers = ['-- No Offer --', '10% Off', 'Buy 1 Get 1'];
const recommended = ['Yes', 'No'];
const availableOutlet = ['Viman Nagar', 'Wagholi', 'Hadapsar', 'Kalyani Nagar', 'Koregaon Park', 'Kharadi'];

const AddNewProduct = () => {
    const [form, setForm] = useState({
        category: '',
        subCategory: '',
        productType: '',
        productName: '',
        productCode: '',
        strikePrice: '',
        displayPrice: '',
        availableOutlet: [],
        productSequence: '',
        productDescription: '',
        offer: '',
        recommended: '',
        link: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert numeric fields
        const dataToSubmit = {
            ...form,
            strikePrice: Number(form.strikePrice),
            displayPrice: Number(form.displayPrice),
        };

        try {
            const response = await axios.post('http://localhost:5000/api/products', form);
            console.log('✅ Product added:', response.data);
            alert('Product added successfully!');

            // Reset form
            setForm({
                category: '',
                subCategory: '',
                productType: '',
                productName: '',
                productCode: '',
                strikePrice: '',
                displayPrice: '',
                availableOutlet: [],
                productSequence: '',
                productDescription: '',
                offer: '',
                recommended: '',
                link: ''
            });
        } catch (error) {
            console.error('❌ Error adding product:', error);
            alert('Failed to add product. Please check the console.');
        }
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Add Product
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        {/* Category */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select fullWidth label="Category" name="category"
                                value={form.category} onChange={handleChange}
                            >
                                <MenuItem value="" disabled>-- Select Category --</MenuItem>
                                {categories.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Sub Category */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select fullWidth label="Sub-Category" name="subCategory"
                                value={form.subCategory} onChange={handleChange}
                            >
                                <MenuItem value="" disabled>-- Select Category --</MenuItem>
                                {subCategories.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Product Type */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select fullWidth label="Product Type" name="productType"
                                value={form.productType} onChange={handleChange}
                            >
                                {productTypes.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Product Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth label="Product Name" name="productName"
                                value={form.productName} onChange={handleChange}
                            />
                        </Grid>

                        {/* Product Code */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth label="Product Code" name="productCode"
                                value={form.productCode} onChange={handleChange}
                            />
                        </Grid>

                        {/* Striked Price */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth label="Striked Price (Rs.)" name="strikePrice"
                                value={form.strikePrice} onChange={handleChange}
                            />
                        </Grid>

                        {/* Display Price */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth label="Display Price (Rs.)" name="displayPrice"
                                value={form.displayPrice} onChange={handleChange}
                            />
                        </Grid>

                        {/* Available Outlet (Multi-select) */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select fullWidth label="Available in Outlet" name="availableOutlet"
                                value={form.availableOutlet} onChange={handleChange}
                                SelectProps={{ multiple: true }}
                            >
                                {availableOutlet.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Product Sequence */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth label="Product Sequence" name="productSequence"
                                value={form.productSequence} onChange={handleChange}
                            />
                        </Grid>

                        {/* Description */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth multiline minRows={3} label="Product Description"
                                name="productDescription" value={form.productDescription}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Offer */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select fullWidth label="Offer Available" name="offer"
                                value={form.offer} onChange={handleChange}
                            >
                                {offers.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Recommended */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select fullWidth label="Recommended?" name="recommended"
                                value={form.recommended} onChange={handleChange}
                            >
                                {recommended.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Link */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth label="Add Link" name="link"
                                value={form.link} onChange={handleChange}
                            />
                        </Grid>

                        {/* Submit */}
                        <Grid item xs={12}>
                            <Button
                                variant="contained" type="submit"
                                startIcon={<CheckCircleIcon />}
                                sx={{ backgroundColor: '#fc8019', '&:hover': { backgroundColor: '#ff9d3b' } }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default AddNewProduct;