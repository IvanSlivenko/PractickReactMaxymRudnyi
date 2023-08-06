import {Component } from 'react'
import User from '../User'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Ivan",
            date: Date.now(),
            age: 41

        };

    }
    
    render() { 
        return (
          <div>
            <User name="No name" age="38" FavoriteFuds="Tartar" />
                <User
                    name={this.state.name}
                    age={this.state.age}
                    FavoriteFuds="Pateite"
                    time={this.state.date}
                />
            <User name="Mariya" age="11" FavoriteFuds="Sushi" />
          </div>
        );
    }
  
};

export default App;
