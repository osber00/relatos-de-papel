import { useState } from "react";
import Layout from "./layout";
import { useContext } from "react";
import { CarritoContext } from "../context/carrito-context";

const Pago = () => {
    const {limpiarCarrito, totalCompra} = useContext(CarritoContext);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const simularPago = () => {
        limpiarCarrito();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    return (
        <Layout>
            <div className="max-w-2xl mx-auto mt-10 mb-4 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Procesar Pago ${totalCompra().toFixed(2)}</h2>
                {success ? (
                    <div className="text-center">
                        <p className="text-lg font-semibold text-green-600">¡Pago realizado con éxito!</p>
                        <p className="text-sm text-gray-500 mt-2">Gracias por tu compra. Te enviaremos un correo electrónico con los detalles.</p>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-gray-600 mb-4">Por favor, confirma que deseas proceder con el pago. Una vez confirmado, no se puede cancelar.</p>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={simularPago}
                                disabled={loading}
                                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                                    loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
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
