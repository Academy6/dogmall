import React, { Component } from 'react';

const WriteButton = ({ writeObj, isOwner })=> {
    return (
        <div>
            <h4>{writeObj.text}</h4>
            {isOwner && (
            <>
                <button>Delete Nweet</button>
                <button>Edit Nweet</button>
            </>
            )}
        </div>
    );
}

export default WriteButton;