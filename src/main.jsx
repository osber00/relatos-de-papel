import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './components/rutas.jsx'
import { LibrosContextProvider } from './context/libros-context.jsx'
import { CarritoContextProvider } from './context/carrito-context.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LibrosContextProvider>
      <CarritoContextProvider>
        <Toaster position='bottom-center' reverseOrder={false} />
        <BrowserRouter>
          <Rutas />
        </BrowserRouter>
      </CarritoContextProvider>
    </LibrosContextProvider>
  </StrictMode>
)
