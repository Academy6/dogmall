import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from '../Main/Main';
import Product from '../Main/Product';
import Product2 from '../Main/Product2';
import Upload from '../Main/Upload';
import Comunity from '../Main/Comunity';
import Cart from '../Main/Cart';
import Writing from '../Main/ Writing';
import Header from '../Header/Header';
import { Footer } from 'antd/lib/layout/layout';
import { authService } from '../fbase';

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
            console.log(userObj.uid)
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
				<Route path="/product2/:2" element={<Product2 />} />
				<Route path="/upload/:3" element={<Upload />} />
				<Route path="/comunity/:4" element={<Comunity />} />
				<Route path="/Cart/:5" element={<Cart />} />
                <Route path="/writing" element={<Writing userObj={userObj}/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;