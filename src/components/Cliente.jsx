function Cliente({ cliente }) {
  const { nombre, empresa, email, telefono, id } = cliente;
  return (
    <>
      <tr className="border-b">
        <td className="p-4 space-y-2">
            <p className="text-2xl text-gray-800">{nombre}</p>
            <p>{empresa}</p>

        </td>
        <td className="p-4 space-y-2">
            <p className="text-gray-800"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
            <p className="text-gray-800"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
        </td>
        <td className="p-4 flex gap-3">
            <button
                type="button"
                className="text-sky-600 uppercase font-bold text-xs"
            >
                Editar
            </button>
            <button
                type="button"
                className="text-red-600 uppercase font-bold text-xs"
            >
                Eliminar
            </button>
            
        </td>
      </tr>
    </>
  );
}

export default Cliente;
