import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function DeliveryOnWayPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Delivery on the way
        </Typography>
        <Typography variant="body1">
          Track all orders that are out for delivery.
        </Typography>
      </Paper>
    </Box>
  );
}

export default DeliveryOnWayPage; 