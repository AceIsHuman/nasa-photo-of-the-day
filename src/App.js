import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import TopBar from "./components/TopBar";
import APOD from "./components/APOD/APOD";


function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ViN1Jyw6VtqDScggUaXdY3SxR3hwhRKmWEFwZaQP')
      .then(res => setData(res.data))
  }, []);

  return (
    <div className="App">
      <TopBar />
      <APOD data={data}/>
    </div>
  );
}

export default App;
