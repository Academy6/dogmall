import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from './Main';

const Router = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/option' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;