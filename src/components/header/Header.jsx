"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import Button from "../button/Button.jsx";

import logo from "../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const navbarRef = useRef(null);
  const navTogglerRef = useRef(null);

  const toggleNav = () => {
    setNavActive((prevNavActive) => !prevNavActive);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });

    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        navTogglerRef.current &&
        !navTogglerRef.current.contains(event.target)
      ) {
        setNavActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <Link to="/home" className="logo">
          <img src={logo} width="60" height="60" alt="X Element Home" />
          <p>X-Element</p>
        </Link>

        <Nav
          ref={navbarRef}
          navActive={navActive}
          setNavActive={setNavActive}
        ></Nav>

        <Button to="/team" text="Meet Our Team" />

        <button
          onClick={toggleNav}
          ref={navTogglerRef}
          className={`nav-toggle-btn ${navActive ? "active" : ""}`}
          aria-label="Toggle Navigation Menu"
          data-nav-toggler
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
