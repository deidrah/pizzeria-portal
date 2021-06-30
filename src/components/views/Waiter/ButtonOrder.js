import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const ButtonOrder = () => (
  <Grid>
    <Button
      component={Link}
      to={'/waiter/orderNew'}
      type="submit"
      size="large"
      variant="contained"
      color="primary"
      fullWidth
    >
      New Order
    </Button>
  </Grid>
);

export default ButtonOrder;