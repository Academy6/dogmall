import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signup from '../pages/Signup';
import Main from '../Main/Main';
import Product from '../Main/Product';
import Product2 from '../Main/Product2';
import Upload from '../Main/Upload';
import Comunity from '../Main/Comunity';
import Cart from '../Main/Cart';
import Header from '../Header/Header';
import { Footer } from 'antd/lib/layout/layout';

const Router = ({isLoggedIn, userObj})=> {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='logout' element={<Logout />} />
				<Route path="/product/:1" element={<Product />} />
				{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				<Route path="/product2/:2" element={<Product2 />} />
				<Route path="/upload/:3" element={<Upload />} />
				<Route path="/comunity/:4" element={<Comunity />} />
				<Route path="/Cart/:5" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;