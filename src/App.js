import React from 'react';

import  FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
 import TransactionHistory 
 from './components/TransactionHistory/TransactionHistory.js'


import friends  from './friends.json';
import user from './user.json';
import data from './data.json';
import transactions from './transactions.json';



function App() {
  return (
  <div>
     <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
    avatar={user.avatar}
    />
    <FriendList  friends= { friends } />
    <Statistics
     title="Upload stats" stats= { data }  />
     <TransactionHistory  items={ transactions } />
  </div>

  );
}


export default App;



