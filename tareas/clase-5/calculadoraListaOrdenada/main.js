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

function obtenerNumeroMasFrecuente(arrayInput) {
	if (arrayInput.length === 0) {
		return null;
	}

	const arrayTrabajable = [];
	arrayInput.forEach(element => {
		arrayTrabajable.push(Number(element.innerHTML));
		if (Number(element.innerHTML === NaN)) {
			return false;
		}
	});

	const contador = [];
	for (let i = 0; i < arrayTrabajable.length; i++) {
		if (contador[arrayTrabajable[i]]) {
			contador[arrayTrabajable[i]] += 1;
		} else {
			contador[arrayTrabajable[i]] = 1;
		}
	}

	let cantidadMaxima = arrayTrabajable[0];
	let valorMaximo = arrayTrabajable[0];

	for (let j = 0; j < contador.length; j++) {
		if (contador[j] > cantidadMaxima) {
			cantidadMaxima = contador[j];
			valorMaximo = contador.indexOf(contador[j]);
		}
	}

	return valorMaximo;
}

const arrayPrueba = [1, 1, 3, 3, 3, 3, 3, 3];
console.log(obtenerNumeroMasFrecuente(listaOriginal));

/*   function obtenerNumeroMasFrecuenteObjetos(valores) {
	if (valores.length === 0) {
	  return null;
	}
  
	const contador = {};
	for (let i = 0; i < valores.length; i++) {
	  if (contador[valores[i]]) {
		contador[valores[i]] += 1;
	  } else {
		contador[valores[i]] = 1;
	  }
  
	}
  
	return contador;
  }
  
  const arrayPrueba = [1, 2, 1, 3, 1, 2, 1, 3, 1, 3, 4, 2, 1, 3, 2, 1, 3, 1];
  console.log(obtenerNumeroMasFrecuenteObjetos(arrayPrueba)); */
