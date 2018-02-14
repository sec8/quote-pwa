import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#05a7fe',
      light: '#6ad8ff',
      dark: '#0079ca',
      contrastText: '#fff',
    }
  },
  typography: {
    body1: {
      fontSize: "1rem"
    },
    caption: {
      fontSize: "1rem"
    }
  }
});

export default theme;