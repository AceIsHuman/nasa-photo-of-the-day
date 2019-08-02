import React from "react";
import { Container } from "semantic-ui-react";

export default function(props) {
    return(
        <Container text>
            <h2>{props.title}</h2>
            <h3>Copyright: {props.copyright}</h3>
            <p>Explanation: {props.explanation}</p>
        </Container>
    )
}