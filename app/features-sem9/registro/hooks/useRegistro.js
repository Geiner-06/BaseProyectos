import { useState } from "react";
import {
  REGISTRO_MENSAJES,
  TIPO_MENSAJE,
  NOMBRE_INICIAL,
} from "../constants/registro.constants";

function useRegistro(participantes, setParticipantes, capacidadMaxima) {
  const [nombre, setNombre] = useState(NOMBRE_INICIAL);
  const [mensaje, setMensaje] = useState(null);

  function obtenerError(nombreLimpio) {
    if (!nombreLimpio) return REGISTRO_MENSAJES.NOMBRE_VACIO;
    if (participantes.length >= capacidadMaxima)
      return REGISTRO_MENSAJES.CAPACIDAD_LLENA;
    return null;
  }

  function handleCambiarNombre(e) {
    setNombre(e.target.value);
  }

  function handleRegistrar() {
    const nombreLimpio = nombre.trim();
    const error = obtenerError(nombreLimpio);

    if (error) {
      setMensaje({ tipo: TIPO_MENSAJE.ERROR, texto: error });
      return;
    }

    setParticipantes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), nombre: nombreLimpio },
    ]);
    setNombre(NOMBRE_INICIAL);
    setMensaje({ tipo: TIPO_MENSAJE.EXITO, texto: REGISTRO_MENSAJES.EXITO });
  }

  return { nombre, mensaje, handleCambiarNombre, handleRegistrar };
}

export default useRegistro;
