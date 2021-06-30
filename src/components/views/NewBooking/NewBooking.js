import React from 'react';
import styles from './NewBooking.module.scss';
import CheckboxTable from '../CheckboxTable/CheckboxTable';
import DatePicker from '../../../utils/DatePicker';
import TimePicker from '../../../utils/TimePicker';
import BookingList from './BookingList';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const BookingNew = () => (
  <Grid className={styles.component}>
    <h2>NEW Booking</h2>
    <Grid className={styles.dateTimePicker}>
      <DatePicker />
      <TimePicker />
    </Grid>
    <CheckboxTable />
    <BookingList />
    <Button
      type="submit"
      size="large"
      variant="contained"
      color="primary"
    >
      Confirm the Booking
    </Button>
  </Grid>
);

export default BookingNew;