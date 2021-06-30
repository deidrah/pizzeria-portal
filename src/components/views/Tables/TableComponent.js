import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const availableTables = [
  {
    hours: '11:00',
    tables: [
      { id: '1', status: 'null', order: null },
      { id: '2', status: 'booking', order: 234 },
      { id: '3', status: 'events', order: 345 },
      { id: '4', status: 'null', order: null },
    ],
  },
  {
    hours: '12:00',
    tables: [
      { id: '1', status: 'booking', order: 456 },
      { id: '2', status: 'events', order: 999 },
      { id: '3', status: 'null', order: null },
      { id: '4', status: 'null', order: null },
    ],
  },
];

const renderActions = (order, status) => {
  switch (status) {
    case 'booking':
      return (
        <Button component={Link} to={`/tables/${status}/${order}`}>
          Booked {order}
        </Button>
      );
    case 'events':
      return (
        <Button component={Link} to={`/tables/${status}/${order}`}>  
          Event {order}
        </Button>
      );
    case 'null':
      return (
        <Button component={Link} to={'/tables/bookingNew'}>New Booking</Button>
      );
    default:
      return null;
  }
};


const TableComponent = () => (
  <TableContainer component={Paper}>
    <Table aria-label="caption table">
      <caption>Reservations and Events</caption>
      <TableHead>
        <TableRow>
          <TableCell align="center">Hours</TableCell>
          <TableCell align="center">Table 1</TableCell>
          <TableCell align="center">Table 2</TableCell>
          <TableCell align="center">Table 3</TableCell>
          <TableCell align="center">Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {availableTables.map((row) => (
          <TableRow key={row.hours} >
            <TableCell align="center" component="th" scope="row">
              {row.hours}
            </TableCell>
            {row.tables.map((table =>
              <TableCell key={table.id} align="center">
                {renderActions(table.order, table.status)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableComponent;
