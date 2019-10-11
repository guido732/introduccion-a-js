//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

// Forzar disable para cuando se hace F5 o CTRL+R en navegador

/* 
<form action="">
				<h1>Calculadora de duración de videos r/Argentina-Programa</h1>
				<div class="cantidad-container">
					<label for="cantidadClases">Ingresá la cantidad de clases a calcular</label>
					<input type="number" name="cantidadClases" id="cantidadClasesTotal" required />
					<button type="submit" id="empezar" class="btn-calc">Empezar</button>
				</div>
				<p id="claseCounter"></p>
				<label for="duracionHoras">Ingresá la cantidad de horas</label>
				<input type="number" name="duracionHoras" id="duracionHoras" class="input-clases" disabled />
				<label for="duracionMinutos">Ingresá la cantidad de minutos</label>
				<input type="number" name="duracionMinutos" id="duracionMinutos" class="input-clases" disabled />
				<label for="duracionSegundos">Ingresá la cantidad de segundos</label>
				<input type="number" name="duracionSegundos" id="duracionSegundos" class="input-clases" disabled />
				<button type="submit" id="proximaClase" class="btn-calc input-clases" disabled>Proxima Clase</button>
				<button type="reset" id="boton-reset" class="btn-calc" hidden>
					Reiniciar
				</button>
				<strong id="resultado"></strong>
			</form>

*/
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
	// ! Cambiar a ternario
	if (cantidadClases === "") {
		cantidadClases = 0;
	}

	// Deshabilitación de input + boton de la 1ra etapa
	deshabilitarInputsEtapa1();
	limpiarInputs();

	// Habilitación de inputs correspondientes para la 2da etapa
	habilitarInputsEtapa2();
	sumaValoresClases();
};

function sumaValoresClases() {
	if (cantidadClases === 0) {
		deshabilitarInputsEtapa2();
		habilitarInputsEtapa1();
		textoResultado.innerHTML = "0 horas 0 minutos 0 segundos";
		botonReset.hidden = false;
		botonReset.onclick = function(e) {
			e.preventDefault();
			resetProgram();
		};
	} else if (claseCounter > cantidadClases) {
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
	horasTotales += Number(inputHoras.value);
	minutosTotales += Number(inputMinutos.value);
	segundosTotales += Number(inputSegundos.value);
}
function limpiarInputs() {
	inputHoras.value = "";
	inputMinutos.value = "";
	inputSegundos.value = "";
	document.querySelector("#cantidadClasesTotal").value = "";
}
function deshabilitarInputsEtapa1() {
	botonEmpezar.disabled = true;
	document.querySelector("#cantidadClasesTotal").disabled = true;
}
function deshabilitarInputsEtapa2() {
	inputHoras.disabled = true;
	inputMinutos.disabled = true;
	inputSegundos.disabled = true;
	botonProximaClase.disabled = true;
}
function habilitarInputsEtapa1() {
	botonEmpezar.disabled = false;
	document.querySelector("#cantidadClasesTotal").disabled = false;
}
function habilitarInputsEtapa2() {
	inputHoras.disabled = false;
	inputMinutos.disabled = false;
	inputSegundos.disabled = false;
	botonProximaClase.disabled = false;
}
function reiniciarValoresCounters() {
	horasTotales = 0;
	minutosTotales = 0;
	segundosTotales = 0;
	cantidadClases = 0;
	claseCounter = 1;
}
function resetProgram() {
	textoResultado.innerHTML = "";
	displayClaseCounter.innerHTML = "";
	botonReset.hidden = true;
	habilitarInputsEtapa1();
	reiniciarValoresCounters();
	limpiarInputs();
}
