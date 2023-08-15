import {Component } from 'react'


import Balance from "../Balance";
import Score from '../Score';
// import Transaction from '../Transaction';
import Transactions from '../Transactions';
import Form from '../Form'


let id = 0;
class App extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
      score: 0,
      transactions: [],
    };

      this.onChange = this.onChange.bind(this);
    

     
  }
  
  onChange = (value) => { 
debugger
  }
    
  

    

 

    render() {
    
    return (
      <div>
        <Balance balance={this.state.balance} />

        <Form
        onChange={this.onChange}
        />

        <hr />
        <Transactions transactions={this.state.transactions} />
        
        

      </div>
    );
  }
};

export default App;
