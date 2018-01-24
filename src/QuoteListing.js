import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = {
  quoteText: {
    marginTop: "1.35em",
  },
  quoteAuthor: {
    marginBottom: "1.35em",
  },
};

const QuoteListing = (props) => {
  const { data, classes } = props;

  return (
    <div>
      <Typography className={classes.quoteText} type="body2" gutterBottom>
        {data.quoteText}
      </Typography>
      <Typography className={classes.quoteAuthor} type="caption" gutterBottom>
        - {data.quoteAuthor}
      </Typography>
      <Divider />
    </div>
  )
}

export default withStyles(styles)(QuoteListing);


