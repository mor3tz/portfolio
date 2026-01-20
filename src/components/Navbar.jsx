import React, { useState, useEffect } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/svg/batu.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">
        <img
          src={logo}
          alt="logo-img"
          className="logo-img"
        ></img>
        <span>it'sMee</span>
      </h1>

      {/* Tombol Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            My Projects
            <i className="bi bi-arrow-up-right"></i>
          </a>
          <p className="nav-caption">See all of nice project I've made</p>
        </li>
        <li>
          <a href="#aboutme" onClick={() => setMenuOpen(false)}>
            About Me
            <i className="bi bi-arrow-up-right"></i>
          </a>
          <p className="nav-caption">Learn more about me</p>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
            <i className="bi bi-arrow-up-right"></i>
          </a>
          <p className="nav-caption">enaalmuhammad@gmail.com</p>
        </li>
      </ul>
    </nav>
  );
}
