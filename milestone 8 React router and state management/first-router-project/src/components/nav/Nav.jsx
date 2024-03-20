import "./Nav.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import Footers from "../footers/Footers";
function Nav(props) {
  return (
    <div>
      <div className=" container mx-auto px-52 py-10 bg-gray-600 text-white flex justify-between  my-20 font-bold">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/form">form</NavLink>
        <NavLink to="/header">header</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  );
}

export default Nav;
