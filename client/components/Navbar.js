import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navigationbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.grow} variant="h6" color="inherit">
              Just Potatoes
            </Typography>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/products" color="inherit">
              Products
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

Navigationbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigationbar);
