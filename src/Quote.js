import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    
  },
  quoteText: {
    
  },
  quoteAuthor: {
    
  }
};

const Quote = (props) => {

  const { classes, quoteText, quoteAuthor } = props;

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
      <CardActions>
        <Button raised>Next Quote</Button>
        <Button raised>Save Quote</Button>
      </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Quote);