import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { authService } from '../fbase'
import '../scss/custom.scss'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'


const Header = ({isLoggedIn})=> {
    const navigate = useNavigate()
    const [isToggled, setIsToggled] = useState(false);
    useEffect(()=> {
        authService.onAuthStateChanged((user)=> {
            if(user) {
                console.log('유저 정보 있음')
            } else if (user === null) {
                console.log('유저 정보 없음')
            }
        })
    }, [])
    const onClickLogOut = ()=> {
        authService.onAuthStateChanged((user)=> {
            if(user) {
                navigate("/")
                authService.signOut()
            }
        })
    }
    const onClickBar = ()=> {
        setIsToggled(!isToggled)
        console.log('gd')
    }
   
    return (
        <div>
    {/* Navbar */}
            <nav id="navbar" className="navBar">
                <div className='no-bar'>
                    {isLoggedIn ? (
                        <div className='navBar_menus'>
                            <div className='start-menu'><NavLink to ='/' className='text-link'><h1 className='navBar_main'>PetShop</h1></NavLink></div>
                            <div className='center-menus'>
                                <div className="navBar_menus_menu"><NavLink to ='/upload/2' className='text-link'>상품등록하기</NavLink></div>
                                <div className="navBar_menus_menu"><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></div>
                                <div className="navBar_menus_menu"><NavLink to ='/comunity/4' name='comunity' className='text-link'>커뮤니티</NavLink></div>
                                <div className="navBar_menus_menu"><NavLink to ='/cart/5' className='text-link'>장바구니</NavLink></div>
                            </div>
                                    {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                            <div className='end-menus'>
                                <div className="navBar_menus_menu"><NavLink onClick={onClickLogOut} className='text-link'>logout</NavLink></div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="navBar_menus">
                                <div className='start-menu'><NavLink to ='/' className='text-link'><h1 className='navBar_main'>PetShop</h1></NavLink></div>
                                <div className='center-menus'>
                                    <div><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></div>
                                    <div><NavLink to ='/cart/5' className='text-link'>장바구니</NavLink></div>
                                </div>
                                {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                <div className='end-menus'>
                                    <div><NavLink to="/login" className='text-link'>login</NavLink></div>
                                    <div><NavLink to="/signup" className='text-link' >회원가입</NavLink></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='is-bar'>
                    <NavLink to ='/' className='text-link'><h1 className='navBar_main'>PetShop</h1></NavLink>
                    {isToggled ? (
                        <div>
                            <ul className="bavBar_icons">
                                {isToggled ? <CloseOutlined onClick={onClickBar} /> : <MenuOutlined onClick={onClickBar} />}
                            </ul>
                            <div className={isToggled ? 'active-bar' : 'hidden-bar'}>
                                {isLoggedIn ? (
                                    <div>
                                        <ul className="navBar_menus">
                                            <li className="navBar_menus_menu"><NavLink to ='/upload/2' className='text-link'>상품등록하기</NavLink></li>
                                            <li className="navBar_menus_menu"><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                            <li className="navBar_menus_menu"><NavLink to ='/comunity/4' name='comunity' className='text-link'>커뮤니티</NavLink></li>
                                            <li className="navBar_menus_menu"><NavLink to ='/cart/5' className='text-link'>장바구니</NavLink></li>
                                            {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                            <li className="navBar_menus_menu"><NavLink onClick={onClickLogOut} className='text-link'>logout</NavLink></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div>
                                        <ul className='navBar_menus'>
                                            <li className="navBar_menus_menu"><NavLink to ='/product2/3' className='text-link'>상품보기</NavLink></li>
                                            {/* <li>{init ? <Router isLoggedIn={isLoggedIn} /> : '!'}</li> */}
                                            <li className="navBar_menus_menu"><NavLink to="/login" className='text-link'>login</NavLink></li>
                                            <li className="navBar_menus_menu"><NavLink to="/signup" className='text-link' >회원가입</NavLink></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <ul className="bavBar_icons">
                                {isToggled ? <CloseOutlined onClick={onClickBar} /> : <MenuOutlined onClick={onClickBar} />}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>   
        </div>
    );
}

export default Header;