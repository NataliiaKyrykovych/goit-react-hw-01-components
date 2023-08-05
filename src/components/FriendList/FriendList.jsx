export const FriendList = ({friends}) => {
    
    return (
    
        <>
  

    <ul class="friend-list">
                
        {friends.map(({avatar, name, isOnline}) => (
                <li class='status'>
                    <span>{ isOnline } </span>
                <img src= {avatar} alt="User avatar" width='48' />
                <p class='name'> {name} </p>
                </li>
            ))}

    
  </ul>
</>
)

}
