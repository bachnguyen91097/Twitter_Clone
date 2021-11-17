import React from "react";
import APIExamples from "./APIExamples";
import {Link} from "react-router-dom";



const A8Practice = () => {
    return (
        <div>
            <h2>
                Assignment 8
            </h2>
            <Link to="/a8/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a8/twitter/home">
                Home
            </Link> | &nbsp;
            <Link to="/a8/twitter/profile">
                Profile
            </Link>
            <h1>Practice</h1>
            <APIExamples/>
        </div>

    )
};

export default A8Practice;