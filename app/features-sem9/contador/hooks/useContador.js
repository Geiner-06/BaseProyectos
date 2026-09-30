function useContador(participantes, capacidadMaxima) {

    const cantidadRegistrados = participantes.length
    const cuposDisponibles = capacidadMaxima - cantidadRegistrados
    const estaLleno = cuposDisponibles <= 0

    return { cantidadRegistrados, cuposDisponibles, estaLleno }
}

export default useContador
