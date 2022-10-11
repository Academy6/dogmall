import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { authService } from '../fbase'
import '../scss/custom.scss'
import {AlignCenterOutlined} from '@ant-design/icons'
const Header = ({isLoggedIn})=> {
    const navigate = useNavigate()
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBar, setToggleBar] = useState(true)

    const onClickLogOut = ()=> {
        authService.onAuthStateChanged((user)=> {
            if(user) {
                authService.signOut()
                navigate("/")
            }
        })
    }
    const onMenuClick = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
      }
    return (
		<div>
            {/* Navbar */}
            <div id="header">
                <h1><NavLink to ='/' className='text-link petshop'>PetShop</NavLink></h1>
                <div className="inner">
                    {isLoggedIn ?(
                        <nav className='nav'>
                            <h1><NavLink to ='/' className='text-link petshop'>PetShop</NavLink></h1>
                            <ul className='navbar'>
                                <li><NavLink to ='/upload/2' className='text-link'>상품등록하기</NavLink></li>
                                <li><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                <li><NavLink to ='/comunity/4' name='comunity' className='text-link'>커뮤니티</NavLink></li>
                                <li><NavLink to ='/cart/5' className='text-link'>장바구니</NavLink></li>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <li><NavLink onClick={onClickLogOut} className='text-link'>logout</NavLink></li>
                            </ul>
                         </nav>
                    ) : (
                        <nav className='nav'>
                            <ul className='navbar'>
                                <h1><NavLink to ='/' className='text-link petshop'>PetShop</NavLink></h1>
                                <li><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <li><NavLink to="/login" className='text-link'>login</NavLink></li>
                                <li><NavLink to="/signup" className='text-link' >회원가입</NavLink></li>
                            </ul>
                        </nav>
                    )}
                </div>
                <div className='bar'>
                    {toggleMenu ? (
                        <div className='login-bar'>
                            {isLoggedIn ?(
                                <menu inlineCollapsed={toggleBar}
                                onClick={onMenuClick}>
                                    <nav className='nav'>
                                        <ul className='navbar'>
                                            <li><NavLink to ='/upload/2' className='text-link'>상품등록하기</NavLink></li>
                                            <li><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                            <li><NavLink to ='/comunity/4' name='comunity' className='text-link'>커뮤니티</NavLink></li>
                                            <li><NavLink to ='/cart/5' className='text-link'>장바구니</NavLink></li>
                                            {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                            <li><NavLink onClick={onClickLogOut} className='text-link'>logout</NavLink></li>
                                        </ul>
                                    </nav>
                                </menu>
                            ) : (
                                <nav className='nav'>
                                    <ul className='navbar'>
                                        <li><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                        {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                        <li><NavLink to="/login" className='text-link'>login</NavLink></li>
                                        <li><NavLink to="/signup" className='text-link' >회원가입</NavLink></li>
                                    </ul>
                                </nav>
                            )}
                        </div>
                    ) : (
                        <div className='not-login-bar'>
                            <ul onClick={onMenuClick} className="bavBar_icons">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>   
        </div>
    );
}

export default Header;




{/* <ul className="togleMenus">
                                <li className="toggle_menu"><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                <li className="toggle_menu"></li>
                                <li className="toggle_menu"><NavLink to="/login" className='text-link'>login</NavLink></li>
                                <li className="toggle_menu"><NavLink to="/signup" className='text-link' >회원가입</NavLink></li>
                            </ul> */}