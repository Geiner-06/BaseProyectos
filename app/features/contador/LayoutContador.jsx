import { useState } from "react";
import { CONTADOR_TEXT } from "../constants/contador.constants";

export function LayoutContador() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h2>Contador</h2>
      <p>{count}</p>

      <button onClick={count < 5 && handleIncrement}>
        {CONTADOR_TEXT.INCREMENT}
      </button>
      <button onClick={count > 0 && handleDecrement}>
        {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
