import {
  Form,
  useNavigate,
  useLoaderData,
  redirect,
  useActionData,
} from "react-router-dom";
import { actualizarClientes, obtenerCliente } from "../../data/Clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);

  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 400,
      statusText:
        "El cliente no existe, vuelve a la portada y busca de nuevo...",
    });
  }
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");
  const errores = [];

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son oblitorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es correcto");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  await actualizarClientes(params.clienteId, datos);
  console.log(params.clienteId, datos);
  return redirect("/");
}

function EditarCliente() {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-sky-900">Editar Cliente</h1>
      <p className="mt-3">Ahora puedes editar los datos del cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-sky-900 text-white px-3 py-1 font-bold uppercase rounded"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="put" noValidate>
          <Formulario cliente={cliente.data} />
          <input
            type="submit"
            className="mt-5 w-full bg-sky-800 p-3 uppercase font-bold text-white rounded text-lg"
            value="Actualizar cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default EditarCliente;
