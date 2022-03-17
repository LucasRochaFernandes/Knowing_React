import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number+1)
  } 

  return (
    <div>
      <h2 id="counter">{number}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
