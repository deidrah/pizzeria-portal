import React from 'react';
import styles from './Tables.module.scss';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Buttons = () => (
  <Grid>
    <Button
      className={styles.buttons}
      component={Link}
      to={'/tables/booking/909'}
      size="large"
      variant="contained"
      color="secondary"

    >
      Booking ID
    </Button>
    <Button
      className={styles.buttons}
      component={Link}
      to={'/tables/events/123'}
      size="large"
      variant="contained"
      color="secondary"

    >
      Event ID
    </Button>
    <Button
      className={styles.buttons}
      component={Link}
      to={'/tables/bookingNew'}
      type="submit"
      size="large"
      variant="contained"
      color="primary"

    >
      New Booking
    </Button>
    <Button
      className={styles.buttons}
      component={Link}
      to={'/tables/eventsNew'}
      type="submit"
      size="large"
      variant="contained"
      color="primary"

    >
      New Event
    </Button>
  </Grid>
);

export default Buttons;