import {Component } from 'react'


import Balance from "../Balance";
import Score from '../Score';

class App extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
      score: 0,
    };

      this.onIncrease = this.onIncrease.bind(this);
      this.onIncreaseScore = this.onIncreaseScore.bind(this);

      console.log('constructor');
    }
    
    componentDidMount() { 
        const balance = JSON.parse(window.localStorage.getItem('balance'));
        this.setState({
            balance
        })
        console.log("componentDidMount");
    
    }

    componentWillUnmount() { 
        window.localStorage.setItem('balance', JSON.stringify(this.state.balance));
        console.log("componentWillUnmount");
    }

    // shouldComponentUpdate(nextProps, nextState) { 
    //     console.log("shouldComponentUpdate");

    //     console.log(this.state);

    //     // debugger

    //     return nextState.balance<5;
    // }

  onIncrease() {
    this.setState({
      balance: this.state.balance + 1,
    });
  }
  onIncreaseScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  onDecreaseScore=()=> {
    this.setState({
      score: this.state.score - 1,
    });
  }

  onDecrease = () => {
    this.setState({
      balance: this.state.balance - 1,
    });
  };

    render() {
      console.log('render');
    return (
      <div>
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Додати 1</button>
        <button onClick={this.onDecrease}>Відняти 1</button>
            
        <Score score={this.state.score} />
        <button onClick={this.onIncreaseScore}>Збільшити рахунок на 1</button>
        <button onClick={this.onDecreaseScore}>Зменшити рахунок на 1</button>
      </div>
    );
  }
};

export default App;
