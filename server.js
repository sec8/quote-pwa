import express from 'express';
import request from 'request';
import path from 'path';

const app = express();
const URL = "https://talaikis.com/api/quotes/random/";

let quote;

app.enable("trust proxy");
app.use(express.static('./build'));

const getQuote = () => {
  request.get(URL, (error, response, data) => {
    quote = data;
  });
};


app.get('/quote', function (req, res) {
  getQuote();
  res.send(quote);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});