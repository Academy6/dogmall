import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'

const Login = ()=> {
    const [loginID, setLoginID] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    
    const onChange = (event)=> {
        const {target: {name, value}} = event
        if (name === 'Id') {
            setLoginID(value)
        } else if (name === 'Password') {
            setLoginPassword(value)
        }
        
    }
    const onClick = (event)=> {
        // ID 이메일 체크 regex 정규식
        const regexId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // Password 특수문자 포함 체크 regex 정규식
        const regexPassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
        console.log(`ID:${loginID}\nPassword:${loginPassword}`)
        console.log(`아이디:${regexId.test(loginID)}\n비번:${regexPassword.test(loginPassword)}`)

        if (regexId.test(loginID) === true && regexPassword.test(loginPassword) === true) {
            alert(`ID:${loginID}\nPassword:${loginPassword}`)
            event.preventDefault()
        } else if (regexId.test(loginID) === false && regexPassword.test(loginPassword) === true) {
            alert(`아이디를 다시 입력하세요`)
        } else if (regexId.test(loginID) === true && regexPassword.test(loginPassword) === false) {
            alert(`비밀번호를 다시 입력하세요`)
        }
    }
    return (
        <div>
            Log In TEST
            <form>
                <input type='text' placeholder='아이디' name='Id' onChange={onChange} value={loginID} required  />   
                <input type='password' placeholder='비밀번호' name='Password' onChange={onChange} value={loginPassword} required />  
            </form>
            <form>
                <button onClick={onClick}>로그인</button>
            </form>
            <p>아직 회원이 아니라면? <Link to='/signup' className='text-link'>회원가입</Link></p>
        </div>
    );
}

export default Login;