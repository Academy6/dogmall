import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/Link.css'

const Login = ()=> {
    const [LoginID, setLoginID] = useState('')

    const onChange = (event, ch)=> {
        //문자를 아스키코드에 대응하는 숫자로 변경
        let ascii = ch.charCodeAt('');
        // 0 ~ 9까지 허용
        if ( 48 <= ascii && ascii <= 57) {
            return true
        }
        // A ~ Z까지 허용
        if ( 65 <= ascii && ascii <= 90) {
            return true
        }
        // a ~ z까지 허용
        if ( 97 <= ascii && ascii <= 122) {
            return true
        }
        // "_" 허용
        if ( ch === '_') {
            return true
        }
        return false
        setLoginID(event.target.value)
    }
    const onClick = ()=> {
        console.log(LoginID)
        if(LoginID.length <= 5) {
            alert("5자 넘게 써주세요")
        }
    }
    return (
        <div>
            Log In TEST
            <form>
                <input type='text' placeholder='아이디' onChange={onChange} required  />   
                <input type='password' placeholder='비밀번호' required />   
            </form>
            <button onClick={onClick}>로그인</button>
            <Link to="/option" className='text-link' ><p>회원가입</p></Link>
        </div>
    );
}

export default Login;