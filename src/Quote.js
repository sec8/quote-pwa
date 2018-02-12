import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import FormatQuote from 'material-ui-icons/FormatQuote';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    textAlign: "center",
  },
  quoteIcon: {
    display: "block",
  },
  quoteAuthor: {
    color: theme.palette.primary.main,
  }
});

class Quote extends Component {
  render() {
    const { classes, quoteText, quoteAuthor } = this.props;

    return (
      <div>
        <Card className={classes.card}>
        <CardContent>
          <FormatQuote className={classes.quoteIcon} color="primary" />
          <Typography className={classes.quoteText} type="title" gutterBottom>
            {quoteText}
          </Typography>
            -
          <Typography  className={classes.quoteAuthor} type="subheading">
            {quoteAuthor}
          </Typography>
        </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Quote);