import { List, FriendAvatar, FriendName, FriendStatus, FriendItem } from "./FriendList.styled"


export const FriendList = ({ friends }) => {
    
    return (
    
        <>
  

    <List class="friend-list">
                
        {friends.map(({avatar, name, isOnline}) => (
                <FriendItem class='status'>
                    <FriendStatus>{ isOnline } </FriendStatus>
                <FriendAvatar src= {avatar} alt="User avatar" width='48' />
                <FriendName class='name'> {name} </FriendName>
                </FriendItem>
            ))}

    
  </List>
</>
)

}

