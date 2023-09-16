import { useState, useEffect,useCallback } from 'react'

import Balance from "../Balance";
import Transactions from '../Transactions';
import Form from '../Form'
import ErrorBoundary from '../ErrorBoundary';


import { Wrapper } from "./styles";

import { getItems, addItem } from "../../utils/indexdb";



const Home = () => {
  
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
 
  useEffect(() => {
    getItems()
      .then((item) => {
        setTransactions(item);
      })
      .catch((e) => {
       console.error('error',e);
      });
  }, [setTransactions]);

 
 const  onChange = ({ value, date, comment }) => {
    const transaction = {
      value: +value,
      comment,
      date,
      id: Date.now()
    };
    
   setTransactions([
     transaction,
     ...transactions
   ]);
   
   setBalance(
     balance + Number(value))

    addItem(transaction);
    
  }

  
  const onDelete = useCallback(
    (id) => {
      setTransactions((transactions)=>transactions.filter((item) => item.id !== id));
    },
    [setTransactions]
  );

    return (
      <ErrorBoundary>
        <Wrapper>
          <Balance balance={balance} />
          <Form onChange={onChange} />
          <hr />
          <Transactions transactions={transactions} onDelete={onDelete}/>
        </Wrapper>
      </ErrorBoundary>
    );
 
}




export default Home;

//  <Transactions transactions={this.state.transactions} />;
