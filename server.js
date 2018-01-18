import express from 'express';
import request from 'request';

const app = express();
const URL = "https://talaikis.com/api/quotes/random/";

let quote;

app.enable("trust proxy");

const getQuote = () => {
  request.get(URL, (error, response, data) => {
    quote = data;
  });
};


app.get('/quote', function (req, res) {
  getQuote();
  res.send(quote);
});

//app.use(express.static("./build"));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});