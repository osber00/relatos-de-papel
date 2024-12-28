import { useContext } from "react"
import Layout from "./layout"
import { LibrosContext } from '../context/libros-context.jsx'
import LibroCard from "../components/libro-card.jsx"

const Libros = () => {

    const { listaLibros } = useContext(LibrosContext)

    return (
        <Layout>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Lista de libros</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {listaLibros.map((libro) => (
                            <LibroCard key={libro.codigo} libro={libro} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Libros