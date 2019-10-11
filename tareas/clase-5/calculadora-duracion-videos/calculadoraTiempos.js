//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/* 
1- ingresar clases totales a calcular
2- hacer clic en empezar
3- deshabilitar input + botón
4- habilitar otros inputs + botón de próxima clase + claseCounter++
5- completar + hacer clic en proxima clase
6- alojar valores, limpiar formularios y repetir
7- al llegar al valor de clases final salir del loop iterativo
8- deshabilitar todos los inputs
9- hacer cálculos y mostrar valores en <strong>
10- botón de empezar de nuevo
11- reiniciar (limpiar, inhabilitar y habilitar valores correspondientes)
*/

// Forzar disable para cuando se hace F5 o CTRL+R en navegador
deshabilitarInputsEtapa2();
limpiarInputs();
let horasTotales;
let minutosTotales;
let segundosTotales;
let cantidadClases;
let claseCounter;
reiniciarValoresCounters();

document.querySelector("#empezar").onclick = function(e) {
	// Evitar que el boton empezar envíe el form
	e.preventDefault();

	// Tomar el valor del input y guardarlo en cantidad clases
	cantidadClases = document.querySelector("#cantidadClasesTotal").value;
	// Si se deja el input vacío se lo toma por default como 0;
	// ! Cambiar a ternario
	if (cantidadClases === "") {
		cantidadClases = 0;
	}
	// Deshabilitar input + boton de la 1ra etapa
	// Limpiar valopres
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
		document.querySelector("#resultado").innerHTML = "0 horas 0 minutos 0 segundos";
	} else if (claseCounter > cantidadClases) {
		limpiarInputs();
		document.querySelector(
			"#resultado"
		).innerHTML = `Total: ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`;
		document.querySelector("#reset").hidden = false;
		deshabilitarInputsEtapa1();
		deshabilitarInputsEtapa2();
		document.querySelector("#reset").onclick = function(e) {
			e.preventDefault();
			document.querySelector("#resultado").innerHTML = "";
			document.querySelector("#claseCounter").innerHTML = "";
			document.querySelector("#reset").hidden = true;
			habilitarInputsEtapa1();
			reiniciarValoresCounters();
		};
	} else {
		document.querySelector("#claseCounter").innerHTML = `Clase ${claseCounter} de ${cantidadClases}`;
		document.querySelector("#proximaClase").onclick = function(e) {
			document.querySelector("#claseCounter").innerHTML = `Clase ${claseCounter} de ${cantidadClases}`;
			e.preventDefault();
			sumarValoresInputs();
			limpiarInputs();
			claseCounter++;
			sumaValoresClases();
		};
	}
}

function sumarValoresInputs() {
	horasTotales += Number(document.querySelector("#duracionHoras").value);
	minutosTotales += Number(document.querySelector("#duracionMinutos").value);
	segundosTotales += Number(document.querySelector("#duracionSegundos").value);
}
function limpiarInputs() {
	document.querySelector("#duracionHoras").value = "";
	document.querySelector("#duracionMinutos").value = "";
	document.querySelector("#duracionSegundos").value = "";
	document.querySelector("#cantidadClasesTotal").value = "";
}
function deshabilitarInputsEtapa1() {
	document.querySelector("#empezar").disabled = true;
	document.querySelector("#cantidadClasesTotal").disabled = true;
}
function deshabilitarInputsEtapa2() {
	document.querySelector("#duracionHoras").disabled = true;
	document.querySelector("#duracionMinutos").disabled = true;
	document.querySelector("#duracionSegundos").disabled = true;
	document.querySelector("#proximaClase").disabled = true;
}
function habilitarInputsEtapa1() {
	document.querySelector("#empezar").disabled = false;
	document.querySelector("#cantidadClasesTotal").disabled = false;
}
function habilitarInputsEtapa2() {
	document.querySelector("#duracionHoras").disabled = false;
	document.querySelector("#duracionMinutos").disabled = false;
	document.querySelector("#duracionSegundos").disabled = false;
	document.querySelector("#proximaClase").disabled = false;
}
function reiniciarValoresCounters() {
	horasTotales = 0;
	minutosTotales = 0;
	segundosTotales = 0;
	cantidadClases = 0;
	claseCounter = 1;
}
