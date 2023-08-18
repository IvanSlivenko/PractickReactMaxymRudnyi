import PropTypes from "prop-types";
import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

      this.props.onChange(this.state.value);
      this.setState({
          value: ''
      })
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value:+value
    });
  };

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
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Form;
