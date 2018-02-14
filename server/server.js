import express from 'express';
import request from 'request';
import path from 'path';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import React, { Component } from 'react';
import { StaticRouter } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot/Reboot';
import fs from 'fs';
import App from '../babel-src/App';
import theme from '../babel-src/theme';

const app = express();
const URL = "https://talaikis.com/api/quotes/random/";
const CACHE_URL = "https://talaikis.com/api/quotes/";

let randomQuote;
let quotes;

app.use(compression());
app.enable("trust proxy");

const getRandomQuote = () => {
  request.get(URL, (error, response, data) => {
    console.log(data);
    randomQuote = JSON.parse(data);
  });
};

const getQuotes = () => {
  request.get(CACHE_URL, (error, response, data) => {
    quotes = JSON.parse(data);
  });
};

//seems like a really ugly fix to the first request failed problem
getRandomQuote();
getQuotes();

const serverRender = (req, res) => {
  const htmlFile = path.resolve(__dirname, '..', 'build', 'index.html');
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();

  fs.readFile(htmlFile, 'utf8', (err, htmlData) => {
    if(err) {
      console.error('err', err);
      return res.status(404).end()
    }
    const context = {};
    const html = renderToString(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
          <Reboot />
          <StaticRouter location={req.url} context={ context }>
            <App initialQuote={randomQuote} />
          </StaticRouter>
        </MuiThemeProvider>
      </JssProvider>
    )

    const css = sheetsRegistry.toString();

    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>
         <style id="jss-server-side">${css}</style>
         <script>
         window.__PRELOADED_STATE__=${JSON.stringify(randomQuote).replace(/</g, '\\u003c')}
         </script>`
      )
    )
  })
}

app.get('/quote', function (req, res) {
  getRandomQuote();
  res.send(randomQuote);
});

app.get('/quotes', function (req, res) {
  getQuotes();
  res.send(quotes);
});

app.get('/', serverRender);
app.use(express.static('./build'));
app.use('/*', serverRender);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});