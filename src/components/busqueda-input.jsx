const BusquedaInput = ({busqueda, setBusqueda}) => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Buscar libros..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  )
}

export default BusquedaInput