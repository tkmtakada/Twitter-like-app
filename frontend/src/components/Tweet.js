import React from 'react';

const Tweet = (props) => {
    return (
        <div className="tweetsContainer">
            <h2>{props.userName}</h2>
            <h2>{props.userId}</h2>
            <h2>{props.text}</h2>
        </div>
    );
};

export default Tweet