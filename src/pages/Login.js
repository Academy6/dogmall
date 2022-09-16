import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'

const Login = ()=> {
    const [loginID, setLoginID] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    
    const onChangeID = (event)=> {
        setLoginID(event.target.value)
        
    }
    const onChangePassword= (event)=> {
        setLoginPassword(event.target.value)
    }
    const onClick = (event)=> {
        const regex = /^[a-z]+[a-z0-9]{5,19}$/g;
        console.log(`ID:${loginID}\nPassword:${loginPassword}`)
        console.log(regex.test(loginID))
        // if (regex.test(event.target.value) === false) {
        //     alert('id를 올바르게 써주세요')
        // }
        // if (LoginPassword === '') {
        //     alert("비밀번호를 입력해주세요")
        // }
        // if(LoginID.length <= 5) {
        //     console.log(LoginID.length)
        // }
    }
    return (
        <div>
            Log In TEST
            <form>
                <input type='text' placeholder='아이디' onChange={onChangeID} value={loginID} required  />   
                <input type='password' placeholder='비밀번호' onChange={onChangePassword} value={loginPassword} required />   
            </form>
            <button onClick={onClick}>로그인</button>
            <Link to="/option" className='text-link' ><p>회원가입</p></Link>
        </div>
    );
}

export default Login;