import React from "react";

export default function(props) {
    return(
        <div className="date-container">
            <p>Date
                {new Date().getDate()}
            </p>
        </div>
    )
}