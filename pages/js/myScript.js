// se define valor del ticket
const valorTicker = 200;

// Se definen los valores por categoría
let descuentoEstudiante = 80;
let descuentoTrainee= 50;
let descuentoJunior = 15;

// Elementos en variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidadTicket");
let categoriaSelect = document.getElementById("categoriaSeleccion");

// Elementos de mensajes de Error
let divErrorcampoVacio = document.getElementById("divErrorcampoVacio");
let divCorreoInvalido = document.getElementById("divCorreoInvalido");
let divErrorSeleccion = document.getElementById("divErrorSeleccion");






// Calcular precio

quitarMensajeError();

// Se verifican los siguientes campos vacíos
if (nombre.value === ""){
    nombre.classList.add("is-invalid");
    divErrorcampoVacio.classList.add("mensajeError");
    nombre.focus();
    return;
}



// Funcion para quitar error del formulario.
function quitarMensajeError() {
    let nodosFormulario = document.querySelectorAll(".form-control, .form-select");
    for (let i; i<nodosFormulario.length; i++) {
        nodosFormulario[i].classList.remove("is-invalid");
    }
    let divNodosErrores = document.querySelectorAll(".invalid-feedback");
    for (let i; i<divNodosErrores.length; i++) {
        divNodosErrores[i].classList.remove("is-mensajeError");
    }
}