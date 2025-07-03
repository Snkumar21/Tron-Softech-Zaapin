import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function OrderAcceptedPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Order Accepted
        </Typography>
        <Typography variant="body1">
          View all accepted orders here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default OrderAcceptedPage; 