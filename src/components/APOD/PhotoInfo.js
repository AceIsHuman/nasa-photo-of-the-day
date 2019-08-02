import React from "react";
import Date from "./Date";
import Information from "./Information";

export default function(props) {
    return (
        <div className="photo-info">
            <Information copyright={props.copyright} title={props.title} explanation={props.explanation} />
            <Date date={props.date} setDate={props.setDate} />
        </div>
    )
}