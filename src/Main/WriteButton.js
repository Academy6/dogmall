import React, { Component, useEffect, useState } from 'react';
import { dbService, authService } from '../fbase';
import '../scss/Link.css'

const WriteButton = ({ writeObj, isOwner, userObj })=> {
    const [editing, setEditing] = useState(false)
    const [newWrite, setNewWrite] = useState(writeObj.text)
    const [isUser, setIsUser] = useState(false)
    const [users, setUsers] = useState(0)
    const [userChat, setUserChat] = useState([])
    const [notUsers, setNotUsers] = useState(false)
    const date = new Date()
    useEffect(()=> {

        dbService.collection('userInfo').onSnapshot(snapshot => {
            const userArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setUserChat(userArray)
        })
        const user = authService.currentUser;
        if (user) {
            setUsers(userChat.length)
        } 
        if (writeObj.creatorId === userObj.email) {
            setIsUser(true)
            setUsers(userChat.length-1)
            // setUsers(data)
        } else {
            setIsUser(false)
            setUsers(userChat.length-1)
        }
        if (userChat.length === 0) {
            setNotUsers(true)
        } else {
            setNotUsers(false)
        }
    }, [])
    const onDeleteClick = async()=> {
        const ok = window.confirm(`정말로 삭제하시겠습니까?`)
        if (ok) {
            await dbService.doc(`user/${writeObj.id}`).delete()
        }
    }
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    }
    const onSubmit = (event)=> {
        event.preventDefault();
    }
    const onClick = async () => {
        if (newWrite !== writeObj.text) {
          await dbService.doc(`user/${writeObj.id}`).update({
            text: newWrite,
          });
        }
        setEditing(false);
    };
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNewWrite(value);
    };
    return (
        <div>
            {
                editing ? (
                    <div className={isUser ? 'isUser' : 'notUser'}>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder="수정하세요" value={newWrite} required onChange={onChange} />
                            <button onClick={onClick}>게시</button>
                        </form>
                        <button onClick={toggleEditing}>Cancel</button>
                    </div>
                ) : (
                    <div className={isUser ? 'isUser' : 'notUser'}>
                       {isUser ? (
                            <div className='Chat2-user'>
                                <div className='time-is-users'>
                                    {notUsers ? (
                                        <>
                                            <span></span>
                                            <span>{writeObj.newTime} {writeObj.time}</span>
                                        </>
                                    ) : (
                                        <>
                                            {/* <span>{users}</span> */}
                                            <span>{writeObj.newTime} {writeObj.time}</span>
                                        </>
                                    )}
                                </div>
                                <div className='chat-border'>
                                    <p className='chatUser'>{writeObj.text}</p>
                                </div>
                            </div> 
                       ) : (
                            <div className='Chat2-not-user'>
                                <div className='chat-border-not-user'>
                                    <p className='chatUser'>{writeObj.text}</p>
                                </div>
                                <div className='time-not-users'>
                                    {notUsers ? (
                                        <>
                                            <span></span>
                                            <span>{writeObj.newTime} {writeObj.time}</span>
                                        </>
                                    ) : (
                                        <>
                                            {/* <span>{users}</span> */}
                                            <span>{writeObj.newTime} {writeObj.time}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                       )}
                        {isOwner && (
                            <div>
                                <button onClick={toggleEditing}>수정</button>
                                <button onClick={onDeleteClick}>삭제</button>
                            </div>
                        )}
                    </div>
                )
            }
        </div>
    );
}

export default WriteButton;