import { useContext } from 'react';
import { useParams } from 'react-router';
import { LibrosContext } from '../context/libros-context';
import {CarritoContext} from '../context/carrito-context';
import Layout from './layout'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Libro = () => {

    const params = useParams()
    const { listaLibros } = useContext(LibrosContext)
    const libro = listaLibros.find(libro => libro.slug === params.slug)

    const { agregarAlCarrito } = useContext(CarritoContext)

    if (!libro) return <p className="text-center text-gray-500">No se encontró información del libro.</p>;

    return (
        <Layout>
            <div className="mt-32 mb-14 max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                    <img
                        src={libro.urlImagen}
                        alt={libro.titulo}
                        className="w-1/3 h-auto object-cover"
                    />
                    <div className="w-2/3 p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{libro.titulo}</h2>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Autor:</span> {libro.autor}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Categoría:</span> {libro.categoria}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Formato:</span> {libro.formato}
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Precio:</span> ${libro.precio.toFixed(2)}
                        </p>
                        <button
                            onClick={() => agregarAlCarrito(libro)}  
                            className="flex justify-between px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                            < ShoppingCartIcon aria-hidden="true" className="size-6 mx-1"/> Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Libro