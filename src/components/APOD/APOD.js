import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Grid , Segment } from 'semantic-ui-react';

import Image from "./Image";
import PhotoInfo from "./PhotoInfo";

export default function(props) {
    const [data, setData] = useState('');
    const [date, setDate] = useState(data.date);

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP')
        .then(res => setData(res.data))
    }, []);
  
    
    return (
        <Segment>
            <Grid columns={2} verticalAlign='middle'>
                <Grid.Column centered>
                    <Image imgURL={data.url} title={data.title} />
                </Grid.Column>
                <Grid.Column centered>
                    <PhotoInfo date={date} setDate={setDate} title={data.title} copyright={data.copyright} explanation={data.explanation} />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}