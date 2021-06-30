import React from 'react';
import styles from './Tables.module.scss';
import TableComponent from './TableComponent';
import Buttons from './Buttons';

import TimePicker from '../../../utils/TimePicker';
import DatePicker from '../../../utils/DatePicker';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: '30ox 0',
    padding: '30px 0',
  },
}));


const Tables = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <Typography variant="h2">Tables View</Typography>
      <Buttons className={classes.buttons} />
      <Box display="inline-flex" p={1} m={3}>
        <DatePicker />
      </Box>
      <Box display="inline-flex" p={1} m={3}>
        <TimePicker />
      </Box>
      <TableComponent className={styles.table} />
    </div>
  );
};


export default Tables;
