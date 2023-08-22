import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";
import Galery from "../Galery";

import { Wrapper, GlobalStyle } from "./styles";

import { open } from "../../utils/indexdb";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      loading: true      
    }
   
}

  componentDidMount() {
   debugger
    open().then(() => {
      
      this.setState(
        {
        loading: false
        }
      )
      
    }).catch(()=> {
      console.error('Помилка');
    });
  }

  render() { 

    if (this.state.loading) { 
      return <div>Loading...</div>
    };

return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/galery">Galery</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
      </Routes>

      <Wrapper>
        <GlobalStyle />
      </Wrapper>
    </Router>
  );
};
  };

  

export default App;


