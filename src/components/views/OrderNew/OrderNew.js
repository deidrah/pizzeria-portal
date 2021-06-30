import React from 'react';
import styles from './OrderNew.scss';
import CheckboxTable from '../CheckboxTable/CheckboxTable';
import ListDish from './ListDish';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const OrderNew = () => {
  return (
    <Grid>
      <div className={styles.component}>
        <h2>NEW Order</h2>
      </div>
      <CheckboxTable />
      <ListDish />
      <Button
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