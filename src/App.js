import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import TopBar from "./components/TopBar";
import Image from "./components/Image";
import PhotoInfo from "./components/PhotoInfo/PhotoInfo";


function App() {
  const [data, setData] = useState('')
  const [date, setDate] = useState(data.date);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP')
      .then(res => setData(res.data))
  }, []);

  return (
    <div className="App">
      <TopBar />
      <section className="apod-container">
        <Image imgURL={data.url} title={data.title} />
        <PhotoInfo date={date} setDate={setDate} />
      </section>
    </div>
  );
}

export default App;
