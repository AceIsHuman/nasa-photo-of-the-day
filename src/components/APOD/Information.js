import React from "react";
import { Container, Header } from "semantic-ui-react";

export default function(props) {
    return(
        <Container text textAlign="left" style={{ marginTop: '1rem' }}>
            <Header as='h2'>{props.title}</Header>
            <Header as='h3'>{props.copyright ? `Copyright: ${props.copyright}` : 'This Photo is Public Domain'}</Header>
            <p>{props.explanation}</p>
        </Container>
    )
}