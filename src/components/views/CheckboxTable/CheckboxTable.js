import React from 'react';
import styles from './CheckboxTable.module.scss';

import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const CheckboxTable = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid>
      <FormControl component="fieldset" >
        <FormLabel component="legend">Select Table</FormLabel>
        <RadioGroup className={styles.radio} aria-label="gender" name="table" value={value} onChange={handleChange}>
          <FormControlLabel value="table 1" control={<Radio color="primary" />} label="Table 1" />
          <FormControlLabel value="table 2" control={<Radio color="primary" />} label="Table 2" />
          <FormControlLabel value="table 3" control={<Radio color="primary" />} label="Table 3" />
          <FormControlLabel value="table 4" control={<Radio color="primary" />} label="Table 4" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default CheckboxTable;