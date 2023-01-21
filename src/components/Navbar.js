import React, {useState} from 'react'
import propTypes  from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.link}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdown}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Contactus">Contact us</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/suggest"}>Suggestions</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-3 text-${props.mode == 'light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetxt}</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title:propTypes.string,
    home:propTypes.string,
    link:propTypes.string,
    Dropdown:propTypes.string
}

Navbar.defaultProps = {
    title:'Title',
    home:'Hommy'
};
