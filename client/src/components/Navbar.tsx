import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex text-white bg-slate-800 justify-around py-4 items-center">
      <span className="flex gap-2 w-36">
        <img src="/logo.svg" alt="Logo" className="bg-white" />
        My Website
      </span>
      <ul className="flex gap-4">
        <li className="bg-orange-400 p-2 shadow-2xl shadow-orange-800 rounded hover:bg-orange-600">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="bg-orange-400 p-2 shadow-2xl shadow-orange-800 rounded hover:bg-orange-600">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      <span>👋 Hello</span>
    </nav>
  );
}
