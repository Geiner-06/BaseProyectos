import { CONTADOR_TEXT } from "../constants/contador.constants";
import useContador from "../hooks/useContador";

export function Contador1({ count, setCount }) {
  const { handleIncrement, handleDecrement } = useContador(setCount);

  return (
    <>
      <h2>Contador 1</h2>
      <p>{count}</p>

      <button onClick={count < 5 && handleIncrement}>
        {CONTADOR_TEXT.INCREMENT}
      </button>
      <button onClick={handleDecrement} disabled={count <= 0}>
        {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
