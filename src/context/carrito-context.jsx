import {createContext, useState} from 'react';

export const CarritoContext = createContext();

export const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (libro) => {
        setCarrito([...carrito, libro]);
        //const libroExistente = carrito.find((item) => item.id === libro.id);
        /* if (libroExistente) {
            setCarrito(
                carrito.map((item) =>
                    item.id === libro.id ? { ...libro, cantidad: item.cantidad + 1 } : item
                )
            );
        } else {
            setCarrito([...carrito, { ...libro, cantidad: 1 }]);
        } */
        
    }

    const eliminarDelCarrito = (libro) => {
        const libroExistente = carrito.find((item) => item.id === libro.id);
        if (libroExistente.cantidad === 1) {
            setCarrito(carrito.filter((item) => item.id !== libro.id));
        } else {
            setCarrito(
                carrito.map((item) =>
                    item.id === libro.id ? { ...libro, cantidad: item.cantidad - 1 } : item
                )
            );
        }
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    /* console.log(carrito.length); */
    

    return (
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
    
}