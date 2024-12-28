import { useState, useEffect } from "react"
import { menu } from "../data/menu"
import { Link } from "react-router"
import { useContext } from "react"
import { LibrosContext } from "../context/libros-context"


const Menu = ({movil}) => {

    const [navigation, setNavigation] = useState([])
    const {toggleMobileMenu} = useContext(LibrosContext)

    useEffect(() => {
      setNavigation(menu)
    }, [])
    
    if (movil) {
        return (
            <div className="lg:hidden">
                {navigation.map((item) => (
                    <Link key={item.name} to={item.ruta} onClick={toggleMobileMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        {item.name}
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <Link key={item.name} to={item.ruta} className="text-sm/6 font-semibold text-gray-900">
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default Menu