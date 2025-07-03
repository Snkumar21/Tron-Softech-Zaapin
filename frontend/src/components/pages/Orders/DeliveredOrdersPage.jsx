import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function DeliveredOrdersPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Delivered Orders
        </Typography>
        <Typography variant="body1">
          View all completed and delivered orders.
        </Typography>
      </Paper>
    </Box>
  );
}

export default DeliveredOrdersPage; 