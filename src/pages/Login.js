import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'

const Login = ()=> {
    return (
        <div>
            Log In TEST
            <form>
                <input type='text' placeholder='아이디' required />   
                <input type='password' placeholder='비밀번호' required />   
            </form>
            <button>로그인</button>
            <Link to="/option" className='text-link' ><p>회원가입</p></Link>
        </div>
    );
}

export default Login;