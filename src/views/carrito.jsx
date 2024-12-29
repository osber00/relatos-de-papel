import { useContext } from "react";
import { CarritoContext } from "../context/carrito-context";
import Layout from "./layout";
import ItemCarrito from "../components/item-carrito";
import { Link } from "react-router";

const Carrito = () => {
    const { carrito, eliminarDelCarrito, limpiarCarrito, totalCompra } = useContext(CarritoContext);
    return (
        <Layout>
            <div className="max-w-4xl mt-10 mb-4 mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Carrito de compras</h2>
                {carrito.length === 0 ? (
                    <p className="text-gray-500">Tu carrito está vacío.</p>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {carrito.map((item) => (
                            <ItemCarrito key={item.idTemp} item={item} eliminarDelCarrito={eliminarDelCarrito} />   
                        ))}
                    </ul>
                )}
                <div className="mt-6">
                    <p className="text-lg font-bold text-gray-800">Total: ${totalCompra().toFixed(2)}</p>
                </div>
                
                {carrito.length > 0 && (
                    <div className="mt-6 flex justify-between">
                        <button
                        onClick={limpiarCarrito}
                        className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        Vaciar carrito
                    </button>
                        <Link
                        to={`/pago`}
                            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            //onClick={() => alert('Proceder al pago no implementado aún')}
                        >
                            Proceder con el pago
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Carrito