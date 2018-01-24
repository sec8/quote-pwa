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
  }

  componentDidMount() {
    this.setState({
      quoteText: "A wise man once said...",
      quoteAuthor: "Nothing",
    })
  }

  getQuotes = () => {
    fetch('/quote')
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response;
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          quoteText: data.quote,
          quoteAuthor: data.author,
          quoteSaveFailed: false,
          requestFailed: false,
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  };

  saveQuotes = () => {
    const quoteText = this.state.quoteText;
    const quoteAuthor = this.state.quoteAuthor;

    DB.findQuotes()
      .then( (res) => {
        console.log(res);
        if (!res) {
          return DB.addQuote({quoteText, quoteAuthor});
        } else if (res.some(quotes => quotes.quoteText === quoteText) !== true){
          return DB.addQuote({quoteText, quoteAuthor});
        } else {
          this.setState({quoteSaveFailed: true});
        }
      })
  }

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
              getQuotes={this.getQuotes.bind(this)} 
              saveQuotes={this.saveQuotes.bind(this)} 
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
