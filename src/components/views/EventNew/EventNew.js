import React from 'react';
import styles from './EventNew.module.scss';
import CheckboxTable from '../CheckboxTable/CheckboxTable';
import DatePicker from '../../../utils/DatePicker';
import TimePicker from '../../../utils/TimePicker';

import { Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EventList from './EventList';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  pickers: {
    margin: '30ox 0',
    padding: '30px 0',
    display: 'inline-flex',
  },
  button: {
    marginTop: '30px',
  },
}));

const EventNew = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <Typography variant="h3">NEW Event</Typography>
      <Grid className={classes.pickers}>
        <Box display="inline-flex" p={1} m={3}>
          <DatePicker />
        </Box>
        <Box display="inline-flex" p={1} m={3}>
          <TimePicker />
        </Box>
      </Grid>
      <CheckboxTable />
      <Box mt={5} >
        <EventList />
      </Box>
      <Button className={classes.button}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
      >
        Confirm the Event
      </Button>
    </div>
  );
};


export default EventNew;