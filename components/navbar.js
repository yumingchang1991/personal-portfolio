/**
 * for existing Module
 */
import SiteLogoText from '../utility/SiteLogoText';

/**
 * for App Bar
 */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/**
 * For Drawer
 */
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider'

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Next Link
import Link from 'next/link'

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
    width: "100vw",
    justifyContent: 'space-between',
    padding: '1rem',
  }
  const drawerCSS = {
    flexshrink: 0,
  }

  const listItemCSS = {
    fontSize: '1.5rem'
  }

  return (
    <>
      <AppBar position='fixed' open={open}>
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
                // color: "#252525",
                color: "#e6e6e6"
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
      <SwipeableDrawer
        open={open}
        sx={drawerCSS}
        anchor='right'
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon fontSize='large' sx={{ color: "#252525" }} />
        </IconButton>
        <Divider />
        <nav aria-label='main navigation menu'>
          <List>
            <ListItem onClick={handleDrawerClose}>
              <Link href='/about'>
                <ListItemButton>
                  <ListItemText>
                    <Typography sx={listItemCSS}>
                      About
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Link href='/projects'>
                <ListItemButton>
                  <ListItemText>
                    <Typography sx={listItemCSS}>
                      Projects
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Link href='/contact'>
                <ListItemButton>
                  <ListItemText>
                    <Typography sx={listItemCSS}>
                      Contact
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
            <ListItem onClick={handleDrawerClose}>
              <ListItemButton>
                <a href={'https://yumingchang1991.github.io/JavaScript30/'} target='_blank'>
                  <ListItemText>
                    <Typography sx={listItemCSS}>
                      JS30 Challenge
                    </Typography>
                  </ListItemText>
                </a>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </SwipeableDrawer>
    </>
  )
}