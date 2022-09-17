import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from "../fbase";

const Signup = ()=> {
    const [newId, setNewId] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("　")

    const CreateNewAccount = (event)=> {
        const {target: {name, value}} = event
        
        if (name === 'newId') {
            setNewId(value)
        } else if (name === 'newPassword') {
            setNewPassword(value)
        }
    }
    const onClick = async(event)=> {
        console.log(`newID:${newId}\nnewPassword:${newPassword}`)
        try {
            setErrorMsg(' ')
            const createUser = await authService.createUserWithEmailAndPassword(authService, newId, newPassword)
            setNewId("")
            setNewPassword("")
        } catch(err) {
            switch (err.code) {
                case 'auth/weak-password':
                    setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
                    break;
                case 'auth/invalid-email':
                    setErrorMsg('잘못된 이메일 주소입니다');
                    break;
                case 'auth/email-already-in-use':
                    setErrorMsg('이미 가입되어 있는 계정입니다');
                    break;
            }
        }
    }
    return (
        <div>
            <form>
                <input type='text' name='newId' value={newId} onChange={CreateNewAccount} placeholder='아이디' required/>
                <input type='password' name='newPassword' value={newPassword} onChange={CreateNewAccount} placeholder='비밀번호' required/>
            </form>
            <button onClick={onClick} name='click'>생성</button>
            <p>이미 회원이면? <Link to='/login' className='text-link'>로그인</Link></p>
        </div>
    );
}

export default Signup;