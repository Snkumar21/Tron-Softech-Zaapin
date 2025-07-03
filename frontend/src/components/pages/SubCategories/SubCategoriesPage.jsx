import { Box, Grid, Typography, Paper, TextField, FormControl, Select, MenuItem, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Search } from '@mui/icons-material';
//import { Box, Typography, Paper } from '@mui/material';

function SubCategoriesPage() {
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [success, setSuccess] = useState(false);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !subCategory || !fileName) {
      alert("Please fill out all fields.");
      return;
    }
    // Your form submission logic here
    console.log({ category, subCategory, fileName });
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };
  const Input = styled('input')({
    display: 'none',
  });
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, pt: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{
            p: 2,
            alignItems: 'center',
            gap: 2,
            height: '100%',
          }}>
            <Typography variant='h5'>Add Sub Category</Typography>

            <FormControl fullWidth sx={{ mt: 3, width: '100%' }} >

              <Select defaultValue="" displayEmpty size='small' required onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value=''>-- Select Category --</MenuItem>
                <MenuItem value='1'>Chinese</MenuItem>
                <MenuItem value='2'>Tandoor</MenuItem>
              </Select>

            </FormControl>

            <TextField id="sub-category-name" label="Sub Category Name" variant="outlined" size='small' sx={{ my: 3, width: '100%' }} required onChange={(e) => setSubCategory(e.target.value)} />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: 1,
                p: 1,
                mb: 2,
              }}
            >
              <label htmlFor="upload-button-file">
                <Input
                  accept="image/*"
                  id="upload-button-file"
                  type="file"
                  onChange={handleFileChange}
                />
                <Button variant="contained" component="span" color="primary" size="small">
                  Choose File
                </Button>
              </label>
              <Typography variant="body2" sx={{ ml: 2 }}>
                {fileName || 'No file chosen'}
              </Typography>
            </Box>
            <Button variant="contained" component="span" color="primary" size="small" onClick={handleSubmit} >
              Submit
            </Button>
            {success && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Created new Sub-Category!!
              </Alert>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{
            p: 2,
            alignItems: 'center',
            gap: 2,
            height: '100%',
          }}>
            <Typography variant='h5'>List of Sub Categories</Typography>
            <hr />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>

              <span>Show:
                <Select defaultValue="1" size='small' sx={{ width: '100px', ml: 1 }} required onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value='1'>10</MenuItem>
                  <MenuItem value='2'>20</MenuItem>
                  <MenuItem value='3'>30</MenuItem>
                </Select> entries</span>

              <span style={{ 'margin-top': '8px' }}>Search:
                <TextField id="search-sub-category" label="Search" variant="outlined" size='small' sx={{ width: '150px', ml: 1, mt: '-8px' }} /></span>

            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box >
  );
}

export default SubCategoriesPage;