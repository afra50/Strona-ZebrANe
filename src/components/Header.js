import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <nav id="main_nav">
        <ul className="menu">
          <li className="menu_item">
            <NavLink to="/adoptuje" activeClassName="active">
              Adoptuję
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/wspieram" activeClassName="active">
              Wspieram
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/abc-adopcji" activeClassName="active">
              ABC Adopcji
            </NavLink>
          </li>
          <li className="logo">
            <NavLink to="/" activeClassName="active">
              <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/baza-wiedzy" activeClassName="active">
              Baza wiedzy
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/o-nas" activeClassName="active">
              O nas
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/kontakt" activeClassName="active">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
