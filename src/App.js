import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[data, setData] = useState();
  const clickedButton = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
     hello khushal, test-1
     <br></br>
     <button onClick={clickedButton}>click me</button>
     <button onClick={()=> setData()}>clear</button>
     {data && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Result:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
