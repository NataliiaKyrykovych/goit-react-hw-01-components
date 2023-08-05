export const Statistics = ({stats}) => {
    
    return (
    
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
                
        {stats.map(({id, label, percentage}) => (
                <li key={id}>
                    <span>{ label } </span>
                    <span>{ percentage }</span>
                </li>
            ))}

    
  </ul>
</section>
)

}