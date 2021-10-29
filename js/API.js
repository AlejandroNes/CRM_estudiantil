//PETICIONES AL SERVIDOR

const url = `http://localhost:3007/clientes`;

//nuevo estudiante
export const nuevoEstudiante = async (estudiante) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(estudiante),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "index.html";

    } catch (error) {
        console.log(error)
    }
}

//mostrar datos
export const mostrarDatos = async () => {
    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//eliminar dato
export const eliminarDato = async (id) => {
    await fetch(`${url}/${id}`,{
        method: "DELETE",
    }) 
}