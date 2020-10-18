//write JSX to render the html style and event listeners

import React from "react";
import "./style.css";

export function Search(props) {
    return <div style={{
        margin: "20px",
        position: "fixed",
        top: "50%",
        left: "50%"
    }}>
        <input type="search" placeholder="Search User" onChange = {
            event => props.handleInputChange(event.target.value)
        }>

        </input>
    </div>
}