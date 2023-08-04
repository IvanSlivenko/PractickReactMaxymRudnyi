
const root = ReactDOM.createRoot(document.getElementById("root"));


//-------------------------------------------------------------------- Level Oun
// function tick() {
//   const element = (
//     <div>
//       <h1>Привіт, світе!</h1>
//       <h2>Зараз {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);


// ---------------------------------------------------------------------Level Two
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2> Актульний час {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function tick() {
//   root.render(<Clock date={new Date()} />);
// }


// setInterval(tick, 1000);


//--------------------------------------------------------------Level Thry
// class Clock extends React.Component {

// ---------------------------------------------------------------class discription Home
  //class NameClas React.Component{
    //Конструктор 
        //construktor(props) {
        //super(props)
        //this.state={}
        //}
        
    //Методи
      // nameMethod() {
      // this.setState()
      // }
      
    //Рендер 
        // render(){
        // return(<div> <div />)
        // }
  //}
  //----------------------------------------------------------------- class discription End
//   constructor(props) {
//     super(props);
//   //state - поточний стан 
//     this.state = { date: new Date() };
//   }

//   tick() {
//     // Бажане значення поточного стану 
//     this.setState({ date: new Date() });
//   }
// // монтуємо елемент
//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

// // розмонтовуємо елемент
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2 class="time"> Актульний час {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

//   root.render(<Clock />);


//--------------------------------------------------------------Level Five

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

class ClockTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!!!!!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}



function App() {
  return (
    <div>
      <ClockTwo />
      <Clock />
      <Clock />
    </div>
  );
}


root.render(<App />);
