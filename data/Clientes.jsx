export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
}

export async function agregarClientes(datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: datos }),
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarClientes(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: datos }),
    });
    console.log(datos, id);
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarClientes(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
