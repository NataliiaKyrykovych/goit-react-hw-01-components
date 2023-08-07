import { ProfileDiv,Avatar, ProfileName, ProfileTag, ProfileLocation, StaticList, StaticItem, UserDiv } from "./ProfileCard.styles";

export const ProfileCard = ({ item: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    
    return (
        <ProfileDiv>
            <UserDiv>
                <Avatar src={avatar} alt="user avatar" />
                <ProfileName> {username} </ProfileName>
                <ProfileTag>@ {tag} </ProfileTag>
                <ProfileLocation> {location} </ProfileLocation>
            </UserDiv>
            <StaticList>
                <StaticItem>
                    <span>Followers</span>
                    <span> {followers} </span>
                </StaticItem>
                <StaticItem>
                    <span>Views</span>
                    <span> {views} </span>
                </StaticItem>
                <StaticItem>
                    <span>Likes</span>
                    <span> {likes} </span>
                </StaticItem>
            </StaticList>
        </ProfileDiv>
    
    );
};
