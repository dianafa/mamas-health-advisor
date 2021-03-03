import React from 'react';
import {IngredientInfo, Status} from '../types/IngredientInfo';

import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: 'auto',
      backgroundColor: theme.palette.background.paper,
    },
    // https://www.schemecolor.com/very-pale-rainbow.php
    // https://www.schemecolor.com/pastel-retro.php
    [Status.GREEN.toString()]: {
      background: '#C7E3D0'
    },
    [Status.YELLOW.toString()]: {
      background: '#E7E6CE'
    },
    [Status.RED.toString()]: {
      background: '#E9CCCE'
    },
    [Status.UNRESEARCHED.toString()]: {
      background: '#C9C1E7'
    },
    [Status.INVALID.toString()]: {
      background: theme.palette.background.default
    }
  }),
);

export const IngredientsResult = ({results}: { results: Array<IngredientInfo> }) => {
  const classes = useStyles();

  if (results.length === 0) {
    return <h2>No data about any of the ingredients</h2>;
  }

  return (
    <>
      <List className={classes.root}>
        {results.map((info: IngredientInfo) =>
          <ListItem key={info.uuid} className={classes[info.status.toString()]}>
            <ListItemText primary={info.name} secondary={info.description} />
          </ListItem>
        )}
      </List>
    </>
  );
};
