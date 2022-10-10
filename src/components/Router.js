import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from '../Main/Main';
import Product from '../Main/Product';
import Product2 from '../Main/Product2';
import Upload from '../Upload/Upload';
import Cart from '../Main/Cart';
import Comunity from '../Main/Comunity';
import Header from '../Header/Header';
import { Footer } from 'antd/lib/layout/layout';
import { authService } from '../fbase';
import WriteButton from '../Main/WriteButton';

const Router = ()=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [init, setInit] = useState(false)
    const [userObj, setUserObj] = useState(null)

    useEffect(()=> {
        authService.onAuthStateChanged((user)=> {
            if (user) {
                setIsLoggedIn(true)
                setUserObj(user)
            } else {
                setIsLoggedIn(false)
            }
            setInit(true)
        })
    }, [])
    return (
        <BrowserRouter>
        {init ? <Header isLoggedIn={isLoggedIn} /> : "Initializing..." }
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
				<Route path="/product/:1" element={<Product />} />
				<Route path="/product2/:2" element={<Product2 userObj={userObj} />} />
				<Route path="/upload/:3" element={<Upload userObj={userObj} />} />
				<Route path="/Cart/:5" element={<Cart userObj={userObj} />} />
                <Route path="/comunity/:4" element={<Comunity userObj={userObj}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;