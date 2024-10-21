import React, { useState, useEffect } from 'react';
import "../index.css"; 

const Day = () => {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  let curDate = new Date();
  curDate = curDate.getHours();  

  let greeting = '';
  const cssStyle = {};  

  // Update greeting based on the time of day
  if (curDate >= 1 && curDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green'; 
  }
  else if (curDate >= 12 && curDate < 17) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';  
  } 
  else if (curDate >= 17 && curDate < 21) {
    greeting = 'Good Evening';
    cssStyle.color = 'gray';  
  } 
  else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
  }

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <h1>Hello, <span style={cssStyle}>{greeting}</span></h1>
      <p>Today's date is: <span>{dateTime.date}</span></p>
      <p>Current time is: <span>{dateTime.time}</span></p>
    </div>
  );
}

export default Day;
