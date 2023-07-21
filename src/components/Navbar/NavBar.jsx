import { NavLink } from "react-router-dom";
import "../Navbar/navbar.scss";

import About from "../../Pages/About/About";
import Button from "../Button/Button";
import { useState } from "react";

const NavBar = () => {
  const [mobileIcon, setMobileIcon] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = () => {
    setMobileIcon(!mobileIcon);
    showMobileMenu();
  };

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="navbar">
      <NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="32" cy="32" r="12" fill="#e50914" />
            <circle
              cx="32"
              cy="32"
              r="19"
              stroke="#ECECEC"
              stroke-linecap="round"
              stroke-width="2"
            />
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="#979797"
              stroke-linecap="round"
              stroke-width="2"
            />
            <path
              stroke="#979797"
              stroke-linecap="square"
              stroke-width="2"
              d="M32,3 L32,8 M61,32 L56,32 M32,61 L32,56 M3,32 L8,32"
            />
            <polygon fill="#FFF" points="38 32 28 37 28 27" />
          </g>
        </svg>
      </NavLink>
      <div>
        <ul className={mobileMenu ? " active" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" element={<About />}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" element={<About />}>
              Support
            </NavLink>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
      <div className="mobile">
        <i
          id="bar"
          onClick={handleClick}
          className={mobileIcon ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
};

export default NavBar;
