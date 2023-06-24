import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader(){

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes;


}


function Index() {

const clientes = useLoaderData();


  return (
    <>
        <h1 className="font-black text-4xl text-sky-900">Clientes</h1>
        <p className="mt-3"> Administra tus clientes</p>

        {clientes.length ? (
          <table className="w-full table-auto bg-white shadow mt-5">
            <thead className="bg-sky-800 text-white">
              <tr>
                <th className="p-2"> Cliente</th>
                <th className="p-2"> Contacto</th>
                <th className="p-2"> Acciones</th>
              </tr>
              </thead>
              <tbody>
                {clientes.map(cliente => (
                  <Cliente 
                    cliente={cliente}
                    key={cliente}              
                  />
                ))}
              </tbody>

            
          </table>

        ) : (
          <p>No hay clientes</p>
        )}
        
    </>
  )
}

export default Index