import React from 'react';
import styles from './Tables.module.scss';
import TableComponent from './TableComponent';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';

import TimePicker from '../../../utils/TimePicker';
import DatePicker from '../../../utils/DatePicker';

import Grid from '@material-ui/core/Grid';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Buttons />
    <Grid className={styles.dateTimePicker}>
      <DatePicker />
      <TimePicker />
    </Grid>
    <TableComponent />
  </div >
);

export default Tables;