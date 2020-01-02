import React from 'react';
import './Logo.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default props =>
    <aside className="logo">
        <Link href="/" className="logo">
            <img src={logo} alt="logo"></img>
        </Link>
    </aside>