import React, { useState } from 'react';
import Counter from './components/Counter';
import NewInfo from './components/NewInfo';
import CotnextSample from './components/ContextSample';
import Average from './components/Average';
import UsePromiseSample from './components/UsePromiseSample';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <button onClick={() => { setVisible(!visible) }}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <NewInfo />}
      <CotnextSample />
      <Average />
      <hr />
      <UsePromiseSample />
    </div>
  );
};

export default App;
