import React, { useState } from "react";
import Image from "./Image";
import PhotoInfo from "./PhotoInfo";

export default function(props) {
    const data = props.data;
    const [date, setDate] = useState(data.date);
    
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