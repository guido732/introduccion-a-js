//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

// Counters
let horasTotales;
let minutosTotales;
let segundosTotales;
let cantidadClases;
let claseCounter;

// Inputs y botones
let textoResultado = document.querySelector("#resultado");
let displayClaseCounter = document.querySelector("#claseCounter");
let inputHoras = document.querySelector("#duracionHoras");
let inputMinutos = document.querySelector("#duracionMinutos");
let inputSegundos = document.querySelector("#duracionSegundos");

const botonReset = document.querySelector("#boton-reset");
const botonProximaClase = document.querySelector("#proximaClase");
const botonEmpezar = document.querySelector("#empezar");

// Limpiadores / Inicializadores
deshabilitarInputsEtapa2();
limpiarInputs();
reiniciarValoresCounters();

// Función principal
botonEmpezar.onclick = function(e) {
	// Evitar que el boton empezar envíe el form
	e.preventDefault();

	// Tomar el valor del input y guardarlo en cantidad clases
	cantidadClases = document.querySelector("#cantidadClasesTotal").value;

	// Si se deja el input vacío se lo toma por default como 0;
	cantidadClases === "" ? (cantidadClases = 0) : null;

	// Deshabilitación de input + boton de la 1ra etapa
	deshabilitarInputsEtapa1();
	limpiarInputs();

	// Habilitación de inputs correspondientes para la 2da etapa
	habilitarInputsEtapa2();
	sumaValoresClases();
};

function sumaValoresClases() {
	if (cantidadClases === 0) {
		// Si no se ingresa valor de clases deshabilitar todo, mostrar reset, mostrar counter final en 0;
		deshabilitarInputsEtapa2();
		deshabilitarInputsEtapa1();
		textoResultado.innerHTML = "0 horas 0 minutos 0 segundos";
		botonReset.hidden = false;
		botonReset.onclick = function(e) {
			e.preventDefault();
			resetProgram();
		};
	} else if (claseCounter > cantidadClases) {
		// Si el counter supera la cantidad de clases ingresadas por el usuario
		// Limpiar inputs, mostrar resultado, mostrar botón de reset, deshabilitar inputs 1 & 2, funcionalidad para cuando se hace clic en reset.
		limpiarInputs();
		textoResultado.innerHTML = `Total: ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`;
		botonReset.hidden = false;
		deshabilitarInputsEtapa1();
		deshabilitarInputsEtapa2();
		botonReset.onclick = function(e) {
			e.preventDefault();
			resetProgram();
		};
	} else {
		// Si el numero del counter está dentro del máximo de clases
		// Mostrar el contador de clase actual (clase x de y)
		// Al hacer clic en el botón próxima clase: sumar valores, limpiar inputs, aumentar el counter y sumar vuelve a llamarse a si misma para volver a chequear los contadores de clases vs input
		displayClaseCounter.innerHTML = `Clase ${claseCounter} de ${cantidadClases}`;
		botonProximaClase.onclick = function(e) {
			e.preventDefault();
			sumarValoresInputs();
			limpiarInputs();
			claseCounter++;
			sumaValoresClases();
		};
	}
}

function sumarValoresInputs() {
	// Convierte valores a numero y suma valores de los inputs a los counters
	horasTotales += Number(inputHoras.value);
	minutosTotales += Number(inputMinutos.value);
	segundosTotales += Number(inputSegundos.value);
}
function limpiarInputs() {
	// Limpia todos los inputs
	inputHoras.value = "";
	inputMinutos.value = "";
	inputSegundos.value = "";
	document.querySelector("#cantidadClasesTotal").value = "";
}
function habilitarInputsEtapa1() {
	// Habilita el botón de comenzar programa y el input de cantidad de clases
	botonEmpezar.disabled = false;
	document.querySelector("#cantidadClasesTotal").disabled = false;
}
function deshabilitarInputsEtapa1() {
	// Deshabilita el botón de comenzar programa y el input de cantidad de clases
	botonEmpezar.disabled = true;
	document.querySelector("#cantidadClasesTotal").disabled = true;
}
function habilitarInputsEtapa2() {
	// Habilita inputs y botón de próxima clase
	inputHoras.disabled = false;
	inputMinutos.disabled = false;
	inputSegundos.disabled = false;
	botonProximaClase.disabled = false;
}
function deshabilitarInputsEtapa2() {
	// Deshabilita inputs y botón de próxima clase
	inputHoras.disabled = true;
	inputMinutos.disabled = true;
	inputSegundos.disabled = true;
	botonProximaClase.disabled = true;
}
function reiniciarValoresCounters() {
	// Al finalizar el programa se llama ésta función que resetea contadores y variables de totales
	horasTotales = 0;
	minutosTotales = 0;
	segundosTotales = 0;
	cantidadClases = 0;
	claseCounter = 1;
}
function resetProgram() {
	// Borra el mensaje de resultado final, borra el counter de clase (clase x de y), oculta el botón de reset, habilita inputs de etapa 1, reinicia valores de counters y limpia inputs de cualquier valor previo
	textoResultado.innerHTML = "";
	displayClaseCounter.innerHTML = "";
	botonReset.hidden = true;
	habilitarInputsEtapa1();
	reiniciarValoresCounters();
	limpiarInputs();
}
