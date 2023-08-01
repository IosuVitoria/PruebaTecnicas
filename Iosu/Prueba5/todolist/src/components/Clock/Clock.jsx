import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedTime = format(time, "EEEE, d MMMM yyyy HH:mm:ss", { locale: esLocale });

  return (
    <div className="clock-container">
      <p>{formattedTime}</p>
    </div>
  );
}

export default Clock;

