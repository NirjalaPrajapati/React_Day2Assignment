import React, {useState} from "react";
const ClickCounter = (props) => {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 2);
    };
    return (
      <div>
        <h2>{props.title}</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
  export default ClickCounter;
  


















