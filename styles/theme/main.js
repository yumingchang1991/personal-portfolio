import { createTheme } from '@mui/material/styles';

const main = createTheme({
  palette: {
    primary: {
      main: '#252525',
      warning: '#e63333'
    }
  },
  typography: {
    fontSize: 16,
  }
});

export default main;