import "../Footer/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="overlay">
        <div className="footer-links">
          <ul>
            <li></li>
            <li>Home</li>
            <li>About</li>
            <li>Home</li>
          </ul>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
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
