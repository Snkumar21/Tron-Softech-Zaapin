import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function OutletsPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Outlets
        </Typography>
        <Typography variant="body1">
          Manage your outlets here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default OutletsPage; 