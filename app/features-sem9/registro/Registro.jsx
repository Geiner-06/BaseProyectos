import useRegistro from './hooks/useRegistro'
import { REGISTRO_TEXT } from './constants/registro.constants'
import { FormularioRegistro } from './formulario/FormularioRegistro'
import { ListaParticipantes } from './lista/ListaParticipantes'

export function Registro({ participantes, setParticipantes, capacidadMaxima }) {

    const { nombre, mensaje, handleCambiarNombre, handleRegistrar } = useRegistro(participantes, setParticipantes, capacidadMaxima)

    return (
        <>
        <h2>{REGISTRO_TEXT.TITULO}</h2>
        <FormularioRegistro
            nombre={nombre}
            mensaje={mensaje}
            onCambiarNombre={handleCambiarNombre}
            onRegistrar={handleRegistrar}
        />
        <ListaParticipantes participantes={participantes} />
        </>
    )
}
