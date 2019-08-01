import React from "react";

export default function(props) {
    const data = props.data;
    console.log(props.data);

    return(
        <div>
            <img
                src={data.url} alt={data.title} 
                style={
                    { maxWidth: "30rem", height: "auto", }
                }/>
            <h3>{data.title}</h3>
        </div>
    )
}