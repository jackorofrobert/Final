import React, { useState, useEffect } from "react";
import "../css/VNClock.css";

function VNClock() {
  const [currentTime, setCurrentTime] = useState(getInitialTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getVNTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span id="vnclock">{currentTime}</span>;
}

const getInitialTime = () => getVNTime(new Date());

const getVNTime = (dateObject) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[dateObject.getMonth()];

  const year = dateObject.getFullYear();
  const dayOfMonth = dateObject.getDate();

  const hr = padZero(dateObject.getHours());
  const min = padZero(dateObject.getMinutes());
  const sec = padZero(dateObject.getSeconds());

  const formattedTime = `${month} ${dayOfMonth}, ${year} ${hr}:${min}:${sec}`;

  return formattedTime;
};

const padZero = (num) => {
  return num < 10 ? "0" + num : num;
};

export default VNClock;
