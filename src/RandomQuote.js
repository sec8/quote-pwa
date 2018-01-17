import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Quote from './Quote';


const styles = {
  root: {
    marginTop: 150,
  },
};

class RandomQuote extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Quote />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(RandomQuote);
