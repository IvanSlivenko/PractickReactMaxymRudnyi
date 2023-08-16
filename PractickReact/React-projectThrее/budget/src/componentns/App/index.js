import { Component } from 'react'
import PropTypes from 'prop-types'


import Balance from "../Balance";

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
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        { value, label: "change", id: ++id },
        ...state.transactions,
      ],
    }));
   
   
  }
    



  render() {  
              return (
                        <>
                          <Balance balance={this.state.balance} />
                          <Form onChange={this.onChange} />
                          <hr />
                          <Transactions transactions={this.state.transactions} />
                          
                        </>
                     );
  
            }
}

Form.PropTypes = {
  onChange: PropTypes.func
};

export default App;
