// hooks
import { useState } from "react";

// pages
import About from "../../Pages/About/About";
import Support from "../../Pages/Support/Support";

import logo from "../../assets/images/logo.png";

//styles
import "../Navbar/navbar.scss";

//other
import { NavLink } from "react-router-dom";

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

  const handleNavLinkClick = () => {
    setMobileMenu(false);
    handleClick(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="main-logo" />
      </NavLink>
      <div>
        <ul className={mobileMenu ? " active" : ""}>
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              element={<About />}
              onClick={handleNavLinkClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              element={<Support />}
              onClick={handleNavLinkClick}
            >
              Support
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile">
        <i
          id="bar"
          onClick={() => handleClick(!mobileIcon)}
          className={mobileIcon ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
};

export default NavBar;
