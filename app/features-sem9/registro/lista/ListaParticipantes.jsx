import { REGISTRO_TEXT } from '../constants/registro.constants'

export function ListaParticipantes({ participantes }) {

    const hayParticipantes = participantes.length > 0

    return (
        <>
        <h2>{REGISTRO_TEXT.LISTA}</h2>
        {hayParticipantes ? (
            <ul>
                {participantes.map((participante) => (
                    <li key={participante.id}>{participante.nombre}</li>
                ))}
            </ul>
        ) : (
            <p>{REGISTRO_TEXT.LISTA_VACIA}</p>
        )}
        </>
    )
}
