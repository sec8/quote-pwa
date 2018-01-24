import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = {
  quote: {
  
  },
  quoteText: {

  },
  quoteAuthor: {

  },
};

class Quote extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.quote}>
        <Typography className={classes.quoteText} type="body2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </Typography>
        <Typography  className={classes.quoteAuthor} type="body1">
          - Lorem
        </Typography>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(Quote);