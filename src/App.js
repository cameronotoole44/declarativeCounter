import './App.css';

import React, { useState } from 'react';

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
      <button onClick={() => changeCounter(counter + 1)}>+</button>
    </div>
  )
};

export default App;
