import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from "../fbase";
import { useNavigate } from 'react-router-dom';
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
        const regexId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        const regexPassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/

        if (regexId.test(newId) === true && regexPassword.test(newPassword) === true) {
            alert(`ID:${newId}\nPassword:${newPassword}`)
            event.preventDefault()
        } else if (regexId.test(newId) === false && regexPassword.test(newPassword) === true) {
            alert(`아이디를 다시 입력하세요`)
        } else if (regexId.test(newId) === true && regexPassword.test(newPassword) === false) {
            alert(`비밀번호를 다시 입력하세요`)
        }

        createUserWithEmailAndPassword(auth, newId, newPassword)
            .then((userCredential)=> {
                const user =userCredential.user
                console.log(userCredential)
                console.log(user)
            })
            .cath((error)=> {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(`${errorCode}\n${errorMessage}`)
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