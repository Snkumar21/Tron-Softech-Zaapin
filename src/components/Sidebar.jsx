import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  Collapse,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PendingIcon from '@mui/icons-material/Pending';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

const drawerWidth = 240;
const collapsedWidth = 70; // Adjusted for better spacing

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
  { text: 'Sub Categories', icon: <CategoryIcon />, path: '/subcategories' },
  { 
    text: 'Products', 
    icon: <ListIcon />, 
    subItems: [
      { text: 'Add New Product', icon: <AddIcon sx={{ fontSize: 20 }} />, path: '/products/addnewproducts' },
      { text: 'View Products', icon: <ListIcon sx={{ fontSize: 20 }} />, path: '/products/viewproducts' }
    ]
  },
  { text: 'Outlets', icon: <StorefrontIcon />, path: '/outlets' },
  { text: 'Offers & Coupons', icon: <LocalOfferIcon />, path: '/offers' },
  {
    text: 'Orders',
    icon: <ShoppingCartIcon />,
    subItems: [
      { text: 'Pending Orders', icon: <PendingIcon sx={{ fontSize: 20 }} />, path: '/orders/pending' },
      { text: 'Order Accepted', icon: <CheckCircleOutlineIcon sx={{ fontSize: 20 }} />, path: '/orders/accepted' },
      { text: 'Order Rejected', icon: <HighlightOffIcon sx={{ fontSize: 20 }} />, path: '/orders/rejected' },
      { text: 'Preparing Food', icon: <RestaurantIcon sx={{ fontSize: 20 }} />, path: '/orders/preparing' },
      { text: 'Delivery on the way', icon: <TwoWheelerIcon sx={{ fontSize: 20 }} />, path: '/orders/on-the-way' },
      { text: 'Delivered Orders', icon: <SendIcon sx={{ fontSize: 20 }} />, path: '/orders/delivered' },
    ],
  },
  { 
    text: 'Users',
    icon: <PeopleIcon />,
    subItems: [
      { text: 'Add New User', icon: <AddIcon sx={{ fontSize: 20 }} />, path: '/users/addnewuser' },
      { text: 'View Customers', icon: <ListIcon sx={{ fontSize: 20 }} />, path: '/users/viewcustomers' },
      { text: 'View Delivery Boys', icon: <ListIcon sx={{ fontSize: 20 }} />, path: '/users/viewdeliveryboy' }
    ],
  },
  { text: 'Sections', icon: <ViewModuleIcon />, path: '/sections' },
  { 
    text: 'Contents',
    icon: <ViewModuleIcon />,
    subItems: [
      { text: 'Add New Content', icon: <AddIcon sx={{ fontSize: 20 }} />, path: '/contents/addnewcontent' },
      { text: 'View Content', icon: <ListIcon sx={{ fontSize: 20 }} />, path: '/contents/viewcontent' }
    ]
  },
  { text: 'Expenses', icon: <AttachMoneyIcon />,
    subItems: [
      { text: 'Add Expenses', icon: <AddIcon sx={{ fontSize: 20 }} />, path: '/expenses/addnewexpenses' },
      { text: 'View Expenses', icon: <ListIcon sx={{ fontSize: 20 }} />, path: '/expenses/viewexpenses' }
    ]
  },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleToggle = (text) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? collapsedWidth : drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#2C3E50',
          color: 'white',
          transition: 'width 0.2s',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: collapsed ? 'center' : 'flex-start' }}>
        {!collapsed && (
          <Typography variant="h5" component="div" sx={{ color: 'white' }}>
            Zaapin
          </Typography>
        )}
      </Box>
      <List>
        {menuItems.map((item) =>
          item.subItems ? (
            <React.Fragment key={item.text}>
              <Tooltip title={collapsed ? item.text : ''} placement="right">
                <ListItem
                  button
                  onClick={() => handleToggle(item.text)} // ✅ toggle based on item text
                  sx={{
                    my: 1,
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: collapsed ? 0 : 2, justifyContent: 'center' }}>
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={item.text} />}
                  {!collapsed && (openDropdowns[item.text] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
              </Tooltip>
              
              <Collapse in={!collapsed && openDropdowns[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.text}
                      onClick={() => navigate(subItem.path)}
                      sx={{
                        pl: 4,
                        py: 1,
                        backgroundColor: location.pathname === subItem.path ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: 2 }}>
                        {subItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <Tooltip title={collapsed ? item.text : ''} placement="right" key={item.text}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                sx={{
                  my: 1,
                  backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  px: 2.5,
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: collapsed ? 0 : 2, justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={item.text} />}
              </ListItem>
            </Tooltip>
          )
        )}
      </List>
    </Drawer>
  );
}

export default Sidebar; 