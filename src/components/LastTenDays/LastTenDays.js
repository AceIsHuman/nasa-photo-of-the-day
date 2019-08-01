import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";

import ImageCard from "./ImageCard";

export default function() {
    const [data, setData] = useState('');
    let year = '2019';
    let month = '07';
    let day = '29';

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP&date=${year}-${month}-${day}`)
        .then(res => setData(res.data))
    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap",justifyContent: "space-around"}}>
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
            <ImageCard data={data} />
        </div>
    )
}