import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from "../fbase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
  

const Signup = ()=> {
    const [newId, setNewId] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const CreateNewAccount = (event)=> {
        const {target: {name, value}} = event
        
        if (name === 'newId') {
            setNewId(value)
        } else if (name === 'newPassword') {
            setNewPassword(value)
        }
    }
    const onClick = async(event)=> {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, newId, newPassword)
            .then((userCredential)=> {
                console.log(userCredential)
            })
            .cath((error)=> {
                console.log(error)
                const errorCode = error.code
                const errorMessage = error.message
            })
        console.log(`newID:${newId}\nnewPassword:${newPassword}`)
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