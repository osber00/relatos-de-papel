import { Link } from "react-router"
import logo from '../../public/logo.png'

const Logo = () => {
    return (
        <div className="flex lg:flex-1">
            <Link to='/' className="-m-1.5 p-1.5">
                <span className="sr-only">Relatos de Papel</span>
                <img
                    alt="Logo de Relatos de Papel"
                    src={logo}
                    className="h-8 w-auto"
                />
            </Link>
        </div>
    )
}

export default Logo