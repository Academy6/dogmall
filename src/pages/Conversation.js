import React, { Component, useState } from 'react';
import { dbService, storageService } from '../fbase';

const Conversation = ()=> {
    const [comment, setComment] = useState('')

    const onChange = (event)=> {
       const {target: {value}} = event
       setComment(value)
    }
    const onClick = ()=> {
        console.log(comment)
    }
    
    return (
        <div>
            <form>
                <input value={comment} onChange={onChange} placeholder='내용 입력' />
            </form>
            <button onClick={onClick}>버튼</button>
        </div>
    );
} 

export default Conversation;