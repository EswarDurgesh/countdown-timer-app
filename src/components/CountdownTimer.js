// CountdownTimer.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledRectangularBoxes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 10px;
  flex-wrap: nowrap;
`;

const StyledRectangularBox = styled.div`
  background: linear-gradient(to bottom left, #007bff, #800080);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0 10px;
`;

const StyledLabel = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
`;

const StyledValue = styled.span`
  font-size: 24px;
  color: #fff;
`;



const StyledMessage = styled.div`
  color: #800080;
  font-weight: bold;
  font-size:24px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const CelebrationEmojis = styled.span`
  margin-left: 10px;
`;


function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [countdownComplete, setCountdownComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
      if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        setCountdownComplete(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {countdownComplete ? (
        <StyledMessage >The Countdown is over! What's next on your Adventure</StyledMessage>
      ) : (
        <StyledRectangularBoxes>
          <StyledRectangularBox>
            <StyledLabel>Days</StyledLabel>
            <StyledValue>{timeLeft.days}</StyledValue>
          </StyledRectangularBox>
          <StyledRectangularBox>
            <StyledLabel>Hours</StyledLabel>
            <StyledValue>{timeLeft.hours}</StyledValue>
          </StyledRectangularBox>
          <StyledRectangularBox>
            <StyledLabel>Minutes</StyledLabel>
            <StyledValue>{timeLeft.minutes}</StyledValue>
          </StyledRectangularBox>
          <StyledRectangularBox>
            <StyledLabel>Seconds</StyledLabel>
            <StyledValue>{timeLeft.seconds}</StyledValue>
          </StyledRectangularBox>
        </StyledRectangularBoxes>
      )}
    </>
  );
}

export default CountdownTimer;
