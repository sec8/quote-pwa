import express from 'express';
import request from 'request';

const app = express();
const URL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";

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