import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import DashboardPage from './components/pages/Dashboard/DashboardPage.jsx';
import CategoriesPage from './components/pages/Categories/CategoriesPage.jsx';
import SubCategoriesPage from './components/pages/SubCategories/SubCategoriesPage.jsx';
import SectionsPage from './components/pages/Sections/SectionsPage.jsx';
import OutletsPage from './components/pages/Outlets/OutletsPage.jsx';
import OffersPage from './components/pages/Offers/OffersPage.jsx';
import SettingsPage from './components/pages/Settings/SettingsPage.jsx';

// Products
import AddNewProduct from './components/pages/Products/AddNewProduct.jsx';
import ViewProduct from './components/pages/Products/ViewProduct.jsx';

// Users
import AddNewUser from './components/pages/Users/AddNewUser.jsx';
import ViewCustomer from './components/pages/Users/ViewCustomers.jsx';
import ViewDeliveryBoy from './components/pages/Users/ViewDeliveryBoys.jsx';

// Contents
import AddNewContents from './components/pages/Contents/AddNewContent.jsx';
import ViewContent from './components/pages/Contents/ViewContent.jsx';

// Expenses
import AddNewExpenses from './components/pages/Expenses/AddExpenses.jsx';
import ViewExpenses from './components/pages/Expenses/ViewExpenses.jsx';

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
              
              {/* Users Routes */}
              <Route path="/users/addnewuser" element={<AddNewUser />} />
              <Route path="/users/viewcustomers" element={<ViewCustomer />} />
              <Route path="/users/viewdeliveryboy" element={<ViewDeliveryBoy />} />

              <Route path="/sections" element={<SectionsPage />} />

              {/* Contents Routes */}
              <Route path="/contents/addnewcontent" element={<AddNewContents />} />
              <Route path="/contents/viewcontent" element={<ViewContent />} />

              {/* Expenses Routes */}
              <Route path="/expenses/addnewexpenses" element={<AddNewExpenses />} />
              <Route path="/expenses/viewexpenses" element={<ViewExpenses />} />

              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App; 