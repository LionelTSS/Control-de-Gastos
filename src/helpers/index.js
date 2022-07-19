export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

// export const formatearFecha = fecha => {
//     const date = new Date(fecha)
//     const year = date.getFullYear()
//     const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
//     const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
//     const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
//     const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

//     return `${year}-${month}-${day} ${hour}:${minutes}`
// }

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones ={
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}