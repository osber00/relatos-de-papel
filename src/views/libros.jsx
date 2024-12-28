import { useContext } from "react"
import Layout from "./layout"
import { LibrosContext } from '../context/libros-context.jsx'
import LibrosLista from "../components/libros-lista.jsx"
import useFiltrarLibros from "../hooks/filtrar-libros.jsx"

const Libros = () => {

    const { listaLibros } = useContext(LibrosContext)
    const { busqueda, setBusqueda, librosFiltrados } = useFiltrarLibros(listaLibros)

    return (
        <Layout>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Lista de libros</h2>

                    <div className="flex justify-center my-6">
                        <input
                            type="text"
                            placeholder="Buscar libros..."
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </div>

                    <LibrosLista listaLibros={librosFiltrados} />
                </div>
            </div>
        </Layout>

    )
}

export default Libros