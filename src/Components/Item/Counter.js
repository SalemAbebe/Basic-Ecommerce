import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);

  const handleClickIncrement = () => {
    setCounter(counter + 1);
  };

  const handleClickDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={handleClickDecrement}>-</button>
      <input value={counter} />
      <button onClick={handleClickIncrement}>+</button>
    </div>
  );
}

export default Counter;
