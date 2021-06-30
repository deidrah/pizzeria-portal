import React from 'react';
import styles from './OrderNew.module.scss';
import CheckboxTable from '../CheckboxTable/CheckboxTable';
import ListDish from './ListDish';

import { Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '30px',
  },
}));

const OrderNew = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Box mb={7} className={styles.component}>
        <Typography variant="h3">NEW Order</Typography>
      </Box>
      <CheckboxTable />
      <Box mt={5}>
        <ListDish />
      </Box>
      <Button
        className={classes.button}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
      >
        Confirm the orders
      </Button>
    </Grid>
  );
};

export default OrderNew;
