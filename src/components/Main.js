import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'
import { getAuth } from "firebase/auth";

const Main = () => {
    const [init, setInit] = useState(false);
    const [isLoggined, setIsLoggined] = useState(false)

    useEffect(()=> {
        const authService = getAuth()
        authService.onAuthStateChanged((user)=> {
            if (user) {
                setIsLoggined(true)
            } else {
                setIsLoggined(false)
            }
        })
        setInit(true)
    }, [])
    return (
        <nav>
            <ul>
                <li>
                    <div>
                        <h1>메인입니다.</h1>
                    </div>
                    <Link to="/login" className='text-link'>login</Link>
                    <Link to='/logout' className='text-link'>logout</Link>
                    <Link to="/signup" className='text-link' >회원가입</Link>
                    <Link to="/conversation" className='text-link'>리뷰</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Main;