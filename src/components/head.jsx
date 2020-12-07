import React from 'react';
import {Link,NavLink} from "react-router-dom";
import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';

function Head(props) {

    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm header">
            <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
            Intugine
            </Link>
            <div className="collapse navbar-collapse" id="navBar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Brands</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Transporters</a>
                    </li>
                    <li className="nav-item">
                        <img src={profile} width="35" height="35" className="rounded-circle img-background" alt="" loading="lazy"/>
                    </li>
                    <li className="nav-item">
                        <i className="arrow down"></i>
                    </li>
                </ul>
            </div>
      </nav>
    );
}

export default Head;
