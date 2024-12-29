
const ItemCarrito = ({item, eliminarDelCarrito}) => {
    return (
        <li className="py-4 flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold text-gray-700">{item.titulo}</h3>
                <p className="text-sm text-gray-500">Autor: {item.autor}</p>
                <p className="text-sm text-gray-500 font-semibold">Formato: {item.formato}</p>
                {/* <p className="text-sm text-gray-500">idTem: {item.idTemp}</p> */}
            </div>
            <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-700">${(item.precio).toFixed(2)}</p>
                <button
                    onClick={() => eliminarDelCarrito(item.idTemp)}
                    className="text-red-600 hover:underline"
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}

export default ItemCarrito