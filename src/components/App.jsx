import { ProfileCard } from "./Profile/ProfileCard";
import user from './Profile/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';
import { FriendList } from "./FriendList/FriendList";
import friend from './FriendList/friends.json';
import { TransactionHistory } from "./TransactionList/TransactionHistory";
import transactions from './TransactionList/transactions.json';



export const App = () => {
  return (
    <div>
      
      <ProfileCard item={user} />
      <Statistics stats={data} /> 
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
