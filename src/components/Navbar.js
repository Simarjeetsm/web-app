import React from 'react'
import './Navbar.css';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src="logo.png" height={30} />
            <a className="navbar-brand" href="#"><b>Bonding Bones</b> </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item-1">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item-2">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
