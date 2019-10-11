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
document.querySelector("#cantidadClasesTotal").value = "";

let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

document.querySelector("#empezar").onclick = function(e) {
	// Evitar que el boton empezar envíe el form
	e.preventDefault();

	// Tomar el valor del input y guardarlo en cantidad clases
	let cantidadClases = document.querySelector("#cantidadClasesTotal").value;

	// Si se deja el input vacío se lo toma por default como 0;
	if (cantidadClases === "") {
		cantidadClases = 0;
	}
	// Deshabilitación de input + boton de la 1ra etapa
	deshabilitarInputsEtapa1();

	// Habilitación de inputs correspondientes para la 2da etapa
	habilitarInputsEtapa2();

	// Inicialización del counter de clases
	let claseCounter = 1;
	document.querySelector("#claseCounter").innerHTML = `Clase ${claseCounter} de ${cantidadClases}`;

	document.querySelector("#proximaClase").onclick = function(e) {
		if (claseCounter <= cantidadClases) {
			e.preventDefault();
			sumarValoresInputs();
			limpiarInputs();
		} else {
			document.querySelector("#claseCounter").innerHTML = `Clase ${claseCounter} de ${cantidadClases}`;
			document.querySelector("#proximaClase").onclick = function(e) {
				e.preventDefault();
				document.querySelector(
					"#result"
				).innerHTML = `${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`;
			};
		}
	};
	claseCounter++;
};

function sumarValoresInputs() {
	horasTotales += Number(document.querySelector("#duracionHoras").value);
	minutosTotales += Number(document.querySelector("#duracionMinutos").value);
	segundosTotales += Number(document.querySelector("#duracionSegundos").value);
}
function limpiarInputs() {
	document.querySelector("#duracionHoras").value = "";
	document.querySelector("#duracionMinutos").value = "";
	document.querySelector("#duracionSegundos").value = "";
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
function habilitarInputsEtapa2() {
	//  No me funciona ésto para no tener que escribir las 4 líneas de abajo
	// document.querySelectorAll(".input-clases").disabled = false;
	document.querySelector("#duracionHoras").disabled = false;
	document.querySelector("#duracionMinutos").disabled = false;
	document.querySelector("#duracionSegundos").disabled = false;
	document.querySelector("#proximaClase").disabled = false;
}
