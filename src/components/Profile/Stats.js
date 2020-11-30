import React from 'react';
import { List, ListItem, Label, Quantity } from './Stats-styled.js';

const Stats = ({ followers, views, likes }) => {
  //   const { followers, views, likes } = stats;
  return (
    <List>
      <ListItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </ListItem>
      <ListItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </ListItem>
      <ListItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </ListItem>
    </List>
  );
};

export default Stats;
