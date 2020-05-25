import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bd-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">CRUD Personas</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Personas</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Crear Persona</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Crear User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}