import React from 'react';
import styles from './NewBooking.module.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const list =
{
  starter: [
    { id: '1', accessories: 'Water', price: 'Free' },
    { id: '2', accessories: 'Coffee', price: '9$' },
    { id: '3', accessories: 'Tea', price: '5$' },
    { id: '4', accessories: 'Cola', price: '8$' },
  ],
};

const useStyles = makeStyles(() => ({
  inputs: {
    marginTop: '30px',
  },
}));

const EventList = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <RestaurantMenuIcon />
        </ListItemIcon>
        <ListItemText primary="Starter" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.starter.map((row) => (
            <ListItem key={row.id} button>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <FormControlLabel control={<Checkbox name="checkedC" />} label={row.accessories + ' ' + row.price} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <Grid className={classes.inputs}>
        <form noValidate autoComplete="off">
          <TextField className={styles.textField} id="standard-basic" label="Name" />
          <TextField className={styles.textField} id="standard-basic" label="Duration(hour)" type="number" />
          <TextField className={styles.textField} id="standard-basic" label="Contact" />
          <TextField className={styles.textField}
            id="standard-number"
            label="People"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>
    </List >
  );
};

export default EventList;