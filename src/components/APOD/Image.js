import React from "react";
import { Image } from "semantic-ui-react";

export default function(props) {
    return(
        <Image src={props.imgURL} alt={props.title} size="large" rounded centered/>
    )
}