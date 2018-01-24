import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    textAlign: "center",
  },
  quoteText: {

  },
  quoteAuthor: {

  },
  cardActions: {
    justifyContent: "center",
  }
};

class Quote extends Component {

  getRandomQuote = () => {
    this.props.getQuotes();
  }

  saveRandomQuote = () => {
    this.props.saveQuotes();
  }

  render() {
    const { classes, quoteText, quoteAuthor } = this.props;

    return (
      <div>
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.quoteText} type="headline" gutterBottom>
            {quoteText}
          </Typography>
          <Typography  className={classes.quoteAuthor} type="subheading">
            - {quoteAuthor}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button raised onClick={this.getRandomQuote.bind(this)}>Next Quote</Button>
          <Button raised onClick={this.saveRandomQuote.bind(this)}>Save Quote</Button>
        </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Quote);