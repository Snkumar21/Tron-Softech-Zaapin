import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Pagination,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const ViewExpenses = () => {
  const location = useLocation();
  const receivedExpense = location.state?.expense;

  const expenses = receivedExpense ? [receivedExpense] : []; 

  return (
    <Box sx={{ backgroundColor: '#e0e0e0', minHeight: '100vh', p: 2 }}>
      <Paper elevation={3} sx={{ maxWidth: 1100, mx: 'auto', p: 3, borderRadius: 2 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          List Of Expenses
        </Typography>

        <Box sx={{ borderBottom: '1px solid #ddd', mb: 2 }} />

        {/* Filter/Search Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          <TextField size="small" type="date" sx={{ maxWidth: 200 }} />
          <TextField size="small" type="date" sx={{ maxWidth: 200 }} />
          <Button
            variant="contained"
            sx={{ backgroundColor: '#f57c00', fontWeight: 600 }}
          >
             Search
          </Button>
        </Box>

        {/* Table Controls */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <InputLabel>Show</InputLabel>
            <Select defaultValue={10} label="Show">
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
          <TextField size="small" placeholder="Search" />
        </Box>

        {/* Expenses Table */}
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f57c00' }}>
              {['ID', 'Expense Date', 'Expense Amount', 'Expense Type', 'Expense Note', 'Outlet', 'Action'].map(
                (head, i) => (
                  <TableCell key={i} sx={{ color: 'white', fontWeight: 600, textAlign: 'center' }}>
                    {head}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">No data available</TableCell>
              </TableRow>
            ) : (
              expenses.map((exp, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{exp.date}</TableCell>
                  <TableCell align="center">₹ {exp.amount}/-</TableCell>
                  <TableCell align="center">{exp.type}</TableCell>
                  <TableCell align="center">{exp.note}</TableCell>
                  <TableCell align="center">{exp.outlet}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body2">Showing 1 to 10 of 60 entries</Typography>
          <Stack direction="row">
            <Pagination count={6} shape="rounded" />
          </Stack>
        </Box>
      </Paper>

      {/* Total Box */}
      <Paper
        elevation={3}
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          mt: 4,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f57c00',
            color: 'white',
            py: 2,
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '1.2rem',
          }}
        >
          Total Expenses
        </Box>
        <Box sx={{ py: 3, textAlign: 'center', fontSize: 22, color: '#333' }}>
          Rs. {expenses.reduce((acc, curr) => acc + Number(curr.amount || 0), 0)}/-
        </Box>
      </Paper>
    </Box>
  );
};

export default ViewExpenses;