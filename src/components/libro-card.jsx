import { Link } from "react-router";
import { PlusCircleIcon } from '@heroicons/react/24/outline'

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
            <Link to={`/libro/${libro.slug}`} className="group-hover:underline">
              <span aria-hidden="true" className="absolute inset-0" />
              {libro.titulo}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{libro.autor}</p>
          <p className="mt-1 text-sm text-gray-500">{libro.categoria}</p>
        </div>
        <p className="text-sm font-medium text-blue-800">${libro.precio}</p>
      </div>
      <div className="w-full border-b border-indigo-900 flex justify-center py-3">
        <Link
          to={`/libro/${libro.slug}`}
          className="inline-flex w-full justify-center rounded-md bg-indigo-600  px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusCircleIcon aria-hidden="true" className="size-6 mx-1" /> Más Información
        </Link>
      </div>
    </div>
  );
};

export default LibroCard