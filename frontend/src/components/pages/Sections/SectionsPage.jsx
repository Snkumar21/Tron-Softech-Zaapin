import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function SectionsPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Sections
        </Typography>
        <Typography variant="body1">
          Manage your sections here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default SectionsPage; 