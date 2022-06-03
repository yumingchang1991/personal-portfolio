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

// basic link
import Link from '@mui/material/Link';

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
    // width: '240px',
    flexshrink: 0,
    // '& .MuiDrawer-paper': {
    //   width: '240px',
    // }
  }

  return (
    <>
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
                // color: "#252525",
                color: "#e6e6e6"
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
          <ChevronRightIcon fontSize='large' sx={{ color: "#252525" }}/>
        </IconButton>
        <Divider />
        <nav aria-label='main navigation menu'>
          <List>
            <ListItem onClick={handleDrawerClose}>

              <ListItemButton>
                <ListItemText>
                  <Typography fontSize={'1.5rem'}>
                    About Me
                  </Typography>
                </ListItemText>
              </ListItemButton>

            </ListItem>
            <ListItem onClick={handleDrawerClose}>

              <ListItemButton>
                <ListItemText>
                  <Typography fontSize={'1.5rem'}>
                    Backend Projects
                  </Typography>
                </ListItemText>
              </ListItemButton>

            </ListItem>
            <ListItem onClick={handleDrawerClose}>

            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <ListItemButton>
                <ListItemText>
                  <Link href={'https://yumingchang1991.github.io/JavaScript30/'} color={'inherit'} underline={'none'} fontSize={'1.5rem'}>
                    JS30 Challenge
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </SwipeableDrawer>
    </>
  )
}