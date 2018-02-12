import React from 'react';
import { withStyles } from 'material-ui/styles';

import Navigation from './Navigation';

const styles = theme => ({
  layoutWrapper: {
    width: "100%",
  },
  contentWrapper: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 16px",
    paddingTop: "64px",
    [theme.breakpoints.up(600)]: {
      padding: "0 24px",
      paddingTop: "64px",
    },
    [theme.breakpoints.up(948)]: {
      maxWidth: "900px",
      paddingTop: "74px",
    },
  },
});

const Page = (props) => {
  const { classes, component } = props;

  return(
    <div className={classes.layoutWrapper}>
      <Navigation title={props.title} />
      <div className={classes.contentWrapper}>
        {component}
      </div>
    </div>
  )
};

export default withStyles(styles)(Page);