import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid , Segment } from 'semantic-ui-react';

import Image from "./Image";
import Information from "./Information";

export default function() {
    const [data, setData] = useState('');
    const [date, setDate] = useState(data.date);

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP')
        .then(res => setData(res.data))
        .catch(err => window.alert(`Failed to load APOD from NASA API.\n${err.message}`))
    }, []);

    return (
        <Segment>
            <Grid columns={2} verticalAlign='middle'>
                <Grid.Row centered>
                    <Image imgURL={data.url} title={data.title} />
                    <Information date={date} setDate={setDate} title={data.title} copyright={data.copyright} explanation={data.explanation} />
                </Grid.Row>
            </Grid>
        </Segment>
    )
}