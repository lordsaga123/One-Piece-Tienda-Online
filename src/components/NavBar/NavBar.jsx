import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h1 className="logo__Tienda">One Piece Tienda Online</h1>
        </Link>
        <nav>
          <ul className="menu">
            <li>
              <NavLink to="/categoria/1" className="nav-button">Remeras</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2" className="nav-button">Posters</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/3" className="nav-button">Figuras</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/4" className="nav-button">Llaveros</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/5" className="nav-button">Tazas</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/6" className="nav-button">Camperas</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
