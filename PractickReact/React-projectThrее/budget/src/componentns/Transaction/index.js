import PropTypes from "prop-types";
import { useCallback, useContext } from "react";

import { AppContext } from "../../providers/context";

import { Wrapper } from "./styles"
import {TransactionsDate} from "./styles";
import { Value } from "./styles";
import { Comment } from "./styles";






const Transaction = ({ transaction: {id, value, date, comment }, onDelete }) => {
  
  const { state } = useContext(AppContext);

  const deleteItem = useCallback(() => onDelete(id), [id]);
  
  return (
    <Wrapper value={value}>
      <TransactionsDate>{date}</TransactionsDate>
      <Value>
        {value.toFixed(2)}, {state.currency}
      </Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}>Delete</button>
    </Wrapper>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  }),
};

Transaction.defaultProps = {
  transaction: {
    label: '',
    value: 0
  },
};

export default Transaction;
