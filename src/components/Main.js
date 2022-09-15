import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'

const Main = () => (
    <nav>
        <ul>
            <li>
                <Link to="/login" className='text-link'>Login</Link>
            </li>
        </ul>
    </nav>
    )

export default Main;