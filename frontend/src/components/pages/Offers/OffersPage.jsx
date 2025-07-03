import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function OffersPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Offers & Coupons
        </Typography>
        <Typography variant="body1">
          Manage your offers and coupons here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default OffersPage; 