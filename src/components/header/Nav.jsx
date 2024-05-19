import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Nav = forwardRef(({ navActive, setNavActive }, ref) => {
  const handleNavLinkClick = () => {
    setNavActive(false);
  };

  return (
    <nav
      ref={ref}
      className={`navbar ${navActive ? "active" : ""}`}
      data-navbar
    >
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="/home"
            className="navbar-link"
            data-nav-link
            onClick={handleNavLinkClick}
          >
            Home
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="/about"
            className="navbar-link"
            data-nav-link
            onClick={handleNavLinkClick}
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="/media"
            className="navbar-link"
            data-nav-link
            onClick={handleNavLinkClick}
          >
            Media
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="/gear"
            className="navbar-link"
            data-nav-link
            onClick={handleNavLinkClick}
          >
            Gear
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="/team"
            className="navbar-link team-link"
            data-nav-link
            onClick={handleNavLinkClick}
          >
            Team
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;
