import React from 'react';
import { Item, Status, ImageWrapper, Name } from './FriebdListItem-styled.js';
// import FriendList from './FriendList';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <ImageWrapper>
        <a href={avatar} target="_blank" rel="noreferrer">
          <img src={avatar} width="100" alt={name} />
        </a>
      </ImageWrapper>
      <Name>{name}</Name>
    </Item>
  );
};
export default FriendListItem;
