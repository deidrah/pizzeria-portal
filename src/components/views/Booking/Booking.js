import React from 'react';
import styles from './Booking.scss';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const booking = [
  {
    id: '1',
    date: '01-04-2021',
    hour: '18:00',
    table: '1',
    name: 'James Smith',
    contact: '123-456-789',
    people: '2',
    duration: '1h',
    details: 'Starter: Water',
  },
];


const Booking = (props) => {
  return (
    <div className={styles.component}>
      <Grid container justify="space-around">
        <Grid item xs={9}>
          <Typography className={styles.title} variant="h5" component="h5">
            Booking {props.match.params.id}
          </Typography>
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Table</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">People</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booking.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell align="center">{booking.id}</TableCell>
              <TableCell align="center">{booking.date}</TableCell>
              <TableCell align="center">{booking.hour}</TableCell>
              <TableCell align="center">{booking.duration}</TableCell>
              <TableCell align="center">{booking.name}</TableCell>
              <TableCell align="center">{booking.contact}</TableCell>
              <TableCell align="center">{booking.people}</TableCell>
              <TableCell align="center">{booking.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;