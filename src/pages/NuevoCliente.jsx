import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({request}) {
 
  const formData = await request.formData();

  const datos = Object.fromEntries(formData)


    const errores = [];

   if(Object.values(datos).includes('')){
    errores.push('Todos los campos son oblitorios')
   }

   if(Object.keys(errores).length){
    return errores
   }

}


function NuevoCliente() {

  const errores = useActionData()

  const navigate = useNavigate();


  return (
    <>
      <h1 className="font-black text-4xl text-sky-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Completa todos los campos para registra un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-sky-900 text-white px-3 py-1 font-bold uppercase rounded"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        
        <Form
          method="post"
        >
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-sky-800 p-3 uppercase font-bold text-white rounded text-lg"
            value="Registrar cliente"
           />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
