// CountdownForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDateTimeContainer = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #fff;
  outline: none;
  width: 190px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

const ErrorText = styled.p`
  color: purple;
  font-weight: bold;
`;

function CountdownForm({ setTargetDate, timerStarted }) {
  const [inputDate, setInputDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(inputDate);
    const currentDate = new Date();

    if (selectedDate - currentDate > 100 * 24 * 60 * 60 * 1000) {
      setError('Selected Time is More than 100 days');
    } else {
      setError('');
      setTargetDate(selectedDate);
    }
  };

  const handleCancel = () => {
    setError('');
    setInputDate('');
    setTargetDate(null); // Stop the countdown
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDateTimeContainer>
        <StyledInput
          type="datetime-local"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          required
          disabled={timerStarted}
        />
      </StyledDateTimeContainer>
      {!timerStarted && <StyledButton type="submit">Start Timer</StyledButton>}
      {timerStarted && <StyledButton type="button" onClick={handleCancel}>Cancel Timer</StyledButton>}
      {error && <ErrorText>{error}</ErrorText>}
    </StyledForm>
  );
}

export default CountdownForm;
