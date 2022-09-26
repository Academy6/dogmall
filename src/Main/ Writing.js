import { async } from '@firebase/util';
import React, { Component } from 'react';
import { useState } from 'react';
import { dbService } from '../fbase'

const  Writing = ()=> {
    const [write, setWrite] = useState('')

    const onSubmit = (e)=> {
        e.preventDefault();
    }
    const onChange = (event)=> {
        const {target : {value}} = event
        setWrite(value)
    }
    const onClick = async(event)=> {
        const db = dbService
        console.log(write)
        await db.collection('write').add({
            write,
            createdAt: Date.now()
        })
        setWrite('')
        db.collection('write').get().then((write)=> {
            write.forEach((doc)=> {
                console.log(doc.data())
            })
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={write} onChange={onChange} type='text' placeholder='작성해주세요' maxLength={200} />
                <button onClick={onClick}>작성</button>
            </form>
        </div>
    );
}

export default  Writing;