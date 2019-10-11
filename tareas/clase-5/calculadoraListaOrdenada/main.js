//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listaOriginal = document.querySelectorAll("li");

function obtenerPromedio(array) {
	let counter = 0;
	let promedio = 0;
	for (let elemento of array) {
		counter += Number(elemento.innerHTML);
	}
	promedio = counter / array.length;
	return promedio;
}
function obtenerMinimo(array) {
	let valorMinimo = Number(array[0].innerHTML);
	for (let elemento of array) {
		if (Number(elemento.innerHTML) < valorMinimo) {
			valorMinimo = Number(elemento.innerHTML);
		}
	}
	return valorMinimo;
}
function obtenerMaximo(array) {
	let valorMaximo = Number(array[0].innerHTML);
	for (let elemento of array) {
		if (Number(elemento.innerHTML) > valorMaximo) {
			valorMaximo = Number(elemento.innerHTML);
		}
	}
	return valorMaximo;
}
console.log(obtenerMaximo(listaOriginal));
