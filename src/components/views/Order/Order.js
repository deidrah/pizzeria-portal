import React from 'react';
import styles from './Order.scss';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const order = [
  {
    id: '123',
    name: 'Dinner',
    table: '3',
    amount: '2',
    price: '45$',
    details: 'Beef with chips and carrot salad',
  },
  {
    id: '234',
    name: 'Salad',
    table: 'Takeaway',
    amount: '1',
    price: '19$',
    details: 'Salad with cheese, onion, cucumber and feta',
  },
];


const Order = (props) => {
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
            <TableCell align="center">Order Number</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Table</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Details</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.table}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.details}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;