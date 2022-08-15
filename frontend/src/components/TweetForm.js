import React, {useState, useEffect, useContext} from 'react';
import { TweetCounter } from './App';

const postNewTweet = async (tweetText) => {
    // 整形
    const tweetData = {
        // id: 5,
        userName: 'たくみ',
        userId: '@tenshokugachizei',
        text: tweetText
    };

    // push option
    fetchOption = {
        method: 'POST',
        body: JSON.stringify(tweetData),
        headers: {'Content-Type' : 'application/json'}
    };

    // try to push the message!
    try {
        const response = await window.fetch(
            'http://localhost:8080/tweets',
            fetchOption);
        if (!response.ok) throw new Error(`error... ${response.status}`);
        // window.alert('your tweet has been successfully published!');
        console.log('your tweet has beeen posted!')
    } catch (error) {
        window.alert("We couldnt post your tweet.");
        console.log(error);
    }
    
};

const TweetForm = () => {

    const [tweetText, setTweetText] = useState("");
    const [tweetCounter, setTweetCounter] = useContext(TweetCounter);

    // handle push button action
    // newTweetTextを送信する？
    const handleClick = (e) => {
        // window.alert(`You gonna tweet ${tweetText}`);
        // json serverに送信
        postNewTweet(tweetText);
        setTweetCounter(tweetCounter+1);
        const tweetForm = document.getElementById('tweetForm');
        tweetForm.value = '';
    };

    // handle textArea change
    // 内容を、setTweetTextを使ってtweetTextに反映させていく？
    const handleTextAreaChange = (e) => {
        setTweetText(e.target.value);
    };

    return (
        <div className="tweetFormContainer">
            <div>
                <textarea onChange={handleTextAreaChange} className="editArea" id="tweetForm" />
            </div>
            <div className="tweetButtonContainer">
                <button onClick={handleClick}>
                    ついーとする                
                </button>
            </div>
        </div>
    );
};

export default TweetForm;