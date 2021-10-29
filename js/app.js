import {mostrarDatos, eliminarDato} from './API.js';

(()=>{

const caja = document.querySelector("#caja");

//eventos
document.addEventListener('DOMContentLoaded', mostrarInformacion);
caja.addEventListener("click", eliminarEstudiante);

async function mostrarInformacion(){
    const datos = await mostrarDatos();
    mostrarHTML(datos);
    
}

function mostrarHTML(datos){
    datos.forEach( (item) => {
        const {nombre,carrera,edad,nota,id} = item
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${nombre}</td>
        <td>${carrera}.</td>
        <td>${edad}</td>
        <td>${nota}</td>
        <td>
            <a href="editarEstudiante.html?id=${id}" class="btn btn-sm btn-warning mx-1" data-id="${id}">
                <i class="fas fa-edit"></i>
            </a>
            <a href="#" class="btn btn-sm btn-danger mx-1 delete" data-id="${id}">
                <i class="far fa-trash-alt p-0 m-0"></i>
            </a>
        </td>
        `
        caja.appendChild(row);
    } )
}

//eliminar estudiante
function eliminarEstudiante(e){
    if(e.target.classList.contains('delete')){
        let id = parseInt(e.target.getAttribute("data-id"));
        //confirmar eliminación
        const confirmar = confirm('SEGURO QUE DESEA ELIMINAR');
        if(confirmar){
            eliminarDato(id)
        }
    }
}
})();