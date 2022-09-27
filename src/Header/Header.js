import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../fbase'
import { useNavigate } from 'react-router-dom';


const Header = ({isLoggedIn})=> {
    const navigate = useNavigate()

    const onClickLogOut = ()=> {
        authService.signOut()
        navigate('/')
    }
    const onClick = ()=> {
        authService.onAuthStateChanged((user)=> {
            if (user) {
                
            } else {
                const ok = window.confirm(`로그인이 필요한 화면입니다. 로그인하시겠습니까?`)
                if (ok) {
                    navigate('/login')
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
                            <h1><Link to ='/' className='text-link'>PetShop</Link></h1>
                            <ul>
                                <li><Link to ='/upload/2' className='text-link'>상품등록하기</Link></li>
                                <li><Link to ='/product2/3' className='text-link'>상품보기</Link></li>
                                <li><Link to ='/comunity/4' name='comunity' className='text-link'>커뮤니티</Link></li>
                                <li><Link to ='/cart/5' className='text-link'>장바구니</Link></li>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <li onClick={onClickLogOut} className='text-link'>logout</li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <h1><Link to ='/' className='text-link'>PetShop</Link></h1>
                            <ul>
                                <li><Link to ='/upload/2' onClick={onClick} className='text-link'>상품등록하기</Link></li>
                                <li><Link to ='/product2/3' className='text-link'>상품보기</Link></li>
                                <li><Link to ='/comunity/4' onClick={onClick} className='text-link'>커뮤니티</Link></li>
                                <li><Link to ='/cart/5' onClick={onClick} className='text-link'>장바구니</Link></li>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <li><Link to="/login" className='text-link'>login</Link></li>
                                <li><Link to="/signup" className='text-link' >회원가입</Link></li>
                            </ul>
                        </>
                    )}
                </div>
            </div>   
        </div>
    );
}

export default Header;
