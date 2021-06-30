import React from 'react';
import styles from './NewBooking.module.scss';
import CheckboxTable from '../CheckboxTable/CheckboxTable';
import DatePicker from '../../../utils/DatePicker';
import TimePicker from '../../../utils/TimePicker';
import BookingList from './BookingList';

import { Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '30px',
  },
}));

const BookingNew = () => {
  const classes = useStyles();
  return (
    <Grid className={styles.component}>
      <Typography variant="h3">NEW Booking</Typography>
      <Grid>
        <Box display="inline-flex" p={1} m={3}>
          <DatePicker />
        </Box>
        <Box display="inline-flex" p={1} m={3}>
          <TimePicker />
        </Box>
      </Grid>
      <CheckboxTable />
      <Box mt={5} >
        <BookingList />
      </Box>
      <Button
        className={classes.button}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
      >
        Confirm the Booking
      </Button>
    </Grid>
  );
};
export default BookingNew;