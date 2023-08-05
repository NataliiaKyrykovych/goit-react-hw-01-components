import { List } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
    
    return (
    
        <>
  

    <List class="friend-list">
                
        {friends.map(({avatar, name, isOnline}) => (
                <li class='status'>
                    <span>{ isOnline } </span>
                <img src= {avatar} alt="User avatar" width='48' />
                <p class='name'> {name} </p>
                </li>
            ))}

    
  </List>
</>
)

}

