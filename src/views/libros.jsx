import { useContext } from "react"
import Layout from "./layout"
import { LibrosContext } from '../context/libros-context.jsx'
import LibrosLista from "../components/libros-lista.jsx"
import useFiltrarLibros from "../hooks/use-filtrar-libros.jsx"
import BusquedaInput from "../components/busqueda-input.jsx"

const Libros = () => {

    const { listaLibros } = useContext(LibrosContext)
    const { busqueda, setBusqueda, librosFiltrados } = useFiltrarLibros(listaLibros)

    return (
        <Layout>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Lista de libros</h2>

                    <BusquedaInput busqueda={busqueda} setBusqueda={setBusqueda}/>

                    <LibrosLista listaLibros={librosFiltrados} />
                </div>
            </div>
        </Layout>

    )
}

export default Libros