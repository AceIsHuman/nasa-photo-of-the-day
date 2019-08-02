import React from "react";
import { Container } from "semantic-ui-react";

export default function(props) {
    return(
        <Container text textAlign="left" >
            <h2>{props.title}</h2>
            <h3>{props.copyright ? `Copyright: ${props.copyright}` : 'This Photo is Public Domain'}</h3>
            <p>{props.explanation}</p>
        </Container>
    )
}