import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { Grid } from '@material-ui/core';

const ListDish = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LocalPizzaIcon />
        </ListItemIcon>
        <ListItemText primary="Pizza" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Capriciosa Price: $15" />
          </ListItem>
        </List>
        <ListItem button>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <FormControlLabel control={<Checkbox name="checkedC" />} label="Hawai Price: $29" />
        </ListItem>
      </Collapse>

      <Grid>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <LocalDrinkIcon />
          </ListItemIcon>
          <ListItemText primary="Drinks" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <FormControlLabel control={<Checkbox name="checkedC" />} label="Water Price: Free" />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Coca Cola Price: $5" />
          </ListItem>
        </Collapse>
      </Grid>
    </List >
  );
};

export default ListDish;