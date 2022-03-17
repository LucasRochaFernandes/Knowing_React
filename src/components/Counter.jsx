import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number+1)
  } 

  return (
    <div id="counter-div">
      <h2 id="counter">{number}</h2>
      <button type="button" onClick={increment}>
        anterior + {number-1}
      </button>
    </div>
  );
}
