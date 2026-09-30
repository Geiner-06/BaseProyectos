import { useState } from 'react'
import { Contador } from '../contador/Contador'
import { Registro } from '../registro/Registro'
import { CAPACIDAD_MAXIMA, PARTICIPANTES_INICIALES, LAYOUT_TEXT } from './constants/layout.constants'

export function LayoutParticipantes() {
    const [participantes, setParticipantes] = useState(PARTICIPANTES_INICIALES)

    return (
        <>
        <h1>{LAYOUT_TEXT.TITULO}</h1>
        <Contador
            participantes={participantes}
            capacidadMaxima={CAPACIDAD_MAXIMA}
        />
        <Registro
            participantes={participantes}
            setParticipantes={setParticipantes}
            capacidadMaxima={CAPACIDAD_MAXIMA}
        />
        </>
    )
}
