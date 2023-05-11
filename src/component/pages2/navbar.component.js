import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Schedule Management</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Schedule Details</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Schedule</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}