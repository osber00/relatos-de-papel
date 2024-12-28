import NavegacionPc from '../components/navegacion-pc'
import NavegacionMobil from '../components/navegacion-mobil'
import Footer from '../components/footer'

const Layout = ({ children }) => {
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <NavegacionPc/>
                <NavegacionMobil/>
            </header>

            {children}

            <Footer/>
        </div>
    )
}

export default Layout