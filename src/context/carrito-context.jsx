import {createContext, useState} from 'react';
import useIdTemp from '../hooks/use-id-temp';

export const CarritoContext = createContext();

export const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const {idTemp, refrescarIdTemp} = useIdTemp();

    const agregarAlCarrito = (libro) => {
        //setCarrito([...carrito, libro]);

        refrescarIdTemp()
        
        setCarrito([...carrito, { ...libro, idTemp: idTemp }]);
        
    }

    const eliminarDelCarrito = (idTemp) => {

        //setCarrito(carrito.filter((item) => item.id !== id));
        setCarrito(carrito.filter((item) => item.idTemp !== idTemp));
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    const totalCompra = () => {
        return carrito.reduce((total, item) => total + item.precio, 0);
    }

    /* console.log(carrito.length); */
    

    return (
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, totalCompra}}>
            {children}
        </CarritoContext.Provider>
    )
    
}