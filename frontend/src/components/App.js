import React, {useState, useEffect} from 'react';
import TweetWall from './TweetWall';

const App = () => {
    // tweetsをfetchしてくる必要あり
    // しかも、renderingされる時毎回、最新のデータに更新したい
    const [tweets, setTweets] = useState([]);

    const getLatestTweets = async () => {
        try {
            const response = await window.fetch('http://localhost:8080/tweets');
            if(!response.ok) throw new Error(`error... ${response.status}`);
            const responseBody = await response.json();            
            setTweets(responseBody);            
        } catch (error) {
            window.alert('failed to get tweets');
            console.log(error);
        };
    };

    useEffect(()=>{
        // tweetを取得して　setTweetsまで行う
        getLatestTweets();        
    }, []);


    return (
        <TweetWall tweets={tweets}/>        
    );
};

export default App;

/*
const tweets = [
    {userName: 'taro',
    userId : 'useIdtaro',
    text: 'I am hungry'
    },
    {userName: 'jiro',
    userId : 'useIdjiro',
    text: 'I ate pie'
    },
    {userName: 'saburo',
    userId : 'useIdsaburo',
    text: 'I had a pudding just now.'
    },    
    {userName: 'jiro',
    userId : 'useIdjiro',
    text: 'What? thats mine'
    },
];
*/