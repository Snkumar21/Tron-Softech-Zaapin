import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function PendingOrdersPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Pending Orders
        </Typography>
        <Typography variant="body1">
          Manage all pending orders here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default PendingOrdersPage; 