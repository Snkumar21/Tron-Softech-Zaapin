import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  TextField,
  MenuItem,
  Button
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

function AddExpenses() {
  const [formData, setFormData] = useState({
    outletLocation: '',
    expenseAmount: '',
    expenseType: '',
    expenseDate: '',
    note: '',
    customExpenseType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      expenseType:
        formData.expenseType === 'Other'
          ? formData.customExpenseType
          : formData.expenseType
    };
    console.log('Form submitted:', submittedData);
  };

  const handleReset = () => {
    setFormData({
      outletLocation: '',
      expenseAmount: '',
      expenseType: '',
      expenseDate: '',
      note: '',
      customExpenseType: ''
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'flex-start' }}>
      <Card
        sx={{
          maxWidth: 700,
          boxShadow: 3,
          borderRadius: 2,
          mt: 2
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight="bold">
              Add Expense
            </Typography>
          }
          sx={{ pb: 0, px: 3, pt: 3 }}
        />
        <Box
          sx={{
            borderBottom: '1px solid #e0e0e0',
            mx: 3,
            mb: 2
          }}
        />
        <form onSubmit={handleSubmit}>
          <CardContent sx={{ px: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Typography>Select Outlet Location</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  select
                  name="outletLocation"
                  value={formData.outletLocation}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">-- Select Outlet Location --</MenuItem>
                  <MenuItem value="Viman Nagar">Viman Nagar</MenuItem>
                  <MenuItem value="Kalyan Nagar">Kalyan Nagar</MenuItem>
                  <MenuItem value="Sivaji Nagar">Sivaji Nagar</MenuItem>
                  <MenuItem value="Yerawada">Yerawada</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography>Expense Amount</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  name="expenseAmount"
                  type="number"
                  inputProps={{ min: 0 }}
                  placeholder="Enter Expense Amount (only digits)"
                  value={formData.expenseAmount}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography>Expense Type</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  select
                  name="expenseType"
                  value={formData.expenseType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">-- Select Expense Type --</MenuItem>
                  <MenuItem value="Rent">Shop Rent</MenuItem>
                  <MenuItem value="Stationary">Stationary</MenuItem>
                  <MenuItem value="Salaries">Salaries</MenuItem>
                  <MenuItem value="Chicken/Mutton">Chicken / Mutton</MenuItem>
                  <MenuItem value="Fruits">Fruits</MenuItem>
                  <MenuItem value="Vegetables">Vegetables</MenuItem>
                  <MenuItem value="Gas">Gas Booking</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>

              {formData.expenseType === 'Other' && (
                <>
                  <Grid item xs={12} sm={4}>
                    <Typography>Specify Expense Type</Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      fullWidth
                      name="customExpenseType"
                      placeholder="Enter Your Reason"
                      value={formData.customExpenseType}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12} sm={4}>
                <Typography>Expense Date</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  type="date"
                  name="expenseDate"
                  value={formData.expenseDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography>Note</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  name="note"
                  multiline
                  rows={3}
                  placeholder="Enter Note"
                  value={formData.note}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions sx={{ justifyContent: 'flex-start', px: 3, pb: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#f97316',
                '&:hover': { backgroundColor: '#ea580c' },
                mr: 2,
              }}
              startIcon={<CheckCircle />}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              onClick={handleReset}
              sx={{
                backgroundColor: '#6b7280',
                '&:hover': { backgroundColor: '#4b5563' }
              }}
              startIcon={<Cancel />}
            >
              Clear
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
}

export default AddExpenses;