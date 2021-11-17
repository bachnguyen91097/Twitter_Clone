import React, {useEffect} from "react";
import TweetListItem from "./TweetListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../../../services/twitterService";


const selectAllTweets = (state) => state.tweets.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), []);

    return(
        <ul className="list-group">
            {
        tweets.map(tweet =>
            <TweetListItem tweet={tweet}/>
        )
    }
        </ul>
    )
};
export default TweetList;