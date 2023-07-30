// src/Page1.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Page1 = () => {
  const dispatch = useDispatch();
  const history = useHistory(); // Initialize useHistory

  const handleEnrollClick = () => {
    dispatch({ type: 'SET_NAME', payload: '' });
    dispatch({ type: 'SET_AGE', payload: null });
    history.push('/Page2'); // Navigate to Page2 after clicking "Enroll Now"
  };

  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <button onClick={handleEnrollClick}>Enroll Now!</button>
    </div>
  );
};

export default Page1;
