import posts from './data/tweets.json';

const initialState = {
    tweets: posts
}

const tweets = (state = initialState, action) => {
    switch (action.type) {
        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });
            break;
        case 'delete-tweet':
            return ({
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            })
            break;
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Chipmunk",
                "verified": false,
                "handle": "just_a_chip_munk",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images2/chipmunk.jpeg",
                "logo-image": "../../../images2/chipmunk.jpeg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            state = {
                ...state,
                tweets: [
                    tweet,
                    ...state.tweets
                ]
            }
            return (state);
            break;
        default:
            return(state);
    }

};

export default tweets;