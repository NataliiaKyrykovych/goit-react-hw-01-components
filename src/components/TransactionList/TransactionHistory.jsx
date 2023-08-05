import { TransactionTable, HeaderTr, TransitionTd } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    
    return (
        <div>
            <TransactionTable>
              <thead>
                <HeaderTr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </HeaderTr>
              </thead>

              <tbody>
                {items.map(({id, amount, currency, type}) => (
                <tr key={id}>
                    <TransitionTd>{type}</TransitionTd>
                    <TransitionTd>{amount}</TransitionTd>
                    <TransitionTd>{currency}</TransitionTd>
                </tr>
                ))}
    
              </tbody>
            </TransactionTable>
           
        </div>
    )
}