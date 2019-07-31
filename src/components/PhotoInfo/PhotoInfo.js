import React from "react";
import Date from "./Date";

export default function(props) {
    return (
        <div className="photo-info">
            <Date date={props.date} setDate={props.setDate} />
        </div>
    )
}