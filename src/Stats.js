import React, { Component } from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Cached from 'material-ui-icons/Cached';
import {Link} from 'react-router-dom';

const styles = theme => ({
  cardContent: {
    display: "inline-block"
  },
  actionButton: {
    width: "100%"
  },
  actionIcon: {
    marginRight: theme.spacing.unit
  }
});

class Stats extends Component{

  cacheRandomQuotes = () => {
    this.props.fetchQuotes();
  }

  render() {
    const { classes, numberOfCachedQuotes, numberOfSavedQuotes } = this.props
    return(
      <div>
        <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography type="headline">Statistics</Typography>
          <Typography>Cached Quotes: {numberOfCachedQuotes}</Typography>
          <Typography>Liked Quotes: {numberOfSavedQuotes} <Link to="/yourQuotes">(List)</Link></Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button  
            onClick={this.cacheRandomQuotes.bind(this)}
            className={classes.actionButton} 
            color="primary" 
            raised
          >
            <Cached className={classes.actionIcon} />
            Cache Quotes
          </Button>
        </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Stats);