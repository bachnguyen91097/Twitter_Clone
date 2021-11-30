import React from "react";
import {Route} from "react-router-dom";
import who from "./reducers-a9/who";
import tweets from "./reducers-a9/tweets";
import profile from "./reducers-a9/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import A8HomeScreen from "./HomeScreen";
import A8ExploreScreen from "./ExploreScreen";
import A8ProfileScreen from "./ProfileScreen";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const A9Build = () => {
    return(
        <Provider store = {store}>
            <div>
                <Route path="/a9/twitter/home"
                       exact={true} component={A8HomeScreen}/>
                <Route path="/a9/twitter/explore"
                       exact={true} component={A8ExploreScreen}/>
                <Route path="/a9/twitter/profile"
                       exact={true} component={A8ProfileScreen}/>
            </div>
        </Provider>
    );
};
export default A9Build;

