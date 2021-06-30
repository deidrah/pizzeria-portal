import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import CakeIcon from '@material-ui/icons/Cake';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PeopleIcon from '@material-ui/icons/People';
import { Grid } from '@material-ui/core';

const list =
{
  birthday: [
    { id: '1', accessories: 'Cake', price: '20$' },
    { id: '2', accessories: 'Dinner', price: '15$' },
    { id: '3', accessories: 'Drinks', price: '5$' },
  ],
  meeting: [
    { id: '1', accessories: 'Drinks', price: '11$' },
    { id: '2', accessories: 'Dinner', price: '35$' },
    { id: '3', accessories: 'Dessert', price: '25$' },
  ],
};


const EventList = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CakeIcon />
        </ListItemIcon>
        <ListItemText primary="Birthday" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.birthday.map((row) => (
            <ListItem key={row.id} button>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <FormControlLabel control={<Checkbox name="checkedC" />} label={row.accessories + ' ' + row.price} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <Grid>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Meeting" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {list.meeting.map((row) => (
              <ListItem key={row.id} button>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <FormControlLabel control={<Checkbox name="checkedC" />} label={row.accessories + ' ' + row.price} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Grid>
    </List >
  );
};

export default EventList;