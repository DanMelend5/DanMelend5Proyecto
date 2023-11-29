console.log("conectado");

// se define valor del ticket
const valorTicket = 200;

// Se definen los valores por categoría
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
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
let divNombreCampoVacio = document.getElementById("divNombreCampoVacio");
let divApellidoCampoVacio = document.getElementById("divApellidoCampoVacio");
let divCorreoInvalido = document.getElementById("divCorreoInvalido");
let divErrorSeleccion = document.getElementById("divErrorSeleccion");
let divCantidadCampoVacio = document.getElementById("divCantidadCampoVacio");
let divErrorNumerodeTickets = document.getElementById("divErrorNumerodeTickets");


// Funcion para quitar error del formulario.
function quitarMensajeError() {
	let arrayNodosFormulario = document.querySelectorAll(".form-control, .form-select");
	for (let i = 0; i < arrayNodosFormulario.length; i++) {
		arrayNodosFormulario[i].classList.remove("is-invalid");
		arrayNodosFormulario[i].classList.remove("invalid-feedback");
		console.log("Removed 'is-invalid' class");
	}
}



// Se verifican los siguientes campos vacíos
quitarMensajeError();

// Calcular precio
function totalAPagar() {

	if (nombre.value === "") {
		nombre.classList.add("is-invalid");
		divNombreCampoVacio.classList.add("invalid-feedback");
		nombre.focus();
		return;
	}

	if (apellido.value === "") {
		apellido.classList.add("is-invalid");
		divApellidoCampoVacio.classList.add("invalid-feedback");
		apellido.focus();
		return;
	}

	if (correo.value === "") {
		correo.classList.add("is-invalid");
		divCorreoInvalido.classList.add("invalid-feedback");
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
		divCorreoInvalido.classList.add("invalid-feedback");
		correo.focus();
		return;
	}

	//Numero de tickets
	if ((cantidadTicket.value == "")) {
		divCantidadCampoVacio.classList.add("invalid-feedback");
		cantidadTicket.focus();
		return;
	}

	if (isNaN(cantidadTicket.value) || (cantidadTicket.value <= 0)) {
		divErrorNumerodeTickets.classList.add("invalid-feedback");
		cantidadTicket.focus();
		return;

	}

	//Multiplicar cantidad de tickets
	let totalPrecioTickets = (cantidadTicket.value * valorTicket);


	if (categoriaSeleccion.value == "----") {
		categoriaSeleccion.classList.add("is-invalid");
		divErrorSeleccion.classList.add("invalid-feedback");
		categoriaSeleccion.focus();
		return;
	}




	switch (categoriaSeleccion.value) {
		case "Otro":
			totalPrecioTickets;
			console.log("otro " + totalPrecioTickets);

			break;

		case "Estudiante":
			totalPrecioTickets = totalPrecioTickets - (descuentoEstudiante / 100 * totalPrecioTickets);
			console.log("Estudiante");
			break;
		case "Trainee":
			totalPrecioTickets = totalPrecioTickets - (descuentoTrainee / 100 * totalPrecioTickets);
			console.log("trainee " + totalPrecioTickets);
			break;
		case "Junior":
			totalPrecioTickets = totalPrecioTickets - (descuentoJunior / 100 * totalPrecioTickets);
			console.log("junior");
			break;
	}

	// Resultado aparece en el campo "total$"
	// Resultado aparece en el campo "total$"
	totalPago.value = totalPrecioTickets;


}


//Boton Comprar
btnComprar.addEventListener('click', totalAPagar);


// Boton Borrar

function reset_totalAPagar() {
	quitarMensajeError();

	let formulario = document.querySelector('form');
	formulario.reset();
	totalPago.value = "";
}

btnBorrar.addEventListener('click', reset_totalAPagar);