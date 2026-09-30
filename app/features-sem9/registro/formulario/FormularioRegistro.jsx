import { REGISTRO_TEXT } from "../constants/registro.constants";

export function FormularioRegistro({
  nombre,
  mensaje,
  onCambiarNombre,
  onRegistrar,
}) {
  return (
    <>
      <label>{REGISTRO_TEXT.NOMBRE}</label>
      <input
        type="text"
        placeholder={REGISTRO_TEXT.PLACEHOLDER}
        value={nombre}
        onChange={onCambiarNombre}
      />
      <button onClick={onRegistrar}>{REGISTRO_TEXT.REGISTRAR}</button>
      {mensaje && <p className={mensaje.tipo}>{mensaje.texto}</p>}
    </>
  );
}
