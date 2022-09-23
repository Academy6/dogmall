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

const Router = ({isLoggedIn})=> {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                {/* {isLoggedIn ? (
                    <>
                        <Route path='/' element={<Main />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path="/product/:1" element={<Product />} />
                        <Route path="/product2/:2" element={<Product2 />} />
                        <Route path="/upload/:3" element={<Upload />} />
                        <Route path="/comunity/:4" element={<Comunity />} />
                        <Route path="/Cart/:5" element={<Cart />} />
                    </>
                    ) : (
                        <>
                            <Route path='/' element={<Main />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<Signup />} />
                            <Route path="/product/:1" element={<Product />} />
                            <Route path="/product2/:2" element={<Product2 />} />
                            <Route path="/upload/:3" element={<Upload />} />
                            <Route path="/comunity/:4" element={<Comunity />} />
                            <Route path="/Cart/:5" element={<Cart />} />
                        </>
                    )
                } */}
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='logout' element={<Logout />} />
				<Route path="/product/:1" element={<Product />} />
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