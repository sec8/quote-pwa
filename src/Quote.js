import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Save from 'material-ui-icons/Save';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = {
  card: {
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
  },
  cacheQuotesAction: {
    justifyContent: "center",
    height: "30px",
  },
  cacheIcon: {
    height: "auto",
  }
};

class Quote extends Component {

  getRandomQuote = () => {
    this.props.getQuote();
  }

  saveRandomQuote = () => {
    this.props.saveQuote();
  }

  cacheRandomeQuotes = () => {
    this.props.cacheQuotes();
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
        <Divider />
        <CardActions className={classes.cacheQuotesAction}>
          <Typography type="body2">
            <IconButton 
              className={classes.cacheIcon} 
              onClick={this.cacheRandomeQuotes.bind(this)}
            >
            <Save />
            </IconButton>
            Cache a collection of random quotes
          </Typography>
        </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Quote);