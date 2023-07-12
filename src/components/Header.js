import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="left-data">
        <h1>LOGO</h1>
      </div>
      <div className="right-data">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/blog">
            {" "}
            <li>Blog</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
