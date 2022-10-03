import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { dbService } from '../fbase'
import styled from 'styled-components';
import WriteButton from './WriteButton';
import "../css/comunity.css"
import { getTimeMeasureUtils } from '@reduxjs/toolkit/dist/utils';

const  Comunity = ({userObj})=> {
    const [write, setWrite] = useState("")
    const [writes, setWrites] = useState([])
    const [writeTime, setWriteTime] = useState("")
    const [getTime, setGetTime] = useState([])
    const date = new Date()

    useEffect(()=> {
        dbService.collection('user').onSnapshot(snapshot => {
            const writeArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setWrites(writeArray)
        })
    }, [])

    const time = ()=> {
        const min = String(date.getMinutes()).padStart(2, "0")
        const sec = String(date.getSeconds()).padStart(2, "0")
        setWriteTime(`${min}:${sec}`)
        setGetTime([...writeTime])
    }
    const onSubmit = (e)=> {
        e.preventDefault();
    }
    const onChange = (event)=> {
        const {target : {value}} = event
        setWrite(value)
    }
    const onClick = async()=> {
        const db = dbService
        await db.collection("user").add({ 
            text: write,
            createdAt: Date.now(),
            creatorId: userObj.email
        })
        setTimeout(time)
        setWrite("")
    }

    return (
        <div>
            <div className='comunity'>
                <StyledAllwaysScrollSection>
                    <div>
                        {writes.sort((a,b) => a.createdAt - b.createdAt).map((write)=> (
                            <WriteButton getTime={getTime} key={write.id} writeObj={write} isOwner={write.creatorId === userObj.email} />
                        ))}
                    </div>
                </StyledAllwaysScrollSection>
            </div>
            <form onSubmit={onSubmit}>
                <input value={write} onChange={onChange} type='text' placeholder='작성해주세요' maxLength={200} />
                <button onClick={onClick}>작성</button>
            </form>
        </div>
    );
}
const StyledAllwaysScrollSection = styled.div`
    overflow: scroll;
    height: 500px;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background-color: rgb(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`

export default  Comunity;