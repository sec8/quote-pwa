import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  iconButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sideBar: {
    width: 250
  },
  sideBarHeader: theme.mixins.toolbar,
  sideBarHeaderTitle: {
    padding: "15px 16px",
  }
});

class Navigation extends Component {

  state = {
    open: false,
  };

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const { classes, title } = this.props;
    
    const sideBarMenu = (
      <div className={classes.sideBar}>
        <div className={classes.sideBarHeader}>
          <Typography className={classes.sideBarHeaderTitle} type="title">Quote PWA</Typography>
        </div>
        <Divider />
        <MenuItem onClick={this.handleToggle} component={Link} to="/">Random Quote</MenuItem>
        <MenuItem onClick={this.handleToggle} component={Link} to="/yourQuotes">Your Quotes</MenuItem>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <ToolBar>
            <IconButton className={classes.iconButton} onClick={this.handleToggle} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
          </ToolBar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          {sideBarMenu}
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);