// se define valor del ticket
const valorTicket = 200;

// Se definen los valores por categoría
let descuentoEstudiante = 80;
let descuentoTrainee= 50;
let descuentoJunior = 15;

// Elementos en variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidadTicket = document.getElementById("cantidadTicket");
let categoriaSeleccion = document.getElementById("categoriaSeleccion");
let btnComprar = document.getElementById("btnComprar");
let btnBorrar = document.getElementById("btnBorrar");


// Elementos de mensajes de Error
let divErrorcampoVacio = document.getElementById("divErrorCampoVacio");
let divCorreoInvalido = document.getElementById("divCorreoInvalido");
let divErrorSeleccion = document.getElementById("divErrorSeleccion");
let divErrorNumerodeTickets = document.getElementById("divErrorNumerodeTickets");



// Funcion para quitar error del formulario.
function quitarMensajeError() {
    let arrayNodosFormulario = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i<arrayNodosFormulario.length; i++) {
        arrayNodosFormulario[i].classList.remove("is-invalid");
    }
    let arrayDivNodosErrores = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i<arrayDivNodosErrores.length; i++) {
        arrayDivNodosErrores[i].classList.remove("mensajeError");
    }
}



// Se verifican los siguientes campos vacíos
quitarMensajeError();

// Calcular precio
function totalAPagar(){

    if (nombre.value === ""){
        nombre.classList.add("is-invalid");
        divErrorcampoVacio.classList.add("mensajeError");
        nombre.focus();
        return;
    }

    if (apellido.value === ""){
        apellido.classList.add("is-invalid");
        divErrorcampoVacio.classList.add("mensajeError");
        apellido.focus();
        return;
    }

    if (correo.value === ""){
        correo.classList.add("is-invalid");
        divErrorcampoVacio.classList.add("mensajeError");
        correo.focus();
        return;
    }

        //para determinar que el correo es válido
    const correoValido = email => {
        const correoRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return correoRegex.test(email);
        }
    
    if (!correoValido(correo.value)) {
        correo.classList.add("is-invalid");
        divCorreoInvalido.classList.add("mensajeError"); 
        correo.focus();
        return;
    }

    //Numero de tickets
    if ((cantidadTicket.value =="")){
        divErrorcampoVacio.classList.add("mensajeError");  
        cantidadTicket.focus();
        return; 
    }

    if (isNaN (cantidadTicket.value) || (cantidadTicket.value <= 0)) {
        divErrorNumerodeTickets.classList.add("mensajeError");
        cantidadTicket.focus();
        return; 

    }

    if (categoriaSeleccion.value == "----"){
        apellido.classList.add("is-invalid");
        categoriaSeleccion.add("mensajeError");
        categoriaSeleccion.focus();
        return;
    }
    
    //Multiplicar cantidad de tickets
    let totalPrecioTickets = (cantidadTicket.value * valorTicket);

    switch (categoriaSeleccion.value){
        case "0":
            totalPrecioTickets;
            break;
        case "1":
            totalPrecioTickets = totalPrecioTickets - (descuentoEstudiante / 100 * totalPrecioTickets);
            break;
        case "2":
            totalPrecioTickets = totalPrecioTickets - (descuentoTrainee / 100 * totalPrecioTickets);
            break;
        case "3":
            totalPrecioTickets = totalPrecioTickets - (descuentoJunior / 100 * totalPrecioTickets);
            break;
    }

    // Resultado aparece en el campo "total$"
        totalPago.innerHTML = totalPrecioTickets;
}


// Boton Reset
function reset_totalAPagar() {
    quitarMensajeError();
    totalPago.innerHTML = "";
}

document.addEventListener('DOMContentLoaded', function() {
    
    btnComprar.addEventListener('click', totalAPagar);
    btnBorrar.addEventListener('click', reset_totalAPagar);
});
