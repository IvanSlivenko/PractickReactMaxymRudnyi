import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";
import Galery from "../Galery";

import { Wrapper, GlobalStyle } from "./styles";

const App = () => {
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

export default App;


