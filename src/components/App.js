import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';

import User from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friendsList from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={User.name}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friendsList} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
