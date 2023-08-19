import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;
Wrapper.displayName = 'TransactionsWrapper';

export const Input = styled.input`
  border-radius: 3px;
  padding: 0 5px;
  min-width: 80px;
  width: 140px;
  margin-bottom: 3px;
  margin-right: 10px;
  border: 1px solid #dbdbdb;
  height: 40px;
  outline: none;
`;
Input.displayName = 'Input';

export const Row = styled.div`
  display: flex;
  align-items: center;
`
Row.displayName = 'Row';

export const Button = styled.button`
  border: 1px solid #dbdbdb;
  height: 40px;
  border-radius: 3px;
  padding: 0 21px;
  box-sizing: border-box;
  background-color: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
  margin-right: 10px;
  outline: none;
  width: 151px;

  &:hover {
    cursor: pointer;
  }
`;

Button.displayName = 'Button';

export const Comment = styled.textarea`
  min-height: 40px;
  line-height: 1.5;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  margin: 0px;
  height: 40px;
  min-width: 100px;
  width:152px;
  border: 1px solid #dbdbdb;
  outline: none;
`;
Comment.displayName = "Comment"




