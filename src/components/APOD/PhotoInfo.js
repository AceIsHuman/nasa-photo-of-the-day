import React from "react";
import Date from "./Date";
import Information from "./Information";

export default function(props) {
    return (
        <div className="photo-info">
            <Date date={props.date} setDate={props.setDate} />
            <Information copyright={props.copyright} title={props.title} explanation={props.explanation} />
        </div>
    )
}