import React from 'react';
import { XAxis, YAxis, CartesianGrid } from 'recharts';

import {
  Box,
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PendingIcon from '@mui/icons-material/Pending';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SendIcon from '@mui/icons-material/Send';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const StatCard = ({ icon, title, value, color }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height: '100%',
    }}
  >
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: 1,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h5" component="div">
        {value}
      </Typography>
    </Box>
  </Paper>
);

const monthlyData = [
  { name: 'Jan', value: 2 },
  { name: 'Feb', value: 3 },
  { name: 'Mar', value: 1 },
  { name: 'Apr', value: 4 },
  { name: 'May', value: 3 },
  { name: 'Jun', value: 5 },
  { name: 'Jul', value: 2 },
  { name: 'Aug', value: 6 },
  { name: 'Sep', value: 8 },
];

const statusData = [
  { name: 'Pending', value: 25, color: '#2196F3' },
  { name: 'Processing', value: 25, color: '#4CAF50' },
  { name: 'Delivered', value: 35, color: '#FFC107' },
  { name: 'Cancelled', value: 15, color: '#F44336' },
];

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, pt: 2 }}>
      <Box sx={{ mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <Select defaultValue="" displayEmpty>
            <MenuItem value="">-- Select Outlet --</MenuItem>
            <MenuItem value="1">Outlet 1</MenuItem>
            <MenuItem value="2">Outlet 2</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {/* First Row */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<StorefrontIcon sx={{ color: 'white' }} />}
            title="PRODUCTS"
            value="86"
            color="#FF6B00"
            id='products'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<LocalOfferIcon sx={{ color: 'white' }} />}
            title="OFFERS"
            value="2"
            color="#FF6B00"
            id='offers'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<PeopleIcon sx={{ color: 'white' }} />}
            title="CUSTOMERS"
            value="56"
            color="#FFC107"
            id='customers'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<DeliveryDiningIcon sx={{ color: 'white' }} />}
            title="DELIVERY AGENTS"
            value="7"
            color="#FFC107"
            id='delivery-agents'
          />
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<PendingIcon sx={{ color: 'white' }} />}
            title="PENDING ORDERS"
            value="9"
            color="#17B2BA"
            id='pending-orders'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<RestaurantIcon sx={{ color: 'white' }} />}
            title="PREPARING FOOD"
            value="4"
            color="#17B2BA"
            id='preparing-food'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<TwoWheelerIcon sx={{ color: 'white' }} />}
            title="DELIVERY ON THE WAY"
            value="21"
            color="#17B2BA"
            id='delivery-on-the-way'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<SendIcon sx={{ color: 'white' }} />}
            title="DELIVERED ORDERS"
            value="9"
            color="#17B2BA"
            id='delivered-orders'
          />
        </Grid>

        {/* Third Row */}
        <Grid item xs={12} sm={6}>
          <StatCard
            icon={<CurrencyRupeeIcon sx={{ color: 'white' }} />}
            title="RECEIVED PAYMENT"
            value="20,800"
            color="#E74C3C"
            id='recieved-payments'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatCard
            icon={<CurrencyRupeeIcon sx={{ color: 'white' }} />}
            title="EXPENSES"
            value="6,95,360"
            color="#E74C3C"
            id='expenses'
          />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: 300,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: '#fff'
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Orders Vs Months
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 10, right: 30, left: -20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#17B2BA"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Statuswise Orders
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 