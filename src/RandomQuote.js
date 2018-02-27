import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'

import Loading from './Loading';
import Stats from './Stats';
import Quote from './Quote';
import DB from './DB';

const styles = theme => ({
  actionButton: {
    width: "100%"
  },
  savedMsg: {
    textAlign: "Center",
    color: "Green",
  },
  failedMsg: {
    textAlign: "Center",
    color: "Red",
  },
  saveIcon: {
    marginLeft: theme.spacing.unit
  }
});

class RandomQuote extends Component {
  // define the initial component states
  state = {
    requestFailed: false,
    quoteSaveFailed: false,
    initialQuoteSet: false,
    numberOfCachedQuotes: 0,
    numberOfSavedQuotes: 0,
    quotes: [],
  }

  //set initial quote before rendering
  componentWillMount() {
    //is just true for the initial ssr
    if(this.props.initialQuote) {
      this.setState({
        quoteText: this.props.initialQuote.quote,
        quoteAuthor: this.props.initialQuote.author,
      })
    }
  }

  //init functions that are called after rendering
  componentDidMount() {
    this.initRandomQuoteGen();
    this.getStatistics();
  }
  
  //get statistics based on the data in the local storage
  getStatistics = () => {
    //stats for saved quotes for offline use
    DB.findCachedQuotes()
      .then(data => {
        if (data) {
          this.setState({
            numberOfCachedQuotes: data.length
          })
        }
      })
    //stas for quotes in the favlist
    DB.findQuotes()
      .then(data => {
        if (data) {
          this.setState({
            numberOfSavedQuotes: data.length
          })
        }
      })
  }

  //init function for the initial quote
  initRandomQuoteGen = () => {
    //check for quotes in local storage
    DB.findCachedQuotes()
      .then(data => {
        if (!data) {
          //fetch quotes from the server if there are none
          this.fetchQuotes();
        } else {
          //get initial quote from local storage
          this.getQuote();
        }
      })
  }

  // fetch quotes from the server api
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
        //pass the quotes to the quotes state
        this.setState({
          requestFailed: false,
          quotes: data,
        })
        //save the quotes for offline use
        this.cacheQuotes();
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  // move quotes from the state to the local storage
  cacheQuotes = () => {
    let fetchedQuotes = this.state.quotes;
    let newQuotes = [];
    //check for quotes in the local storage
    DB.findCachedQuotes()
      .then(data => {
        if ( ! data ) {
          //if there are none save 100 quotes
          DB.cacheQuotes(fetchedQuotes);
          this.setState({
            numberOfCachedQuotes: fetchedQuotes.length
          })
        } else {
          // if there are quotes in the local storage
          // check for duplicates and filter them out before saving new quotes
          newQuotes = fetchedQuotes.filter(newQuote => {
            return (data.some(cachedQuote => cachedQuote.quote === newQuote.quote) !== true);
          })
          //save filtered array
          DB.cacheQuotes(newQuotes);
          this.setState({
            numberOfCachedQuotes: data.length + newQuotes.length
          })
        }
      })

  }

  // get a random quote from local storage
  getQuote = () => {
    let random;
    DB.findCachedQuotes()
      .then(data => {
        random = data[Math.floor(Math.random() * data.length)];
        
        this.setState({
          quoteText: random.quote,
          quoteAuthor: random.author,
          quoteSaveFailed: false,
          requestFailed: false,
        })
      })
  };

  // save a random quote to your favlist
  addQuote = () => {
    const quoteText = this.state.quoteText;
    const quoteAuthor = this.state.quoteAuthor;

    DB.findQuotes()
      .then( (data) => {
        if (!data ) {
          DB.addQuote({quoteText, quoteAuthor});
          this.setState({
            numberOfSavedQuotes: 1,
            quoteSaveFailed: true
          })
        } else if (data.some(quotes => quotes.quoteText === quoteText) !== true){
          DB.addQuote({quoteText, quoteAuthor});
          this.setState({
            numberOfSavedQuotes: data.length + 1,
            quoteSaveFailed: true
          })
        } else {
          return;
        }
      })
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {!this.state.quoteText ? 
              <Loading /> 
            : <Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} />
            }
          </Grid>
          <Grid item xs={6} md={6}>
            <Button 
              className={classes.actionButton} 
              onClick={this.addQuote.bind(this)}
              color="primary"
              raised
            >
              Save
              <Save className={classes.saveIcon} />
            </Button>
          </Grid>
          <Grid  item xs={6} md={6}>
            <Button 
              className={classes.actionButton} 
              onClick={this.getQuote.bind(this)}
              color="primary"
              raised
            >
              Next
              <KeyboardArrowRight />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stats 
              fetchQuotes={this.fetchQuotes.bind(this)}
              numberOfCachedQuotes={this.state.numberOfCachedQuotes} 
              numberOfSavedQuotes={this.state.numberOfSavedQuotes}
            />
          </Grid>
          <Grid item xs={12} md={6}>
              {this.state.quoteSaveFailed ? <p className={classes.savedMsg}>Quote saved!</p> : ""}
              {this.state.requestFailed ? <p className={classes.failedMsg}>Request Failed!</p> : ""}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(RandomQuote);
