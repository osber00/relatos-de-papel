import { Route, Routes } from 'react-router'
import Nosotros from '../views/nosotros'
import Libros from '../views/libros'
import Contactos from '../views/contactos'
import Inicio from '../views/inicio'
import NoFound from '../views/404'

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/libros" element={<Libros />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="*" element={<NoFound/>} />
        </Routes>
    )
}

export default Rutas