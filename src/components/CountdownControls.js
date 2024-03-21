// CountdownControls.js
import React from 'react';

function CountdownControls({ setCountdownPaused, resetTimer, countdownPaused }) {
  return (
    <div className="countdown-controls">
      <button className="control-btn" onClick={() => setCountdownPaused(!countdownPaused)}>
        {countdownPaused ? 'Resume' : 'Pause'}
      </button>
      <button className="control-btn" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default CountdownControls;
