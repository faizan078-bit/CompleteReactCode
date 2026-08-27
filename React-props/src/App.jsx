import React, { useState } from 'react'
import Greeting from './Greeting';
export default function App() {
    // let age = 22
    let[name, setName] = useState("Aishwarya")
    const[count, setCount] = useState(0)
    const update = () => {
        setName("Chandan");
    }

    let Inc = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <h1>Welcome to {name}</h1>
      <Greeting name = "Aishwarya" age = {age}/>
      <button onClick={update}>change Name</button>
      <br></br>
      <button onClick={Inc}>Count is {count}</button>
    </div>
  );
}

