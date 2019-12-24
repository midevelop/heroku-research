import React from 'react';
import './App.css';


async function test () {
  const resp = await fetch("/api")
  console.log(resp)

}
function App() {
  return (
    <div className="App">My header
    <button onClick={test}>send fetch</button>
    </div>
  );
}

export default App;
