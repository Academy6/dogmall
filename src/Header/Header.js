import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../fbase'
import { useNavigate } from 'react-router-dom';


const Header = (props)=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [init, setInit] = useState(false)
    const navigate = useNavigate()

    useEffect(()=> {
        authService.onAuthStateChanged((user)=> {
            if(user) {
                setIsLoggedIn(true)
                console.log(isLoggedIn)
            } else {
                setIsLoggedIn(false)
                console.log(isLoggedIn)
            }
        })
    })
    const onLogoutClick = () =>{
        authService.onAuthStateChanged((user)=> {
            // console.log(Boolean(user))
            if (Boolean(user)) {
                authService.signOut()
                navigate('/')
            } else {
                alert('로그인 상태 아님')
            }
        })
    }
    const onClick = ()=> {
        authService.onAuthStateChanged((user)=> {
            // console.log(Boolean(user))
            if (Boolean(user)) {
                navigate('/comunity/4')
            } else {
                alert('로그인 해주세여')
                navigate('/login')
            }
        })
    }
    return (
		<div>
            {/* Navbar */}
            <div id="header">
                <div className="inner">
                    <h1><Link to ='/' className='text-link'>PetShop</Link></h1>
                    <ul>
                        <li><Link to ='/upload/2' className='text-link'>상품등록하기</Link></li>
                        <li><Link to ='/product2/3' className='text-link'>상품보기</Link></li>
                        <li><Link to ='/comunity/4' onClick={onClick} className='text-link'>커뮤니티</Link></li>
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
