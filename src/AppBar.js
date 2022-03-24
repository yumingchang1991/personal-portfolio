// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

export default function NavBar() {
  return (
    <ScopedCssBaseline>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' component='div'>
            Yu-Ming
          </Typography>
        </Toolbar>
      </AppBar>
    </ScopedCssBaseline>
  )
}