import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../../data/Clientes";

export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-sky-900">Clientes</h1>
      <p className="mt-3"> Administra tus clientes</p>

      {clientes.data.length ? (
        <table className="w-full table-auto bg-white shadow mt-5">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="p-2"> Cliente</th>
              <th className="p-2"> Contacto</th>
              <th className="p-2"> Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.data.map((cliente) => (
              <Cliente 
              cliente={cliente} 
              clienteID={cliente.id}
              key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay clientes</p>
      )}
    </>
  );
}

export default Index;
