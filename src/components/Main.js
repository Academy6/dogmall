import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'

const Main = () => (
    <nav>
        <ul>
            <li>
                <div>
                    <h1>메인입니다.</h1>
                </div>
                <Link to="/login" className='text-link'>Login</Link>
                <Link to="/signup" className='text-link' >회원가입</Link>
                <Link to="/conversation" className='text-link'>리뷰</Link>
            </li>
        </ul>
    </nav>
    )

export default Main;