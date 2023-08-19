import PropTypes from "prop-types";
import { Component } from "react";
import { Row } from "./styles";
import { Comment } from "./styles";
import { Input } from "./styles";
import { Button } from "./styles";
import { Wrapper } from "./styles";


class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      date: new Date().toISOString().substring(0, 10),
      comment:''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

      this.props.onChange(this.state.value);
      this.setState({
        value: '',
        date: '',
        comment:''
        
      })
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: name === 'balance' ? +value : value
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Input
              name="value"
              type="number"
              placeholder="Сумма"
              value={this.state.value}
              onChange={this.onChange}
            />
            <Input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
          </Row>

          <Row>
            <Button> Зберегти </Button>
            <Comment
              name="comment"
              value={this.state.comment}
              onChange={this.onChange}
            />
          </Row>
        </form>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Form;
