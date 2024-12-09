import React from 'react';
import { FaSearch, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">V</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav flex-grow-1 justify-content-center">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right flex-row">
                    <li><a href="#"><FaSearch /></a></li>
                    <li><Link to="/login"><FaUserAlt /></Link></li>
                    <li><a href="#"><FaSignInAlt /></a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
