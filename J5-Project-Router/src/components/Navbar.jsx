import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Carnet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin-animaux" className="nav-link">
                Admin Animaux
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Ajouter Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin-contacts" className="nav-link">
                Admin Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
