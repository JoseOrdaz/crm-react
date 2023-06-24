import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

function NuevoCliente() {
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
        <form>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-sky-800 p-3 uppercase font-bold text-white rounded text-lg"
            value="Registrar cliente"
          ></input>
        </form>
      </div>
    </>
  );
}

export default NuevoCliente;
