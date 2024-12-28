import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './components/rutas.jsx'
import {LibrosContextProvider} from './context/libros-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LibrosContextProvider>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </LibrosContextProvider>
  </StrictMode>
)
