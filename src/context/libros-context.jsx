
import { useState, useEffect, createContext } from "react"
import {libros} from '../data/libros'

export const LibrosContext = createContext()


export const LibrosContextProvider = ({ children }) => {

    const [listaLibros, setListaLibros] = useState([])
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setListaLibros(libros)
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <LibrosContext.Provider value={{listaLibros, mobileMenuOpen, toggleMobileMenu}}>
            {children}
        </LibrosContext.Provider>
    )
}