import React from "react";

export default function(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>Copyright: {props.copyright}</h3>
            <p>Explanation: {props.explanation}</p>
        </div>
    )
}