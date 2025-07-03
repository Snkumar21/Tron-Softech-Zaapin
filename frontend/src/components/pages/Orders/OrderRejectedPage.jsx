import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function OrderRejectedPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Order Rejected
        </Typography>
        <Typography variant="body1">
          View all rejected orders here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default OrderRejectedPage; 