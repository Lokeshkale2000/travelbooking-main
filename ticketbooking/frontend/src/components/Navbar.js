import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"  style={{marginLeft:'200px'}}>Travel with Airlines</div>
      <div className="navbar-buttons">
        <Link to="/">
          <button className="navbar-btn">Books Your Ticket </button>
        </Link>
        <Link to="/view-bookings">
          <button className="navbar-btn" style={{marginRight:'150px'}}>View Bookings</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
