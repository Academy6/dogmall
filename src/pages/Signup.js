// import React, { Component, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { dbService } from '../fbase';
// import '../scss/Link.css'
  

// const Signup = ()=> {
//     const [newId, setNewId] = useState("")
//     const [name, setName] = useState("")
//     const [blankId, setBlankId] = useState(false)
//     const [blankName, setBlankName] = useState(false)
//     const [blankPw, setBlankPw] = useState(false)
//     const [blankPw2, setBlankPw2] = useState(false)
//     const [newPassword, setNewPassword] = useState("")
//     const [checkPassword, setCheckPassword] = useState("")
//     const [userInfo, setUserInfo] = useState([])
//     const [error, setError] = useState("")
//     const [samePwd, setSamePwd] = useState(false)
//     const [sameId, setSameId] = useState(false)
//     const navigate = useNavigate()

//     const onSubmit = (e)=> {
//         e.preventDefault()
//     }
//     const CreateNewAccount = (event)=> {
//         const {target: {name, value}} = event
        
//         if (name === 'newId') {
//             setNewId(value)
//         } else if (name === 'newPassword') {
//             setNewPassword(value)
//         }
//     }
    
//     useEffect(()=> {
//         dbService.collection("userInfo").onSnapshot(snapshot=> {
//             const userInfoArray = snapshot.docs.map((doc)=> ({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             setUserInfo(userInfoArray)
//         })
//         userInfo.map((data)=> {
//             if (newId === data.id) {
//                 setSameId(false)
//             } else if (newId !== data.id) {
//                 setSameId(true)
//             }
//         })
//         if (newPassword !== checkPassword) {
//             setSamePwd(false)
//         } else if (newPassword === checkPassword) {
//             setSamePwd(true)
//         }
//     }, [checkPassword || newId])
//     const onChange = async(e)=> {
//         const {target: {value, name}} = e
//         if (name === "name") {
//             setName(value)
//         } else if (name === "pwd2") {
//             setCheckPassword(value)
//             // if (newPassword !== value) {
//             //     setCheckPassword(value)
//             //     setSamePwd(false)
//             //     console.log(`????????? ?????????`)
//             // } else if (newPassword === value) {
//             //     setCheckPassword(value)
//             //     setSamePwd(true)
//             //     console.log(`????????? ??????`)
//             // }
//             // console.log(`${newPassword}\n${value}\n${samePwd}`)
//         }
//     }


//     // 1. ?????? ????????? ????????? ???????????? ???????????????alert??? ??????? ????????? ?????????????????? ????????? alert??? ????????? onSubmitHandler ????????? ???????????? ????????????.
//     // 2. ??????????????? ???????????? ????????? ?????? ????????? ??? ??????. useState??? ???????????? ??? ?????? ??????????????? ??????????????? ?????? ????????? ?????? value??? ??????????????? ?????? ????????? ?????????.
//     // 3. ????????? ????????? ????????? ?????? ??????????????????. ???????????? ????????? ?????? ????????? ?????????. ???????????? ????????? ???????????? useState?????? ???????????? ??????????????? ???????????? ???????????? ???.
//     // 4. state????????? ????????????.  
//     // useEffect(()=> {
//     //     console.log('in')
//     // }, [newPassword])
//     const onClick = async(event)=> {
//         const auth = getAuth()
//         const regexId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
//         const regexPassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
//         if (newId === "" && newPassword === "" && name === "" && checkPassword === "") {

//         } else if (newId === "" && newPassword === "") {
//             setBlankId(true)
//             setBlankName(false)
//             setBlankPw(true)
//             setBlankPw2(false)
//         } else if (newId === "" && name === "") {
//             setBlankId(true)
//             setBlankName(true)
//             setBlankPw(false)
//             setBlankPw2(false)
//         } else if (newId === "" && checkPassword === "") {
//             setBlankId(true)
//             setBlankName(false)
//             setBlankPw(false)
//             setBlankPw2(true)
//         } else if (newPassword === "" && name === "") {
//             setBlankId(false)
//             setBlankName(true)
//             setBlankPw(true)
//             setBlankPw2(false)
//         } else if (newPassword === "" && checkPassword === "") {
//             setBlankId(false)
//             setBlankName(false)
//             setBlankPw(true)
//             setBlankPw2(true)
//         } else if (name === "" && checkPassword === "") {
//             setBlankId(false)
//             setBlankName(true)
//             setBlankPw(false)
//             setBlankPw2(true)
//         } else if (newId === "") {
//             setBlankId(true)
//             setBlankName(false)
//             setBlankPw(false)
//             setBlankPw2(false)
//         } else if (newPassword === "") {
//             setBlankId(false)
//             setBlankName(false)
//             setBlankPw(true)
//             setBlankPw2(false)
//         } else if (name === "") {
//             setBlankId(false)
//             setBlankName(true)
//             setBlankPw(false)
//             setBlankPw2(false)
//         } else if (checkPassword === "") {
//             setBlankId(false)
//             setBlankName(false)
//             setBlankPw(false)
//             setBlankPw2(true)
//         } else {
//             setBlankId(false)
//             setBlankName(false)
//             setBlankPw(false)
//             setBlankPw2(false)
//             if (sameId === true) {
//                 if (samePwd === true) {
//                     if (regexId.test(newId) === true && regexPassword.test(newPassword) === true) {
//                         createUserWithEmailAndPassword(auth, newId, newPassword)
//                         .then((userCredential)=> {
//                             console.log(userCredential)
//                             dbService.collection('userInfo').add({
//                                 id: newId,
//                                 password: newPassword,
//                                 nickName: name
//                             })
//                         })
//                         navigate('/')
//                         .catch((error)=> {
//                             setError(error.message)
//                         })
//                     } else if (regexId.test(newId) === false && regexPassword.test(newPassword) === true) {
//                         event.preventDefault()
//                         alert(`???????????? ?????? ???????????????`)
//                     } else if (regexId.test(newId) === true && regexPassword.test(newPassword) === false) {
//                         event.preventDefault()
//                         alert(`??????????????? ?????? ???????????????`)
//                     }
//                 } else {
//                     alert('??????????????? ????????????')
//                 }
//             } else {
//                 alert('?????? ?????? ???????????????')
//             } 
//         }
//     }
//     const duplicateCheck = (e)=> {
//         if (newId === "") {
//             alert('???????????? ??????????????????')
//         } else {
//             userInfo.map((data)=> {
//                 if (newId === data.id) {
//                     setNewId("")
//                 } else if (newId !== data.id) {
//                 }
//             })
//         }
//     }
//     return (
//         <div>
//             <form className='sinup-container' onSubmit={onSubmit}>
//                 <ul className='signup'>
//                     <li>
//                         <input className={blankId ? 'blank' : 'no_blank'} type='text' name='newId' value={newId} onChange={CreateNewAccount} placeholder='?????????' required/>
//                         {sameId ? <button onClick={duplicateCheck}>?????? ??????</button> : <button onClick={duplicateCheck}>?????? ??????</button>}
//                     </li>
//                     <li>
//                         <input className={blankName ? 'blank' : 'no_blank'} name='name' type='text' placeholder='??????' value={name} onChange={onChange}/>
//                     </li>
//                     <li>
//                         <input className={blankPw ? 'blank' : 'no_blank'} type='password' name='newPassword' value={newPassword} onChange={CreateNewAccount} placeholder='????????????' required/>
//                     </li>
//                     <li>
//                         <input className={blankPw2 ? 'blank' : 'no_blank'} type='password' name='pwd2' onChange={onChange} value={checkPassword} placeholder='???????????? ??????'/>
//                     </li>
//                 </ul>
//                 {error}
//                 <div id='createBtn'>
//                     <button id='create-user-button' onClick={onClick} name='click'>??????</button>
//                 </div>
//             </form>
//             <div id='usered'>
//                 <p id='usered'>?????? ????????????? <Link to='/login' className='text-link'>?????????</Link></p>
//             </div>
//         </div>
//     );
// }

// export default Signup;
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { dbService } from '../fbase';
import '../scss/Link.css'
import {Button,Form,Input,Checkbox} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
  

const Signup = ()=> {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    const [newId, setNewId] = useState("")
    const [name, setName] = useState("")
    const [blankId, setBlankId] = useState(false)
    const [blankName, setBlankName] = useState(false)
    const [blankPw, setBlankPw] = useState(false)
    const [blankPw2, setBlankPw2] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [userInfo, setUserInfo] = useState([])
    const [error, setError] = useState("")
    const [samePwd, setSamePwd] = useState(false)
    const [sameId, setSameId] = useState(false)
    const [inputId, setInputId] = useState(false)
    const navigate = useNavigate()

    const onSubmit = (e)=> {
        e.preventDefault()
    }
    const CreateNewAccount = (event)=> {
        const {target: {name, value}} = event
        if (name === 'newId') {
            setNewId(value)
        } else if (name === 'newPassword') {
            setNewPassword(value)
        }
    }
    useEffect(()=> {
        if (newPassword !== checkPassword) {
            setSamePwd(false)
            console.log(`????????? ?????????`)
            console.log(samePwd)
        } else if (newPassword === checkPassword) {
            setSamePwd(true)
            console.log(`????????? ??????`)
        }
        if (newId === '') {
            setInputId(false)
        } else {
            setInputId(true)
        }
    }, [checkPassword || newId])
    console.log(samePwd)
    const onChange = async(e)=> {
        const {target: {value, name}} = e
        if (name === "name") {
            setName(value)
        } else if (name === "pwd2") {
            setCheckPassword(value)
            // if (newPassword !== value) {
            //     setCheckPassword(value)
            //     setSamePwd(false)
            //     console.log(`????????? ?????????`)
            // } else if (newPassword === value) {
            //     setCheckPassword(value)
            //     setSamePwd(true)
            //     console.log(`????????? ??????`)
            // }
            // console.log(`${newPassword}\n${value}\n${samePwd}`)
        }
    }


    // 1. ?????? ????????? ????????? ???????????? ???????????????alert??? ??????? ????????? ?????????????????? ????????? alert??? ????????? onSubmitHandler ????????? ???????????? ????????????.
    // 2. ??????????????? ???????????? ????????? ?????? ????????? ??? ??????. useState??? ???????????? ??? ?????? ??????????????? ??????????????? ?????? ????????? ?????? value??? ??????????????? ?????? ????????? ?????????.
    // 3. ????????? ????????? ????????? ?????? ??????????????????. ???????????? ????????? ?????? ????????? ?????????. ???????????? ????????? ???????????? useState?????? ???????????? ??????????????? ???????????? ???????????? ???.
    // 4. state????????? ????????????.  
    // useEffect(()=> {
    //     console.log('in')
    // }, [newPassword])
    const onClick = async(event)=> {
        const auth = getAuth()
        const regexId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        const regexPassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
        if (newId === "" && newPassword === "" && name === "" && checkPassword === "") {

        } else if (newId === "" && newPassword === "") {
            setBlankId(true)
            setBlankName(false)
            setBlankPw(true)
            setBlankPw2(false)
        } else if (newId === "" && name === "") {
            setBlankId(true)
            setBlankName(true)
            setBlankPw(false)
            setBlankPw2(false)
        } else if (newId === "" && checkPassword === "") {
            setBlankId(true)
            setBlankName(false)
            setBlankPw(false)
            setBlankPw2(true)
        } else if (newPassword === "" && name === "") {
            setBlankId(false)
            setBlankName(true)
            setBlankPw(true)
            setBlankPw2(false)
        } else if (newPassword === "" && checkPassword === "") {
            setBlankId(false)
            setBlankName(false)
            setBlankPw(true)
            setBlankPw2(true)
        } else if (name === "" && checkPassword === "") {
            setBlankId(false)
            setBlankName(true)
            setBlankPw(false)
            setBlankPw2(true)
        } else if (newId === "") {
            setBlankId(true)
            setBlankName(false)
            setBlankPw(false)
            setBlankPw2(false)
        } else if (newPassword === "") {
            setBlankId(false)
            setBlankName(false)
            setBlankPw(true)
            setBlankPw2(false)
        } else if (name === "") {
            setBlankId(false)
            setBlankName(true)
            setBlankPw(false)
            setBlankPw2(false)
        } else if (checkPassword === "") {
            setBlankId(false)
            setBlankName(false)
            setBlankPw(false)
            setBlankPw2(true)
        } else {
            setBlankId(false)
            setBlankName(false)
            setBlankPw(false)
            setBlankPw2(false)
            if (sameId === true) {
                if (samePwd === true) {
                    if (regexId.test(newId) === true && regexPassword.test(newPassword) === true) {
                        createUserWithEmailAndPassword(auth, newId, newPassword)
                        .then((userCredential)=> {
                            dbService.collection('userInfo').add({
                                id: newId,
                                password: newPassword,
                                nickName: name
                            })
                        })
                        .catch((error)=> {
                            setError(error.message)
                        })
                        navigate('/')
                    } else if (regexId.test(newId) === false && regexPassword.test(newPassword) === true) {
                        event.preventDefault()
                        alert(`???????????? ?????? ???????????????`)
                    } else if (regexId.test(newId) === true && regexPassword.test(newPassword) === false) {
                        event.preventDefault()
                        alert(`??????????????? ?????? ???????????????`)
                    }
                } else {
                    alert('??????????????? ????????????')
                }
            } else {
                alert('?????? ?????? ???????????????')
            } 
        }
    }
    const duplicateCheck = ()=> {
        if (newId === "") {
            alert('???????????? ??????????????????')
        } else {
            dbService.collection("userInfo").onSnapshot(snapshot=> {
                const userInfoArray = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
                setUserInfo(userInfoArray)
            })
            userInfo.map((data)=> {
                if (newId === data.id) {
                    setSameId(false)
                    alert('?????? ???????????? ??????????????????')
                    setNewId("")
                } else if (newId !== data.id) {
                    setSameId(true)
                }
            })
        }
    }
    return (
        <div className='top-sign'>
            {/* <form className='sinup-container' onSubmit={onSubmit}>
                <ul className='signup'>
                    <li>
                        <input className={blankId ? 'blank' : 'no_blank'} type='text' name='newId' value={newId} onChange={CreateNewAccount} placeholder='?????????' required/>
                        <button onClick={duplicateCheck}>?????? ??????</button>
                    </li>
                    <li>
                        <input className={blankName ? 'blank' : 'no_blank'} name='name' type='text' placeholder='??????' value={name} onChange={onChange}/>
                    </li>
                    <li>
                        <input className={blankPw ? 'blank' : 'no_blank'} type='password' name='newPassword' value={newPassword} onChange={CreateNewAccount} placeholder='????????????' required/>
                    </li>
                    <li>
                        <input className={blankPw2 ? 'blank' : 'no_blank'} type='password' name='pwd2' onChange={onChange} value={checkPassword} placeholder='???????????? ??????'/>
                    </li>
                </ul>
                {error}
                <div id='createBtn'>
                    <button id='create-user-button' onClick={onClick} name='click'>??????</button>
                </div>
            </form>
            <div id='usered'>
                <p id='usered'>?????? ????????????? <Link to='/login' className='text-link'>?????????</Link></p>
            </div> */}
             <Form name="normal_login" id="signup-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="E-mail" rules={[
                  {
                    required: true,
                    message: '???????????? ??????????????????',
                  },
                ]}>

                    <Input prefix={<UserOutlined className="site-form-item-icon" />} className={blankId ? 'blank' : 'no_blank'} placeholder="E-Mail" name='newId' value={newId} onChange={CreateNewAccount} required/>
                    {inputId ? <Button type="link" onClick={duplicateCheck}>??????????????????</Button> : ''}
                </Form.Item>
                <Form.Item
                    name="Name"
                    // label="??? ???"
                    rules={[
                    {
                        required: true,
                        message: '????????? ??????????????????',
                    },
                    ]}
                >
                    <Input placeholder="??? ???" className={blankName ? 'blank' : 'no_blank'} name='name'  value={name} onChange={onChange}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    // label="????????????"
                    rules={[
                    {
                        required: true,
                        message: '??????????????? ????????? ?????????.',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Password" className={blankPw ? 'blank' : 'no_blank'} name='newPassword' value={newPassword} onChange={CreateNewAccount}  required />

                </Form.Item>
                <Form.Item
                    name="confirm"
                    // label="???????????? ??????"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: '??????????????? ????????? ?????????.',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                  
                        return Promise.reject(new Error('Password??? ????????? ?????????.'));
                        },
                    }),
                    ]}  
                >
                    <Input.Password placeholder="Confirm Password" className={blankPw2 ? 'blank' : 'no_blank'} type='password' name='pwd2' onChange={onChange} value={checkPassword}/>
                </Form.Item>
            
            
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"  onClick={onClick} name='click'>
                    ??????????????????
                    </Button>
                    <div>
                    <p id='usered'>?????? ????????????? <Link to='/login' className='text-link'><p>Login</p></Link></p>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Signup;