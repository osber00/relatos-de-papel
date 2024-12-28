import { useContext } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Menu from "./menu"
import Logo from "./logo"
import { LibrosContext } from "../context/libros-context"


const NavegacionPc = () => {
    const {mobileMenuOpen, toggleMobileMenu} = useContext(LibrosContext)
    
    return (
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-white text-black">
            
            <Logo />
            
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => toggleMobileMenu(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>

            <Menu movil={false} />

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <div className="relative">
                    <label htmlFor="search" className="sr-only">Buscar</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Buscar libros..."
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavegacionPc