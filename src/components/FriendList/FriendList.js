import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { Section, List } from './FriendList-styled.js';

export default function FriendList({ friends }) {
  return (
    <Section>
      <List>
        {friends.map(friend => (
          <FriendListItem {...friend} key={friend.id} />
        ))}
      </List>
    </Section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
