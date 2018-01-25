import express from 'express';
import request from 'request';
import path from 'path';

const app = express();
const URL = "https://talaikis.com/api/quotes/random/";
const CACHE_URL = "https://talaikis.com/api/quotes/";

let randomQuote;
let quotes;

app.enable("trust proxy");
app.use(express.static('./build'));

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

app.get('/quote', function (req, res) {
  getRandomQuote();
  res.send(randomQuote);
});

app.get('/quotes', function (req, res) {
  getQuotes();
  res.send(quotes);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});