import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav mu-menu navbar-right">
              <li>
                <Link to="/">ACCUEIL</Link>
              </li>
              <li>
              <Link to="/search">RECHERCHE</Link>
              </li>
            </ul>
          </div>
  )
}

export default NavBar