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

document.querySelector("#empezar").onclick = function(e) {
	e.preventDefault();
	let cantidadClases = document.querySelector("#cantidadClases").value;
	if (cantidadClases === "") {
		cantidadClases = 0;
	}
	document.querySelector("#empezar").disabled = true;
	document.querySelector("#cantidadClases").disabled = true;
	document.querySelector("#duracionHoras").disabled = false;
	document.querySelector("#duracionMinutos").disabled = false;
	document.querySelector("#duracionSegundos").disabled = false;
	document.querySelector("#proximaClase").disabled = false;
};
