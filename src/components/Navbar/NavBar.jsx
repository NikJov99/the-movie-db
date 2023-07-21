import { NavLink } from "react-router-dom";
import "../Navbar/navbar.scss";

import About from "../../Pages/About/About";
import Button from "../Button/Button";
import { useState } from "react";
import Support from "../../Pages/Support/Support";

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
        <h1 className="main-logo">MovieFlix</h1>
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
            <NavLink to="/support" element={<Support />}>
              Support
            </NavLink>
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
