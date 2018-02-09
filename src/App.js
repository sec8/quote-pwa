import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'typeface-roboto';

import Navigation from './Navigation';
import RandomQuote from './RandomQuote';
import QuoteList from './QuoteList';

const Page = (props) => (
  <div className="Layout-Wrapper">
    <Navigation title={props.title} />
    <div className="Content-Wrapper">
      {props.component}
    </div>
  </div>
);

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
