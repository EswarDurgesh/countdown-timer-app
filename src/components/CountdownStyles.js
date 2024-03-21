// CountdownStyles.js
import styled from 'styled-components';

const CountdownContainer = styled.div`
  background: linear-gradient(to bottom left, #007bff, #800080); /* Blue to purple gradient */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CountdownHeading = styled.h1`
  font-size: 36px;
  color: #fff;
  margin-bottom: 20px;
`;

const CountdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RectangularBoxes = styled.div`
  display: flex;
  justify-content: space-around; /* Adjusted to evenly distribute boxes */
  margin-top: 20px;
  padding: 10px; /* Add padding around the rectangular boxes */
  flex-wrap: nowrap; /* Prevent boxes from wrapping to a new row */
`;

const RectangularBox = styled.div`
  background: linear-gradient(to bottom left, #007bff, #800080); /* Blue to purple gradient */
  color: #fff;
  padding: 20px;
  border-radius: 10px; /* Increased border-radius for a more stylish look */
  text-align: center;
  width: 80px; /* Adjust width as needed */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add shadow for a stylish effect */
  margin: 0 10px; /* Add margin between each rectangular box */
`;


const Label = styled.p`
  font-size: 14px; /* Label font size */
  color: #fff;
  margin-bottom: 5px;
`;

const Value = styled.span`
  font-size: 24px; /* Value font size */
  color: #fff;
`;

export {
  CountdownContainer,
  CountdownHeading,
  CountdownContent,
  RectangularBoxes,
  RectangularBox,
  Label,
  Value,
};
