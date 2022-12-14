import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const a = {
  a: 1,
  b: 2,
  c: 1,
  d: 1,
  e: 1,
  f: 1,
  g: 1,
};
console.log(a);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count1) => count1 + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <button
        className={'1111'} disabled
        style={{ width: 300, height: 500, border: '1px solid red' }}
      />
      <div />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default App;
