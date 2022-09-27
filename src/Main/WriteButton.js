import React, { Component } from 'react';

const WriteButton = ({ writeObj, isOnwer })=> {
    return (
        <div>
            <h4>{rweetObj.text}</h4>
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