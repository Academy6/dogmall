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
        const onClick = ()=> {
            console.log(`gd`)
        }
    }, [])
    const onClick = (e)=> {
        authService.onAuthStateChanged((user)=> {
            if (e.target.name === 'comunity' && user === false) {
                console.log(`ㅎㅇ`)
                // alert(`로그인 해주세요`)
                // navigate('/login')
            } else if (e.target.name === 'comunity' && user === true) {
                console.log(`ㅎㅇ`)
                // navigate('/comunity/4')
            } 
            if (e.target.name === 'logout' && user === false) {
                console.log(`ㅎㅇ`)
                // alert('로그인 상태가 아닙니다')
            } else if (e.target.name === 'logout' && user === true) {
                console.log(`ㅎㅇ`)
                // authService.signOut()
                // navigate('/')
                // alert('로그 아웃 됨')
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
                        <li><Link to ='/comunity/4' name='comunity' onClick={onClick} className='text-link'>커뮤니티</Link></li>
                        <li><Link to ='/cart/5' className='text-link'>장바구니</Link></li>
                        {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                        <li><Link to="/login" className='text-link'>login</Link></li>
                        <li onClick={onClick} name='logout' className='text-link'>logout</li>
                        <li><Link to="/signup" className='text-link' >회원가입</Link></li>
                    </ul>
                </div>
            </div>   
        </div>
    );
}

export default Header;
