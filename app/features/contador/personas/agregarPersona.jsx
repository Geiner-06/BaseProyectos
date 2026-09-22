import { PERSONA_TEXT } from "../constants/persona.constants";
import useContador from "../hooks/useContador";

export function Registro({ setCount }) {
  const { handleIncrement } = useContador(setCount);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleIncrement();
  };

  return (
    <>
      <h2>Registro de Persona</h2>

      <form>
        <input
          type="text"
          placeholder={PERSONA_TEXT.NAME}
          maxlength="20"
          required
        />
        <input
          type="number"
          placeholder={PERSONA_TEXT.AGE}
          maxlength="3"
          required
        />
        <input
          type="submit"
          value={PERSONA_TEXT.REGISTER}
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
