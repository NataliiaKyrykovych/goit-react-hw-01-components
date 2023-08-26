import {  StatSection, StatsItem, StatsList, StatsLabel, Title
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
    
    return (
    


        <StatSection>
  {title && <Title> {title} </Title>}

    <StatsList>
                
        {stats.map(({id, label, percentage}) => (
                <StatsItem key={id} color={getRandomHexColor()}>
                    <StatsLabel>{ label } </StatsLabel>
                    <span>{ percentage }</span>
                </StatsItem>
            ))}

    
  </StatsList>
</StatSection>
)

}
