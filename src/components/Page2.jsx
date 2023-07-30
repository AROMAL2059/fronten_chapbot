// src/Page2.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chatbot } from 'react-chatbot-kit';
import { useHistory } from 'react-router-dom';

import { config, actionProvider, messageParser } from '../Chatbot';

const Page2 = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const [showMessage, setShowMessage] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleGotItClick = () => {
    setShowMessage(false);
  };

  const handleNameSubmit = (name) => {
    dispatch({ type: 'SET_NAME', payload: name });
  };

  const handleAgeSubmit = (age) => {
    dispatch({ type: 'SET_AGE', payload: age });

    // Wait for 5 seconds before navigating to Page3
    setTimeout(() => {
      history.push('/page3');
    }, 5000);
  };

  return (
    <div>
      {showMessage && (
        <div>
          <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider} />
          <button onClick={handleGotItClick}>Got it!</button>
        </div>
      )}
      {!showMessage && (
        <div>
          <h3>Hello, Welcome to student info system!</h3>
          <label>Enter your Name</label>
          <input type="text" onChange={(e) => handleNameSubmit(e.target.value)} />
          <br />
          <label>Enter your Age</label>
          <select onChange={(e) => handleAgeSubmit(e.target.value)}>
            <option value="">Select Age</option>
            {Array.from({ length: 23 }, (_, i) => i + 18).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Page2;
