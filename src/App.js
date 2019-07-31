import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import TopBar from "./components/TopBar";
import PhotoInfo from "./components/PhotoInfo/PhotoInfo";


function App() {

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP')
      .then(res => console.log(res.data))
  }, []);

  return (
    <div className="App">
      <TopBar />
      <section className="apod-container">
        
        <PhotoInfo />
      </section>
    </div>
  );
}

export default App;
