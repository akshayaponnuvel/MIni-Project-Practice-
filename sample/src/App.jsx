import React, { useState } from 'react';

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState('');

  const handleButtonClick = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setCurrentTime(timeString);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: 'lavender',
          border: 'none',
          color: 'black',
          padding: '10px 24px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        What's the time now?
      </button>
      <p>Time: {currentTime}</p>
    </div>
  );
}

export default TimeDisplay;
