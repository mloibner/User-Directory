//write JSX to render the html style and event listeners

import React from "react";

export function Search(props) {
    return <div>
        <input type="search" onChange = {
            event => props.handleInputChange(event.target.value)
        }>

        </input>
    </div>
}