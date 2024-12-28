import { Link } from "react-router"

const LibroCard = ({ libro }) => {
  return (
    <div className="group relative">
      <img
        alt={libro.slug}
        src={libro.urlImagen}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 gap-2 flex justify-between">
        <div>
          <h3 className="text-sm font-semibold truncate text-gray-700">
            <Link to='/'>
              <span aria-hidden="true" className="absolute inset-0" />
              {libro.titulo}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{libro.autor}</p>
          <p className="mt-1 text-sm text-gray-500">{libro.categoria}</p>
        </div>
        <p className="text-sm font-medium text-blue-800">${libro.precio}</p>
      </div>
      <div className="border-b px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          /* onClick={() => setOpen(false)} */
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Comprar
        </button>
        <button
          type="button"
          data-autofocus
          /* onClick={() => setOpen(false)} */
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Ver detalles
        </button>
      </div>
    </div>
  )
}

export default LibroCard