import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    textAlign: "center",
    marginTop: "1.35em"
  },
  footerText: {
    marginTop: "1.35em"
  },
  footerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main
  }
})

const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Divider />
      <Typography className={classes.footerText} type="body1" gutterBottom>
        Coded by Andreas Höpcke | Quote API by&nbsp; 
        <a 
          className={classes.footerLink} 
          href="https://talaikis.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Tadas Talaikis
        </a>
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Footer);