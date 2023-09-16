
import { Nav } from './styles';
import { Link } from "react-router-dom";

const Header = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/statistics">Statistics</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/galery">Galery</Link>
      </li>
    </ul>
  </Nav>
);

export default Header;