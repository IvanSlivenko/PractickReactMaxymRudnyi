import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  color: ${({ value }) => (value < 0 ? "red" : "green")};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


Wrapper.displayName = 'TransactionWrapper';

export const TransactionsDate = styled.div`
  flex-grow: 1;
`;
TransactionsDate.displayName = "TransactionsDate";

export const Value = styled.div`
  flex-grow: 1;
`;

Value.displayName = "Value";

export const Comment = styled.div`
  flex-grow: 1;
`;

Comment.displayName = "Comment";




