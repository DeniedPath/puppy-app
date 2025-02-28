import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header: React.FC = () => {
    return (
        <header className="bg-primary py-3">
            <nav className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;