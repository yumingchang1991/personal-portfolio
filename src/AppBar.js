/**
 * for existing Module
 */
import SiteLogoText from './SiteLogoText';

/**
 * for App Bar
 */
import React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';

/**
 * For Drawer
 */
// import Drawer from '@mui/material/Drawer';
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider'
// import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


/**
 * Main Function
 */
export default function NavBar() {
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toolBarCSS = {
    justifyContent: 'space-between',
    width: '100vw',
    padding: '1rem',
    backgroundColor: '#E6E6E6'
  }
  const drawerCSS = {
    // width: '240px',
    flexshrink: 0,
    // '& .MuiDrawer-paper': {
    //   width: '240px',
    // }
  }

  return (
    <ScopedCssBaseline>
      <AppBar position='sticky' open={open}>
        <Toolbar
          sx={toolBarCSS}>
          <SiteLogoText />
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          // sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon
              fontSize='large'
              sx={{
                color: "#E6E6E6",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={open}
        sx={drawerCSS}
        anchor='right'
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <IconButton onClick={handleDrawerClose}>
         <ChevronRightIcon />
        </IconButton>
        <Divider />
        <nav aria-label='main navigation menu'>
          <List>
            <ListItem onClick={handleDrawerClose}>
              <NavLink to='/about-me'>
                <ListItemButton>
                  <ListItemText primary='About Me' />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <NavLink to='/backend-projects'>
                <ListItemButton>
                  <ListItemText primary='Backend Projects' />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <NavLink to='/frontend-projects'>
                <ListItemButton>
                  <ListItemText primary='Frontend Projects' />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </nav>
      </SwipeableDrawer>
    </ScopedCssBaseline>
  )
}