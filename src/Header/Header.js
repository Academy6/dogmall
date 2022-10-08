import React, { useEffect, useState } from 'react';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { authService } from '../fbase'
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = ({isLoggedIn})=> {
    const navigate = useNavigate()

    const onClickLogOut = ()=> {
        authService.onAuthStateChanged((user)=> {
            if(user) {
                navigate("/")
                authService.signOut()
            }
        })
    }
    const onClickFunc = ()=> {
        authService.onAuthStateChanged((user)=> {
            if (user === null) {
                const ok = window.confirm(`로그인이 필요한 화면입니다. 로그인하시겠습니까?`)
                if (ok === true) {
                    navigate('/login')
                } else {
                    navigate('/')
                }
            } 
        })
    }

    return (
		<div>
            {/* Navbar */}
            <div id="header">
                <div className="inner">
                    {isLoggedIn ?(
                        <>
                            <h1><NavLink to ='/' className='text-link'>PetShop</NavLink></h1>
                            <ul>
                                <li><NavLink to ='/upload/2' className='text-link'>상품등록하기</NavLink></li>
                                <li><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                <li><NavLink to ='/comunity/4' name='comunity' className='text-link'>커뮤니티</NavLink></li>
                                <li><NavLink to ='/cart/5' className='text-link'>장바구니</NavLink></li>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <li><NavLink onClick={onClickLogOut} className='text-link'>logout</NavLink></li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <h1><NavLink to ='/' className='text-link'>PetShop</NavLink></h1>
                            <ul>
                                <li><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                <li><NavLink to ='/comunity/4' onClick={onClickFunc} className='text-link'>커뮤니티</NavLink></li>
                                <li><NavLink to ='/cart/5' onClick={onClickFunc} className='text-link'>장바구니</NavLink></li>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <li><NavLink to="/login" className='text-link'>login</NavLink></li>
                                <li><NavLink to="/signup" className='text-link' >회원가입</NavLink></li>
                            </ul>
                        </>
                    )}
                </div>
            </div>   
        </div>
    );
}

export default Header;
