import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/bag">BAG</Link>
        </li>
        <li>
          <Link to="/admin">ADMIN</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
