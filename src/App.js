import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'typeface-roboto';
import RandomQuote from './RandomQuote';
import QuoteList from './QuoteList';
import Page from './Page';

const Home = (props) => (
  <Page title="Random Quote" component={<RandomQuote />} />
);

const YourQuotes = (props) => (
  <Page title="Your Quotes" component={<QuoteList />}/>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/yourQuotes" component={YourQuotes}/>
      </Switch>
    );
  }
}

export default App;
