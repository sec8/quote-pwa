import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  quoteText: {
    marginTop: "1.35em",
  },
  quoteAuthor: {
    marginBottom: "1.35em",
    color: theme.palette.primary.main,
  },
  authorLink: {
    textDecoration: "none",
    color: "inherit"
  }
});

const QuoteListing = (props) => {
  const { data, classes } = props;

  return (
    <div>
      <Typography className={classes.quoteText} type="body1" gutterBottom>
        "{data.quoteText}"
      </Typography>
      <Typography className={classes.quoteAuthor} type="caption" gutterBottom>
        - <a className={classes.authorLink} href={"http://wikipedia.com/wiki/" + data.quoteAuthor}>{data.quoteAuthor}</a>
      </Typography>
      <Divider />
    </div>
  )
}

export default withStyles(styles)(QuoteListing);


