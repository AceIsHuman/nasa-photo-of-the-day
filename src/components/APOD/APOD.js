import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <section 
            className="apod-container"
            style={
                {display: "flex",}
            }>
            <Image imgURL={data.url} title={data.title} />
            <PhotoInfo date={date} setDate={setDate} title={data.title} copyright={data.copyright} explanation={data.explanation} />
        </section>
    )
}