import { useState, useMemo } from 'react'

const useFiltrarLibros = (listaLibros) => {
    const [busqueda, setBusqueda] = useState('')

    const librosFiltrados = useMemo(() => {
        const texto = busqueda.trim()
        if (texto.length < 3) {
            return listaLibros
        }
        return listaLibros.filter((libro) => {
            return libro.titulo.toLowerCase().includes(texto.toLowerCase())
        })
    }, [listaLibros, busqueda])

    return { busqueda, setBusqueda, librosFiltrados }
}

export default useFiltrarLibros