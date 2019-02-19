import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  withStyles,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from '@material-ui/core';
import PropTypes from 'prop-types';
import penniesToDollars from '../utils/productUtils';

class SingleProduct extends React.Component {
  render() {
    const { classes, name, imageUrl, price } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            className={classes.media}
            height="150"
            image={imageUrl}
            title={name}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            Price: ${penniesToDollars(price)}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
      </Card>
    );
  }
}

const styles = {
  card: {
    maxWidth: 250,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

SingleProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleProduct);
