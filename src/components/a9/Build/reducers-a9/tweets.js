// import posts from './data/tweets.json';

const initialState = {
    tweets: []
}

const tweets = (state = initialState, action) => {

    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;
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
            state = {
                ...state,
                tweets: [
                    action.tweet,
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
