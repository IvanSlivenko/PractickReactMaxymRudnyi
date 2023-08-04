import React from 'react';
import ReactDOM from 'react-dom/client';


const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>FavoriteFuds: {props.FavoriteFuds}</p>
    </div>
  );
 }

const App = function () { 
  const PremiumName = "Nataliya";
  return (
    <div>
      <User name={PremiumName} age="38" FavoriteFuds="Tartar" />
      <User name="Ivan" age="41" FavoriteFuds="Pateite" />
      <User name="Mariya" age="11" FavoriteFuds="Sushi" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);






