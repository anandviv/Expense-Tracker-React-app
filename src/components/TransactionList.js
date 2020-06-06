import React, { useContext } from 'react';
import { transaction, Transaction } from './Transaction';

import { GlobalContext} from '../context/GlobalState';
import { from } from 'rxjs';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    
    return (
        <>
             <h3>History</h3>
      <ul  className="list">
        { transactions.map(transaction => (<Transaction Key={transaction.id} transaction={transaction}/>))}
        
         
      </ul>
        </>
    )
}
