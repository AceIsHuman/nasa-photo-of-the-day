import React from "react";

export default function(props) {
    return(
        <img src={props.imgURL} alt={props.title} 
            style={
                { maxWidth: "30rem", height: "auto", }
            }/>
    )
}