import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { dbService } from '../fbase'
import styled from 'styled-components';
import WriteButton from './WriteButton';
import "../css/comunity.css"

const  Comunity = ({userObj})=> {
    const [write, setWrite] = useState("")
    const [writes, setWrites] = useState([])
    const date = new Date()
    const AmOrPm = parseInt(date.getHours()) <= 12 ? '오전' : '오후'
    const min = String(date.getMinutes()).padStart(2, "0")
    const hours = (parseInt(date.getHours())%12)||12;
    useEffect(()=> {
        dbService.collection('user').onSnapshot(snapshot => {
            const writeArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setWrites(writeArray)
            
        })
    }, [write])
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
            newTime: AmOrPm,
            createdAt: Date.now(),
            time: `${hours}:${min}`,
            creatorId: userObj.email
        })
        console.log(write)
        setWrite("")
    }

    return (
        // textarea 최대 42글자까지 가능하게 만들기
        // 만약 40자가 넘으면 저절로 줄바꿈 처리
        <div>
            <div className='comunity'>
                <StyledAllwaysScrollSection>
                    <div>
                        {writes.sort((a,b) => a.createdAt - b.createdAt).map((write)=> (
                            <WriteButton userObj={userObj} key={write.id} writeObj={write} isOwner={write.creatorId === userObj.email} />
                        ))}
                    </div>
                </StyledAllwaysScrollSection>
            </div>
            <form onSubmit={onSubmit}>
                <textarea className='Chat' rows={1} value={write} onChange={onChange} type='text' placeholder='작성해주세요' maxLength={200} />
                <button className='Chat' onClick={onClick}>작성</button>
            </form>
        </div>
    );
}
const StyledAllwaysScrollSection = styled.div`
    overflow: scroll;
    height: 500px;
    width: 400px;
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