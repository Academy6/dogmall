import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Router from '../components/Router';
import { authService } from '../fbase'
import Logout from '../pages/Logout';
import { useNavigate } from 'react-router-dom';


const Header = (props)=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [init, setInit] = useState(false)
    const navigate = useNavigate()

    const onLogoutClick = () =>{
        authService.signOut()
        navigate('/')
    }
    useEffect(()=> {
        authService.onAuthStateChanged((user)=> {
            if(user.emailVerified) {
                setIsLoggedIn(true)
                console.log(isLoggedIn)
            } else {
                setIsLoggedIn(false)
                console.log(isLoggedIn)
            }
            setInit(true)
        })
    },[])
    return (
		<div>
            {/* Navbar */}
            <div id="header">
                <div className="inner">
                    <h1><Link to ='/' className='text-link'>PetShop</Link></h1>
                    <ul>
                        <li><Link to ='/upload/2' className='text-link'>상품등록하기</Link></li>
                        <li><Link to ='/product2/3' className='text-link'>상품보기</Link></li>
                        <li><Link to ='/comunity/4' className='text-link'>커뮤니티</Link></li>
                        <li><Link to ='/cart/5' className='text-link'>장바구니</Link></li>
                        {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                        <li><Link to="/login" className='text-link'>login</Link></li>
                        <li onClick={onLogoutClick} className='text-link'>logout</li>
                        <li><Link to="/signup" className='text-link' >회원가입</Link></li>
                    </ul>
                </div>
            </div>   
        </div>
    );
}

export default Header;
