// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import SiteLogoText from './SiteLogoText';

export default function NavBar() {
  return (
    <ScopedCssBaseline>
        <AppBar position='sticky'>
          <Toolbar
            sx={{
              width: '100vw',
              padding: '1rem',
              backgroundColor: '#E6E6E6'
              }}>
            <SiteLogoText />
          </Toolbar>
        </AppBar>
    </ScopedCssBaseline>
  )
}