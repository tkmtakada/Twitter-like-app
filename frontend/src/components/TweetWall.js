import React from 'react';
import Tweet from './Tweet';
import TweetForm from './TweetForm';

const TweetWall = (props) => {
    return (
        <div className="tweetWallContainer">
            <div className="wallTitle">Solotter</div>
            {props.tweets.map( (tweet, idx) => {
                return (<Tweet key={idx}
                                userName={tweet.userName}
                                userId={tweet.userId}
                                text={tweet.text} />)
            })}
            <TweetForm />
        </div>
    );
};

export default TweetWall;