import LibroCard from "./libro-card"

const LibrosLista = ({listaLibros, inicio}) => {

    const ultimosLibros = () => {
        return listaLibros.slice(-6)
    }

    const libros = inicio ? ultimosLibros() : listaLibros



    return (
        <div className={`mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${inicio ? 'lg:grid-cols-2': 'lg:grid-cols-3'} xl:gap-x-8`}>	
            {libros.map((libro) => (
                <LibroCard key={libro.id} libro={libro} />
            ))}
        </div>
    )
}

export default LibrosLista