import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RandomQuote from './RandomQuote';
import QuoteList from './QuoteList';
import Page from './Page';

class App extends Component {

  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { initialQuote } = this.props

    const Home = (props) => (
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
