import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import { PORT } from '../../.env';

import { messages } from './messages';

// const PORT = process.env.PORT;

function App() {
  const fetchAPI = async () => {
    // TODO: make port 3000 a variable from process.env
    try {
      const response = await axios.get('http://localhost:3000/api');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Mini Messaging App</h1>
      <div className='messagesCtn'>{/* <div>{messages}</div> */}</div>
    </>
  );
}

export default App;
