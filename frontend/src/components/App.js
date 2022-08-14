import React from 'react';
import TweetWall from './TweetWall';

const App = () => {
    return (
        <TweetWall tweets={tweets}/>        
    );
};

export default App;

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
