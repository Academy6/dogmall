import React, { Component } from 'react';

const  Writing = ()=> {
    return (
        <div>
            <textarea maxLength={200} rows={8} cols={20} />
            <div><button>글쓰기</button></div>
        </div>
    );
}

export default  Writing;