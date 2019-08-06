import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";

import ImageCard from "./ImageCard";

export default function() {
    const [data, setData] = useState('');

    function reduceDate(date) {
        const stringSplit = date.split('-');
        const dateSplit = stringSplit.map(num => parseInt(num))
        let [year, month, day] = [dateSplit[0], dateSplit[1], dateSplit[2]];
      
        function n(n){
          return n > 9 ? "" + n: "0" + n;
        }
      
        if (month === 1 && day === 1) { year--; month = 12; day = 31 }
        else if (month === 3 && day === 1) {month--; day = 28}
        else if (month < 9 && month % 2 === 1 && day === 1) {month--; day = 30}
        else if (month < 9 && month % 2 === 0 && day === 1) {month--; day = 31}
        else if (month > 8 && month % 2 === 1 && day === 1) {month--; day = 31}
        else if (month > 8 && month % 2 === 0 && day === 1) {month--; day = 30}
      
        else if (day > 1) {day--} 
      
        month = n(month); day = n(day);
      
        return `${year}-${month}-${day}`;
      }

    const moment = require('moment');
    let startDate = moment().format('YYYY-MM-DD');
    const lastTenDays = [];

    for (let i = 0; i < 10; i++) {
        lastTenDays.push(reduceDate(startDate));
        startDate = reduceDate(startDate);
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap",justifyContent: "space-around"}}>
            {lastTenDays.map(date => <ImageCard date={date} />)}
        </div>
    )
}