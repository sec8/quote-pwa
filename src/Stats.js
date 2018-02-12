import React from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';

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

const Stats = (props) => {
  const { classes } = props
  return(
    <div>
      <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography type="headline">Statistics</Typography>
        <Typography>Cached Quotes:</Typography>
        <Typography>Liked Quotes:</Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button  className={classes.actionButton} color="primary" raised>
          <Save className={classes.actionIcon} />
          Cache Quotes
        </Button>
      </CardActions>
      </Card>
    </div>
  )
}

export default withStyles(styles)(Stats);