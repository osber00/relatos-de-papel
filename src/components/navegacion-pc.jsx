import { useContext } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Menu from "./menu";
import Logo from "./logo";
import { LibrosContext } from "../context/libros-context";
import CarritoBoton from "./carrito-boton";

const NavegacionPc = () => {
    const { mobileMenuOpen, toggleMobileMenu } = useContext(LibrosContext);

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

            <CarritoBoton movil={false} />
        </nav>
    );
};

export default NavegacionPc