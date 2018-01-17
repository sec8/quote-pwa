import express from 'express';
import request from 'request';

const app = express();
const URL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";

app.get('/', function (req, res) {
  res.send('Hello World!!');
});

request.get(URL, (error, response, data) => {
  let json = JSON.parse(data);
  console.log(json);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});