import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import DashboardPage from './components/pages/Dashboard/DashboardPage.jsx';
import CategoriesPage from './components/pages/Categories/CategoriesPage.jsx';
import SubCategoriesPage from './components/pages/SubCategories/SubCategoriesPage.jsx';

// Products
import AddNewProduct from './components/pages/Products/AddNewProduct.jsx';
import ViewProduct from './components/pages/Products/ViewProduct.jsx';

import OutletsPage from './components/pages/Outlets/OutletsPage.jsx';
import OffersPage from './components/pages/Offers/OffersPage.jsx';
import UsersPage from './components/pages/Users/UsersPage.jsx';
import SectionsPage from './components/pages/Sections/SectionsPage.jsx';
import ContentsPage from './components/pages/Contents/ContentsPage.jsx';
import ExpensesPage from './components/pages/Expenses/ExpensesPage.jsx';
import SettingsPage from './components/pages/Settings/SettingsPage.jsx';

// Order Pages
import PendingOrdersPage from './components/pages/Orders/PendingOrdersPage.jsx';
import PreparingFoodPage from './components/pages/Orders/PreparingFoodPage.jsx';
import DeliveryOnWayPage from './components/pages/Orders/DeliveryOnWayPage.jsx';
import DeliveredOrdersPage from './components/pages/Orders/DeliveredOrdersPage.jsx';
import OrderAcceptedPage from './components/pages/Orders/OrderAcceptedPage.jsx';
import OrderRejectedPage from './components/pages/Orders/OrderRejectedPage.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B00',
    },
    secondary: {
      main: '#17B2BA',
    },
  },
});

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar collapsed={sidebarCollapsed} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/subcategories" element={<SubCategoriesPage />} />
              
              {/* Products Routes */}
              <Route path="/products/addnewproducts" element={<AddNewProduct />} />
              <Route path="/products/viewproducts" element={<ViewProduct />} />

              <Route path="/outlets" element={<OutletsPage />} />
              <Route path="/offers" element={<OffersPage />} />
              
              {/* Order Routes */}
              <Route path="/orders/pending" element={<PendingOrdersPage />} />
              <Route path="/orders/accepted" element={<OrderAcceptedPage />} />
              <Route path="/orders/rejected" element={<OrderRejectedPage />} />
              <Route path="/orders/preparing" element={<PreparingFoodPage />} />
              <Route path="/orders/on-the-way" element={<DeliveryOnWayPage />} />
              <Route path="/orders/delivered" element={<DeliveredOrdersPage />} />
              
              <Route path="/users" element={<UsersPage />} />
              <Route path="/sections" element={<SectionsPage />} />
              <Route path="/contents" element={<ContentsPage />} />
              <Route path="/expenses" element={<ExpensesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App; 