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

      this.onIncrease = this.onIncrease.bind(this);
      this.onIncreaseScore = this.onIncreaseScore.bind(this);

      console.log('constructor');
    }
    
  

    

  onIncrease() {
    this.setState((state)=>({
      balance: state.balance + 1,
      transactions: [{
          label: 'increase',
          value: 1,
          id:++id
        }, ...state.transactions]
    }))
  }

  onIncreaseScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  onDecreaseScore=()=> {
    this.setState({
      score: this.state.score - 1,
    })
    ;
  }

  onDecrease = () => {
    this.setState((state) => ({
      balance: state.balance + 1,
      transactions: [{
          label: 'decrease',
          value: -1,
          id:++id
        }, ...state.transactions]
    }))
  }

    render() {
    
    return (
      <div>
        <Balance balance={this.state.balance} />

        <Form />

        <hr />
        <Transactions transactions={this.state.transactions} />
        
        

      </div>
    );
  }
};

export default App;
