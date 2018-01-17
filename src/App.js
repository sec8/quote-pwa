import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import RandomQuote from './RandomQuote';

const Page = (props) => (
  <div className="Layout-Wrapper">
    <Navigation title={props.title} />
    <div className="Content-Wrapper">
      <RandomQuote />
    </div>
  </div>
);

const Home = (props) => (
  <Page title="Home" />
);

const About = (props) => (
  <Page title="About" />
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    );
  }
}

export default App;
