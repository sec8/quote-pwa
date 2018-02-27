import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RandomQuote from './RandomQuote';
import QuoteList from './QuoteList';
import Page from './Page';

class App extends Component {

  // remove inline-css after rendering with ssr
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    //define a prop for the inital quote that comes from index.js
    const { initialQuote } = this.props

    //views of the pwa
    const Home = (props) => (
      //pass initial quote to <RandomQuote /> 
      <Page title="Random Quote" component={<RandomQuote initialQuote={initialQuote} />} />
    );
    
    const YourQuotes = (props) => (
      <Page title="Your Quotes" component={<QuoteList />}/>
    );

    return (
      <Switch>
        <Route exact path="/" render={() => (<Home initialQuote={initialQuote} />)}/>
        <Route path="/yourQuotes" component={YourQuotes}/>
      </Switch>
    );
  }
}

export default App;
