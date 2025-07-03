import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function PreparingFoodPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Preparing Food
        </Typography>
        <Typography variant="body1">
          View all orders currently being prepared.
        </Typography>
      </Paper>
    </Box>
  );
}

export default PreparingFoodPage; 