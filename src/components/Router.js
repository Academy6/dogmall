import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversation from '../pages/Conversation';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signup from '../pages/Signup';
import Main from './Main';

const Router = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/conversation' element={<Conversation />} />
                <Route path='logout' element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;