import {  StatSection, StatsItem, StatsList, StatsLabel,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats }) => {
    
    return (
    


        <StatSection>
  <h2 class="title">Upload stats</h2>

    <StatsList>
                
        {stats.map(({id, label, percentage}) => (
                <StatsItem key={id} >
                    <StatsLabel>{ label } </StatsLabel>
                    <span>{ percentage }</span>
                </StatsItem>
            ))}

    
  </StatsList>
</StatSection>
)

}
