import styled from 'styled-components';

export const ProfileDiv = styled.div`
margin: 0 auto;
  max-width: 500px;
  background-color: lightyellow;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 50px;
  border: 3px solid rgb(240, 220, 200);
  border-radius: 20px;
`;
export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 50%;
`;
export const ProfileName = styled.p`
  color: black;
  font-weight: 700;
`;
export const ProfileTag = styled.p`
  margin: 0;
`;
export const ProfileLocation = styled.p`
  margin-bottom: 0;
  padding-bottom: 16px;
`;
export const StaticList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  gap:10px;
  padding-left:10px;
  padding-right:10px;
`;
export const StaticItem = styled.li`
  padding: 10px 0;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1413134a;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: lightblue;
  
`;
export const UserDiv = styled.div`
   display: flex;
  flex-direction: column;
  gap: 16px;

  text-align: center;
`;

