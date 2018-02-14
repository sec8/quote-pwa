import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import FormatQuote from 'material-ui-icons/FormatQuote';

const styles = theme => ({
  card: {
    textAlign: "center",
  },
  loadingContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  quoteIcon: {
    display: "block",
  },
  loadingQuote: {
    background: theme.palette.grey[200],
    width: "100%",
    marginBottom: "3px",
    height: "1em",
  },
  loadingAuthor: {
    background: theme.palette.grey[200],
    width: "10%",
    height: "1em",
  }
});

class Loading extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
        <CardContent>
          <FormatQuote className={classes.quoteIcon} color="primary" />
          <div className={classes.loadingContent}>
            <span className={classes.loadingQuote} />
            <span className={classes.loadingQuote} />
            <span className={classes.loadingQuote} />
              -
            <span className={classes.loadingAuthor} />
          </div>
        </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Loading);