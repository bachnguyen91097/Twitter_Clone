import React from "react";
import ExploreScreen from "./ExploreScreen";
import {Route} from "react-router-dom";
import who from "./reducer-a7/who";
import tweets from "./reducer-a7/tweets";
import profile from "./reducer-a7/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./ProfileScreen";
import A7HomeScreen from "./HomeScreen";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store = {store}>
            <div>
                <Route path="/a7/twitter/home"
                       exact={true} component={A7HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a7/twitter/profile"
                       exact={true} component={ProfileScreen}/>
            </div>
        </Provider>
    );
};
export default Build;

