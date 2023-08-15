import { Component } from "react";


class Form extends Component {
    constructor() { 
        super();

        this.state = {
            value: 0
        }
    }

    onSubmit = (e) => { 
        e.preventDefault();
        console.log(this.state, this.props);
        debugger
    }

    onChange = (e) => { 
        const { value } = e.target;
        this.setState({
            value
        })
    }
    render() {
        return (
        <form onSubmit={this.onSubmit}>
                <input
                    name="balance"
                    type="number"
                    placeholder="Сумма"
                    value={this.state.value}
                    onChange={this.onChange}
                />
        <button> Зберегти </button>
        </form>
      )
   
  }
}

export default Form;