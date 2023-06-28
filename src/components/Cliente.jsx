import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarClientes } from "../../data/Clientes";

export async function action ({params}) {
  await eliminarClientes(params.clienteId); 

  return redirect('/')

}

function Cliente({ cliente }) {
  const { nombre, empresa, email, telefono, id } = cliente;
  const navigate = useNavigate();
  return (
    <>
      <tr className="border-b">
        <td className="p-4 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>
        <td className="p-4 space-y-2">
          <p className="text-gray-800">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p className="text-gray-800">
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            {telefono}
          </p>
        </td>
        <td className="p-4 flex gap-3">
          <button
            type="button"
            className="text-sky-600 uppercase font-bold text-xs"
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>

          <Form
            method="post"
            action={`/clientes/${id}/eliminar`}
            onSubmit={(e)=> {
              if(!confirm("¿Deseas eliminar el cliente?")){
                e.preventDefault();

              }
            }}

          >
          <button
            type="submit"
            className="text-red-600 uppercase font-bold text-xs"
          >
            Eliminar
          </button>

          </Form>
        </td>
      </tr>
    </>
  );
}

export default Cliente;
