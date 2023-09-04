import PropTypes from "prop-types";
import { useState } from "react";
import { Row } from "./styles";
import { Comment } from "./styles";
import { Input } from "./styles";
import { Button } from "./styles";
import { Wrapper } from "./styles";


const Form =(props)=> {

  const [form, setForm]=useState(
    {
      value: '',
      date: new Date().toISOString().substring(0, 10),
      comment:''
    
    }
  )
  

  const onSubmit = (e) => {
    e.preventDefault();

   props.onChange(form);
   
    setForm({
        ...form,
        value: '',
        comment:''
        
      })
  };

  const onChange = (e) => {
    const { value, name } = e.target;
console.log('onchange', e);

    setForm({
      ...form,
      [name]: value
    });
  };

  
    return (
      <Wrapper>
        <form onSubmit={onSubmit}>
          <Row>
            <Input
              name="value"
              type="number"
              placeholder="Сумма"
              value={form.value}
              onChange={onChange}
            />
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={onChange}
            />
          </Row>

          <Row>
            <Button> Зберегти </Button>
            <Comment
              name="comment"
              value={form.comment}
              onChange={onChange}
            />
          </Row>
        </form>
      </Wrapper>
    );  
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Form;
