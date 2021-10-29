
export function mostrarMensaje(mensaje) {
    const danger = document.querySelector(".danger");
    if (!danger) {
        const respuesta = document.querySelector("#mensaje");
        const parrafo = document.createElement('p')
        parrafo.textContent = `${mensaje}`
        parrafo.classList.add('danger')
        respuesta.appendChild(parrafo);

        setTimeout(() => {
            parrafo.remove()
        },2000);
       
    }
}