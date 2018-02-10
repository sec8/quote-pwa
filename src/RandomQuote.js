import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Quote from './Quote';
import DB from './DB';


const styles = {
  root: {
  
  },
  savedMsg: {
    textAlign: "Center",
    color: "Green",
  },
  failedMsg: {
    textAlign: "Center",
    color: "Red",
  }
};

class RandomQuote extends Component {
  state = {
    requestFailed: false,
    quoteSaveFailed: false,
    initialQuoteSet: false,
    quotes: [],
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  // fetch quotes from the server api and set state
  fetchQuotes = () => {
    fetch('/quotes')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response;
      })
      .then(data => data.json())
      .then(data => {
        let random = data[Math.floor(Math.random() * data.length)];
        this.setState({
          requestFailed: false,
          quotes: data,
        })
        if (!this.state.initialQuoteSet) {
          this.setState({
            quoteText: random.quote,
            quoteAuthor: random.author,
            initialQuoteSet: true,
          })
        }
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  // move quotes from the state to the local cache
  cacheQuotes = () => {
    this.fetchQuotes();
    let fetchedQuotes = this.state.quotes;
    let newQuotes = [];

    DB.findCachedQuotes()
      .then(data => {
        if ( ! data ) {
          DB.cacheQuotes(fetchedQuotes);
        } else {
          newQuotes = fetchedQuotes.filter(newQuote => {
            return (data.some(cachedQuote => cachedQuote.quote === newQuote.quote) !== true);
          })
          DB.cacheQuotes(newQuotes);
        }
      })
    
  }

  // get a random quote from state or local cache
  getQuote = () => {
    let random;
    DB.findCachedQuotes()
      .then(data => {
        if ( ! data ) {
          random = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        } else {
          random = data[Math.floor(Math.random() * data.length)];
        }
        this.setState({
          quoteText: random.quote,
          quoteAuthor: random.author,
          quoteSaveFailed: false,
          requestFailed: false,
        })
      })
  };

  // save a random quote to your quote list
  saveQuote = () => {
    const quoteText = this.state.quoteText;
    const quoteAuthor = this.state.quoteAuthor;

    DB.findQuotes()
      .then( (data) => {
        if (!data) {
          return DB.addQuote({quoteText, quoteAuthor});
        } else if (data.some(quotes => quotes.quoteText === quoteText) !== true){
          return DB.addQuote({quoteText, quoteAuthor});
        } else {
          this.setState({quoteSaveFailed: true});
        }
      })
  };

  render() {
    const { classes } = this.props;

    if (!this.state.quoteText) return <p>Loading...</p>
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Quote 
              quoteText={this.state.quoteText} 
              quoteAuthor={this.state.quoteAuthor} 
              getQuote={this.getQuote.bind(this)} 
              saveQuote={this.saveQuote.bind(this)}
              cacheQuotes={this.cacheQuotes.bind(this)}
            />
            {this.state.quoteSaveFailed ? <p className={classes.savedMsg}>This Quote is already saved!</p> : ""}
            {this.state.requestFailed ? <p className={classes.failedMsg}>Request Failed</p> : ""}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(RandomQuote);
