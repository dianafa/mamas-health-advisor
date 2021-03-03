import React from 'react';
import {IngredientInfo} from '../types/IngredientInfo';

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
          <ListItem key={info.uuid}>
            <ListItemText primary={info.name} secondary={info.description} />
          </ListItem>
        )}
      </List>
    </>
  );
};
