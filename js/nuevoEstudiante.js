//exportaciones e importaciones
import {mostrarMensaje} from "./funciones.js";
import {nuevoEstudiante} from "./API.js";
(()=>{

    const formulario = document.querySelector("#formulario");
    
    formulario.addEventListener('submit', validarFormulario);



    //funciones
    function validarFormulario(e){
        e.preventDefault();
        //valores de los imputs
        const nombre = document.querySelector("#nombre").value;
        const carrera = document.querySelector("#carrera").value;
        const edad = document.querySelector("#edad").value;
        const nota = document.querySelector("#nota").value;
        
        const objInputs = {
            nombre,carrera,edad,nota
        }

        if(!verFormulario(objInputs)){
            mostrarMensaje("complete los campos");
            return
        }
        nuevoEstudiante(objInputs);

    }

    function verFormulario(obj){
        return Object.values(obj).every( dato => dato !== '');
    }


})();