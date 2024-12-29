import React from 'react'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { CarritoContext } from '../context/carrito-context'
import { Link } from 'react-router'

const CarritoBoton = ({ mobil }) => {
    const { carrito } = useContext(CarritoContext)
    const btn_movil = "relative inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
    const btn_pc = "relative inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"


    return (
        <div className={mobil ? "py-6" : "hidden lg:flex lg:flex-1 lg:justify-end"}>
            <Link
                to="/carrito"
                type="button"
                className={mobil ? btn_movil : btn_pc}
            >
                <ShoppingCartIcon className="h-6 w-6 text-white mr-2" />
                {carrito.length > 0 ? <span className="absolute top-0 right-0 mt-[-4px] mr-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                    {carrito.length}
                </span> : ''}
            </Link>
        </div>
    )
}

export default CarritoBoton