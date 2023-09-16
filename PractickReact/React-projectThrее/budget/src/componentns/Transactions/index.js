import PropTypes from "prop-types";
import Transaction from "../Transaction";

const Transactions = ({ transactions = [], onDelete}) => transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete}/>
      ))
  
 


Transactions.propTypes = {
  transactions: PropTypes.array
}

Transactions.defaultProps = {
  transactions: []
}



export default Transactions;


