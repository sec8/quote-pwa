import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Reboot from 'material-ui/Reboot/Reboot';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './theme';


// render the ui
ReactDOM.render((
  <div>
  <MuiThemeProvider theme={theme}>
    <Reboot />
    <BrowserRouter>
      {/* get the inital quote from the html-document generated on the server and pass it to <APP /> */}
      <App initialQuote={window.__PRELOADED_STATE__}/>
    </BrowserRouter>
  </MuiThemeProvider>
  </div>
), document.getElementById('root'));
registerServiceWorker();
