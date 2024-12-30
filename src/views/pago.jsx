import { useState, useEffect } from "react";
import Layout from "./layout";
import { useContext } from "react";
import { CarritoContext } from "../context/carrito-context";
import { useNavigate } from "react-router";

const Pago = () => {
    const { carrito, limpiarCarrito, totalCompra } = useContext(CarritoContext);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const navegacion = useNavigate();

    const simularPago = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            limpiarCarrito();
        }, 2000);
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navegacion("/");
            }, 2000);
        }
    }, [success, navegacion]);

    return (
        <Layout>
            <div className="max-w-5xl mx-auto mt-10 mb-4 bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Pago</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Tu nombre completo"
                            />
                        </div>
                        <div>
                            <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input
                                type="email"
                                id="correo"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
                            <input
                                type="text"
                                id="direccion"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Tu dirección"
                            />
                        </div>
                        <div>
                            <label htmlFor="tarjeta" className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
                            <input
                                type="text"
                                id="tarjeta"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="1234 5678 9123 4567"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fecha-expiracion" className="block text-sm font-medium text-gray-700">Fecha de Expiración</label>
                                <input
                                    type="text"
                                    id="fecha-expiracion"
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="MM/AA"
                                />
                            </div>
                            <div>
                                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                <input
                                    type="text"
                                    id="cvc"
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="123"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen de Compra</h2>
                    {success ? (
                        <div className="text-center">
                            <p className="text-lg font-semibold text-green-600">¡Pago realizado con éxito!</p>
                            <p className="text-sm text-gray-500 mt-2">Gracias por tu compra. Te enviaremos un correo electrónico con los detalles.</p>
                        </div>
                    ) : (
                        <>
                            {carrito.length > 0 && (
                                carrito.map((item) => (
                                    <div key={item.idTemp} className="flex justify-between mb-2">
                                        <p className="text-gray-800">{item.titulo}</p>
                                        <p className="text-gray-800">${item.precio.toFixed(2)}</p>
                                    </div>
                                ))
                            )}
                            <div className="mt-6">
                                <p className="text-lg font-bold text-gray-800">Total: ${totalCompra().toFixed(2)}</p>
                            </div>
                            {totalCompra() > 0 && (
                                <div className="mt-6 flex justify-end">
                                <button
                                    onClick={simularPago}
                                    disabled={loading}
                                    className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                                        }`}
                                >
                                    {loading ? "Procesando..." : "Confirmar Pago"}
                                </button>
                            </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Pago;
