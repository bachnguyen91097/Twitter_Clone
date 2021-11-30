import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";



const A9Practice = () => {
    return (
        <div>
            <h2>
                Assignment 9
            </h2>
            <Link to="/a9/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a9/twitter/home">
                Home
            </Link> | &nbsp;
            <Link to="/a9/twitter/profile">
                Profile
            </Link>
            <h1>Practice</h1>
            <Movies/>
        </div>

    )
};

export default A9Practice;