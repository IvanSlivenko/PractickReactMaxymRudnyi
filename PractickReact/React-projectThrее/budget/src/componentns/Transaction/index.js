import PropTypes from "prop-types";
import { Wrapper } from "./styles"
import {TransactionsDate} from "./styles";
import { Value } from "./styles";
import { Comment } from "./styles";

const Transaction = ({ transaction: {value, date, comment } }) => (
  <Wrapper value={value}>
    <TransactionsDate>{date}</TransactionsDate>  
    <Value>{value.toFixed(2)}</Value>
    <Comment>{comment}</Comment>
  </Wrapper>

  //  <Wrapper value={value}>
  //     Label: {label}
  //     <p>Value: {value} </p>
  //     <br />
  // </Wrapper>
);

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
