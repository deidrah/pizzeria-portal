import React from 'react';
import styles from './Event.scss';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const event = [
  {
    id: '2',
    date: '01-04-2021',
    hour: '18:00',
    table: '3',
    name: 'John Blacksmith',
    contact: '123-456-789',
    people: '4',
    duration: '3h',
    details: 'Birthday',
  },
];


const Event = (props) => {
  return (
    <div className={styles.component}>
      <Grid container justify="space-around">
        <Grid item xs={9}>
          <Typography className={styles.title} variant="h5" component="h5">
            Event {props.match.params.id}
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
          {event.map((event) => (
            <TableRow key={event.id}>
              <TableCell align="center">{event.id}</TableCell>
              <TableCell align="center">{event.date}</TableCell>
              <TableCell align="center">{event.hour}</TableCell>
              <TableCell align="center">{event.duration}</TableCell>
              <TableCell align="center">{event.name}</TableCell>
              <TableCell align="center">{event.contact}</TableCell>
              <TableCell align="center">{event.people}</TableCell>
              <TableCell align="center">{event.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

Event.propTypes = {
  match: PropTypes.object,
};

export default Event;