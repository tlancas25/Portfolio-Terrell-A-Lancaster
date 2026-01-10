'use client';

import { useEffect, useState } from 'react';

export function TacticalOverlay() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.getHours().toString().padStart(2, '0') + ":" + 
                      now.getMinutes().toString().padStart(2, '0') + ":" + 
                      now.getSeconds().toString().padStart(2, '0');
      setTime(timeStr);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Scanline Effect */}
      <div className="scanline" aria-hidden="true" />
      
      {/* Glitch Overlay */}
      <div className="glitch-overlay" aria-hidden="true" />
      
      {/* Coordinate Display */}
      <div className="coord-display" aria-hidden="true">
        <div className="mb-1">SYS_TIME: {time}</div>
        <div>LAT: 36.1699° N</div>
        <div>LONG: 115.1398° W</div>
        <div>ALT: 610m MSL</div>
        <div className="mt-1 text-accent">VECTOR: [NOMINAL]</div>
      </div>
    </>
  );
}
