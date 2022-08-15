import React, {useState, useEffect} from 'react';

const postNewTweet = async (tweetText) => {
    // 整形
    const tweetData = {
        id:8,
        userName: 'me',
        userId: 'userIdMe',
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
        window.alert('your tweet has been successfully published!');
    } catch (error) {
        window.alert("We couldnt post your tweet.");
        console.log(error);
    }
    
};

const TweetForm = () => {

    const [tweetText, setTweetText] = useState("");

    // handle push button action
    // newTweetTextを送信する？
    const handleClick = () => {
        // window.alert(`You gonna tweet ${tweetText}`);
        // json serverに送信
        postNewTweet(tweetText);
    };

    // handle textArea change
    // 内容を、setTweetTextを使ってtweetTextに反映させていく？
    const handleTextAreaChange = (e) => {
        setTweetText(e.target.value);
    };

    return (
        <div className="tweetFormContainer">
            <div>
                <textarea onChange={handleTextAreaChange} />
            </div>
            <button onClick={handleClick}>
                送信                
            </button>
        </div>
    );
};

export default TweetForm;