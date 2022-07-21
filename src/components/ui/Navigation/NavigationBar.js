import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        MAURO+
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Home
          </NavLink>

          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>

          <NavLink className="nav-item nav-link" to="/list">
            WatchList
          </NavLink>

          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink className="nav-item nav-link" to="/login">
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
