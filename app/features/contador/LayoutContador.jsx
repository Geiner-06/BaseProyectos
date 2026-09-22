import { useState } from "react";
import { Contador1 } from "./contador1/contador1";
import { Contador2 } from "./contador2/contador2";
import { Registro } from "./personas/agregarPersona";

export function LayoutContador() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registro setCount={setCount} />
      <br />
      <Contador1 count={count} setCount={setCount} />
      <br />
      <Contador2 count={count} setCount={setCount} />
    </>
  );
}
