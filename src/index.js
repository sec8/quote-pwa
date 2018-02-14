import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Reboot from 'material-ui/Reboot/Reboot';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './theme';

ReactDOM.render((
  <div>
  <MuiThemeProvider theme={theme}>
    <Reboot />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
  </div>
), document.getElementById('root'));
registerServiceWorker();
