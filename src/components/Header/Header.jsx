import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="head col-md-6">Nail Salon</div>
        <div className="menu col-md-6">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OUR SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OUR STORY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MAKE AN APPOINTMENT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
