import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function SettingsPage() {
  const [formData, setFormData] = useState({
    firmName: '',
    firmMobile: '',
    firmEmail: '',
    firmAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // You can post this to backend using Axios here
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 3 }} elevation={2}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Settings
        </Typography>
        <Typography variant="body1" gutterBottom>
          Manage your application settings here.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Firm Name"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Firm Mobile"
                name="firmMobile"
                value={formData.firmMobile}
                onChange={handleChange}
                type="tel"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Firm Email"
                name="firmEmail"
                value={formData.firmEmail}
                onChange={handleChange}
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Firm Address"
                name="firmAddress"
                value={formData.firmAddress}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                color="primary"
              >
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

export default SettingsPage;