import styled from 'styled-components';

export const StatSection = styled.section`
  text-align: center;
  width: 500px;
  border: 1px solid black;
  margin: 0px auto;
  margin-bottom: 50px;
`;

export const StatsList = styled.ul`
  height: 50px;
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export const StatsItem = styled.li`
  background-color: ${props => props.color};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const StatsLabel = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;
export const Title = styled.h2`
  padding-top: 32px;
  padding-bottom: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;