import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { dbService } from '../fbase'
import { v4 as uuidv4 } from 'react-uuid'

const  Writing = ( {userObj} )=> {
    const [write, setWrite] = useState('')
    const [writes, setWrites] = useState([])

    useEffect(()=> {
        dbService.collection('user').onSnapshot(snapshot => {
            const writeArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setWrites(writeArray)
        })
    }, [])

    const onSubmit = (e)=> {
        e.preventDefault();
    }
    const onChange = (event)=> {
        const {target : {value}} = event
        setWrite(value)
    }
    const onClick = async()=> {
        const db = dbService
        console.log(write)
        await db.collection('user').add({
            text: write,
            createdAt: Date.now(),
            creatorId: userObj.uid
        })
        setWrite('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={write} onChange={onChange} type='text' placeholder='작성해주세요' maxLength={200} />
                <button onClick={onClick}>작성</button>
            </form>
            <div>
                {writes.map((write)=> {
                    <div key={write.id}>
                        <h4>{write.write}</h4>
                    </div>
                })}
            </div>
        </div>
    );
}

export default  Writing;