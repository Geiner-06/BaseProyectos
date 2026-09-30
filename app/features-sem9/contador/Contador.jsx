import useContador from './hooks/useContador'
import { CONTADOR_TEXT } from './constants/contador.constants'

export function Contador({ participantes, capacidadMaxima }) {

    const { cantidadRegistrados, cuposDisponibles, estaLleno } = useContador(participantes, capacidadMaxima)

    return (
        <>
        <h2>{CONTADOR_TEXT.TITULO}</h2>
        <p>{CONTADOR_TEXT.CAPACIDAD}: {capacidadMaxima}</p>
        <p>{CONTADOR_TEXT.REGISTRADOS}: {cantidadRegistrados}</p>
        <p>{CONTADOR_TEXT.DISPONIBLES}: {cuposDisponibles}</p>
        {estaLleno && <p>{CONTADOR_TEXT.LLENO}</p>}
        </>
    )
}
