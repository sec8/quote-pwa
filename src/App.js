import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';

const Page = (props) => (
  <div>
    <Navigation title={props.title} />
    <p className="App-intro">
       To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/about">About</Link></p>
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
