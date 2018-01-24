import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


import QuoteListing from './QuoteListing';
import DB from './DB';

const styles = {
  quoteList: {
  
  },
};

class Quote extends Component {

  state = {
    quotes: [],
  }

  componentDidMount() {
    this.findQuotes();
  }

  findQuotes() {
    DB.findQuotes()
      .then( (res) => {
        if ( res ) {
          this.setState({quotes: res});
        }
      });
  }

  render() {
    const { classes } = this.props;

    //if quotes is empty
    if ( this.state.quotes.length < 1 ) {
      return (
        <div>
          <Typography type="body2">There are no saved Quotes</Typography>
        </div>
      )
    }

    return (
      <div className={classes.quoteList}>
        {this.state.quotes.map( item => <QuoteListing key={item.quoteText} data={ item } />)}
      </div>
    );
  }
}

export default withStyles(styles)(Quote);