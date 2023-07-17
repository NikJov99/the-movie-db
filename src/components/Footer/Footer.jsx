import "../Footer/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="overlay">
        <div className="footer-links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div className="attribution">
          <p>&copy; Nikola Jovanović 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
