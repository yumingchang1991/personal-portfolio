/**
 * for existing Module
 */
import SiteLogoText from '../utility/SiteLogoText';
import NavBarListItem from './navBarListItem';
import NavBarListLinkExternal from './navBarListLinkExternal';
/**
 * for App Bar
 */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

/**
 * For Drawer
 */
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider'

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';

/**
 * Main Function
 */
export default function NavBarMobile() {
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
    flexgrow: 1,
    minWidth: '100vw',
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
            sx={{ paddingBlock: 0 }}
          >
            <MenuIcon
              fontSize='large'
              sx={{
                color: "#e6e6e6",
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
        PaperProps={{ sx: { minWidth: '300px' }}}
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
            <NavBarListItem targetLocation={'About'} eventHandler={handleDrawerClose} />
            <NavBarListItem targetLocation={'Projects'} eventHandler={handleDrawerClose} />
            <NavBarListItem targetLocation={'Contact'} eventHandler={handleDrawerClose} />
            <Divider />
            <NavBarListLinkExternal
              targetLocation={'Blog'}
              targetUrl={'https://yumingchang1991.medium.com/technical-article-structure-on-medium-954850e1ef4d'} eventHandler={handleDrawerClose} />
          </List>
        </nav>
      </SwipeableDrawer>
    </>
  )
}