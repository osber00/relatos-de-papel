import LibroCard from "./libro-card"

const LibrosLista = ({listaLibros}) => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {listaLibros.map((libro) => (
                <LibroCard key={libro.id} libro={libro} />
            ))}
        </div>
    )
}

export default LibrosLista