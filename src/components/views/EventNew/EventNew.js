import React from 'react';
import styles from './EventNew.module.scss';
import CheckboxTable from '../CheckboxTable/CheckboxTable';
import DatePicker from '../../../utils/DatePicker';
import TimePicker from '../../../utils/TimePicker';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EventList from './EventList';

const EventNew = () => (
  <div className={styles.component}>
    <h2>NEW Event</h2>
    <Grid className={styles.dateTimePicker}>
      <DatePicker />
      <TimePicker />
    </Grid>
    <CheckboxTable />
    <EventList />
    <Button
      type="submit"
      size="large"
      variant="contained"
      color="primary"
    >
      Confirm the Event
    </Button>
  </div>
);


export default EventNew;