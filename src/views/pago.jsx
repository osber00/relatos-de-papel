import { useState, useEffect } from "react";
import Layout from "./layout";
import { useContext } from "react";
import { CarritoContext } from "../context/carrito-context";
import { useNavigate } from "react-router";

const Pago = () => {
    const {carrito, limpiarCarrito, totalCompra } = useContext(CarritoContext);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const navegacion = useNavigate()

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
                navegacion("/")
            }, 2000);
        }
    }, [success, navegacion])

    return (
        <Layout>
            <div className="max-w-2xl mx-auto mt-10 mb-4 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Procesar Pago {totalCompra() > 0 && totalCompra().toFixed(2)}</h2>
                {success ? (
                    <div className="text-center">
                        <p className="text-lg font-semibold text-green-600">¡Pago realizado con éxito!</p>
                        <p className="text-sm text-gray-500 mt-2">Gracias por tu compra. Te enviaremos un correo electrónico con los detalles.</p>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-gray-600 mb-4">Por favor, confirma que deseas proceder con el pago. Una vez confirmado, no se puede cancelar.</p>
                        {carrito.length > 0 && (
                            carrito.map((item) => (
                                <div key={item.idTemp} className="flex justify-between mb-2">
                                    <p className="text-gray-800">{item.titulo}</p>
                                    <p className="text-gray-800">${item.precio.toFixed(2)}</p>
                                </div>
                            ))
                        )}
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
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Pago;
