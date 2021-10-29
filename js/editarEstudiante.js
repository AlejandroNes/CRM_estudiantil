import {mostrarDatosIndividuales, actualizarDatos} from "./API.js";
import {mostrarMensaje} from "./funciones.js";
(()=>{

//variables
    const formulario = document.querySelector("#formulario") 
    const nombreInput = document.querySelector("#nombre");
    const carreraInput = document.querySelector("#carrera");
    const edadInput = document.querySelector("#edad");
    const notaInput = document.querySelector("#nota");
    const idInput = document.querySelector("#id");

formulario.addEventListener("submit", validarFormulario);
document.addEventListener('DOMContentLoaded', async ()=>{
    //obteniendo el id para editar
    const parametroURL = new URLSearchParams(window.location.search);
    const estudianteID = parseInt(parametroURL.get('id'))
    
    //mostrar los datos del estudiante por su ID
    const estudiante =  await mostrarDatosIndividuales(estudianteID);
    const {nombre,carrera,edad,nota,id} = estudiante
    nombreInput.value = nombre;
    carreraInput.value = carrera;
    edadInput.value = edad;
    notaInput.value = nota;
    idInput.value = id;

    

})

function validarFormulario(e){
    e.preventDefault();
    const estudianteEditado = {
        nombre: nombreInput.value,
        carrera: carreraInput.value,
        edad: edadInput.value,
        nota: notaInput.value,
        id: idInput.value
    }
    const error = validarForm(estudianteEditado);
    if(!error){
        mostrarMensaje("Complete los campos");
        return;
    }
    //actualizamos el dato del estudiante
    actualizarDatos(estudianteEditado,estudianteEditado.id);

}

//funcion ver si estan vacios los campos
function validarForm(objEstudiante){
    return Object.values(objEstudiante).every( (item) => item !== '' );
}


})();