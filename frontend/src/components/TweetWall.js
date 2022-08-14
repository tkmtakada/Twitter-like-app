import React from 'react';
import Tweet from './Tweet'

const TweetWall = (props) => {
    return (
        <div className="tweetWallContainer">
            <div className="wallTitle">Solotter</div>
            {props.tweets.map( (tweet, idx) => {
                return (<Tweet userName={tweet.userName}
                                userId={tweet.userId}
                                text={tweet.text} />)
            })}            
        </div>
    );
};

export default TweetWall;