import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function AddNewProduct() {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Add New Product
                </Typography>
                <Typography variant="body1">
                    Manage your products here.
                </Typography>
            </Paper>
        </Box>
    );
}

export default AddNewProduct;