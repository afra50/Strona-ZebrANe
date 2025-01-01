import React from "react";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <nav id="main_nav">
        <ul className="menu">
          <li className="menu_item">
            <a href="/">Adoptuję</a>
          </li>
          <li className="menu_item">
            <a href="/">Wspieram</a>
          </li>
          <li className="menu_item">
            <a href="/">ABC Adopcji</a>
          </li>
          <li className="logo">
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />
            </a>
          </li>
          <li className="menu_item">
            <a href="/">Baza wiedzy</a>
          </li>
          <li className="menu_item">
            <a href="/">O nas</a>
          </li>
          <li className="menu_item">
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
