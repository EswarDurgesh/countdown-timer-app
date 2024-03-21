// App.js
import React, { useState } from 'react';
import {
  CountdownContainer,
  CountdownHeading,
  CountdownContent,
  RectangularBoxes,
  RectangularBox,
  Label,
  Value,
} from './components/CountdownStyles';
import CountdownForm from './components/CountdownForm';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const [targetDate, setTargetDate] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleStartTimer = (date) => {
    setTargetDate(date);
    setTimerStarted(true);
  };

  return (
    <CountdownContainer className="homepage">
    <CountdownHeading>
    Countdown <span style={{ color: 'purple' }}>Timer</span>
  </CountdownHeading>
        <CountdownContent>
        <CountdownForm setTargetDate={handleStartTimer} timerStarted={timerStarted} />
        {timerStarted && <CountdownTimer targetDate={targetDate} />}
      </CountdownContent>
    </CountdownContainer>
  );
}

export default App;
