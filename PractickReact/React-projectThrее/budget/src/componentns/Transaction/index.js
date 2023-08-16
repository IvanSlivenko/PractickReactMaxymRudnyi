const Transaction = ({ transaction }) => (
  <div>
    Label: {transaction.label}
    <p>Value: {transaction.value} </p>
    <p>key: {transaction.id} </p>
    <br />
  </div>
);

export default Transaction;