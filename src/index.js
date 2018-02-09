import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Reboot from 'material-ui/Reboot/Reboot';

ReactDOM.render((
  <div>
    <Reboot />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
), document.getElementById('root'));
//registerServiceWorker();
