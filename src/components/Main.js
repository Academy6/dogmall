import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Main = () => (
    <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
    )

export default Main;