const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>FavoriteFuds: {props.FavoriteFuds}</p>
      <p>It's: {props.time}</p>
    </div>
  );
};
export default User;