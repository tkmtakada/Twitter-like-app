import React from 'react';

const Tweet = (props) => {
    return (
        <div className="tweetsContainer">
            <div className="tweetsHeader">
                <div className="userName">{props.userName}</div>
                <div className="userId">{props.userId}</div>
            </div>
            <div className="tweetsContent">{props.text}</div>
        </div>
    );
};

export default Tweet