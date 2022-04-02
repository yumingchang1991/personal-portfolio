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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Main Function
 */
export default function NavBar() {
  return (
    <ScopedCssBaseline>
        <AppBar position='sticky'>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              width: '100vw',
              padding: '1rem',
              backgroundColor: '#E6E6E6'
              }}>
            <SiteLogoText />
            <GlobalMenu />
          </Toolbar>
        </AppBar>
    </ScopedCssBaseline>
  )
}

function GlobalMenu() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

function handleDrawerOpen() {
  // add drawer component
}