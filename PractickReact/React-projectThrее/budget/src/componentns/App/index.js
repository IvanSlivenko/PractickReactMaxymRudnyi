import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { open } from "../../utils/indexdb";

import Home from "../Home/index";
import About from "../About";
import Statistics from "../Statistics";
import Galery from "../Galery";
import Header from "../Header";
import Counter from "../Counter";
import Settings from "../Settings";


import { Wrapper, GlobalStyle } from "./styles";



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    
  }

  componentDidMount() {
    
    open()
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        console.error("Помилка");
      });
    
  
    
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Header />
        </Wrapper>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
      </Router>
    );
  }
};

  

export default App;


