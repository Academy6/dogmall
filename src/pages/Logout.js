import React, { Component } from 'react';
import { authService } from '../fbase';
import { useNavigate } from 'react-router-dom';

const Logout =()=> {
    const navigate = useNavigate()
    const onLogoutClick = () =>{
        authService.signOut()
        navigate('/')
    }
    return(
        <>
            <p onClick={onLogoutClick}>Log out</p>
        </>
    )
}

export default Logout;