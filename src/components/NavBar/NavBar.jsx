import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
    <div className="navbar">
      <Link to="/">
        <h1>One Piece Tienda Online</h1>
      </Link>
        <nav>
            <ul className="menu">
            <li>
                <NavLink to= "/categoria/1"> Remeras </NavLink>
            </li>
            <li>
                <NavLink to= "/categoria/2"> Posters </NavLink>
            </li>
            <li>
                <NavLink to= "/categoria/3"> Figuras </NavLink>
            </li>
            <li>
                <NavLink to= "/categoria/4"> Llaveros </NavLink>
            </li>
            <li>
                <NavLink to= "/categoria/5"> Tazas </NavLink>
            </li>
            <li>
                <NavLink to= "/categoria/6"> Camperas </NavLink>
            </li>
            </ul>
        </nav>
        <CartWidget />
    </div>
    </header>
);
};
export default NavBar;
