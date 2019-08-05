import React, { useState, useEffect } from "react";
import axios from "axios";


export default function(props) {
    const [data, setData] = useState('');
    // const data = props.data;

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP&date=${props.date}`)
          .then(res => setData(res.data))
      }, []);

    return(
        <div>
            <img
                src={data.url} alt={data.title} 
                style={
                    { maxWidth: "30rem", height: "auto", }
                }/>
            <h3>{data.title}</h3>
        </div>
    )
}