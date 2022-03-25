// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

export default function GlobalMenu() {
  return (
    <React.Fragment>
      <IconButton
        // aria-label="open drawer"
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