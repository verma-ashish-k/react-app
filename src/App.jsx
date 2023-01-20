import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useS
  tate(0);
  function increaseCount(amount) {
    setCount(count + amount);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        {count}
        <button onClick={() => increaseCount(1)}>Increase Count</button>
        <button onClick={() => increaseCount(-1)}>Decrease Count</button>
      </header>
    </div>
  );
}

export default App;
