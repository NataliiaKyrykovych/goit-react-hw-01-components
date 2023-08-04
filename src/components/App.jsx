import { ProfileCard } from "./Profile/ProfileCard";
import user from './Profile/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div>
      
      <ProfileCard item={user} />
      <Statistics stats={data} /> 
      
    </div>
  );
};
