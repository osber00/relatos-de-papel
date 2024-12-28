import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 z-10 mt-auto">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-lg font-semibold text-white mb-4">Tienda de Libros</h2>
                <p className="text-sm text-gray-400 mb-6">
                    Descubre las mejores historias en un solo lugar. Encuentra tus libros favoritos en formato físico o digital.
                </p>
                <ul className="flex justify-center space-x-6 mb-4">
                    <li><Link to='/' className="hover:text-indigo-400">Inicio</Link></li>
                    <li><Link to='/libros' className="hover:text-indigo-400">Libros</Link></li>
                    <li><Link to='/contactos' className="hover:text-indigo-400">Contacto</Link></li>
                    <li><Link to='/nosotros' className="hover:text-indigo-400">Nosotros</Link></li>
                </ul>
                <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Tienda de Libros. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;