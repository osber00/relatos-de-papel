
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Menu from './menu'
import { useContext } from 'react'
import { LibrosContext } from '../context/libros-context'
import Logo from './logo'

const NavegacionMobil = () => {

    const { mobileMenuOpen, toggleMobileMenu } = useContext(LibrosContext)

    return (
        <Dialog open={mobileMenuOpen} onClose={toggleMobileMenu} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">

                    <Logo />
                    
                    <button
                        type="button"
                        onClick={() => toggleMobileMenu(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">

                        <Menu movil={true} />

                        <div className="py-6">
                            <div className="relative">
                                <label htmlFor="mobile-search" className="sr-only">Buscar</label>
                                <input
                                    type="text"
                                    id="mobile-search"
                                    placeholder="Buscar libros..."
                                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>

    )
}

export default NavegacionMobil