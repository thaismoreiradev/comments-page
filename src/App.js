import React from 'react';
import './App.css';
import { TbMessageHeart } from 'react-icons/tb';

function App() {
  return (
    <div className='container'>
      <TbMessageHeart/>
      <h1>Send your comment</h1>
      <input></input>
      <button>SEND</button>
      <ul>
        <li>comment 1</li>
        <li>comment 2</li>
      </ul>
    
    </div>
  );
}

export default App;
