/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let inputCounter = 0;

document.querySelector("#agregar-familiar").onclick = function(e) {
	e.preventDefault();
	agregarElemento();
};
document.querySelector("#eliminar-familiar").onclick = function(e) {
	e.preventDefault();
	eliminarElemento();
};

document.querySelector("#calcular").onclick = function(e) {
	e.preventDefault();
	const inputsEdadesCrudo = document.querySelectorAll(".generated-element-input");
	const inputsEdades = [];
	for (let elemento of inputsEdadesCrudo) {
		inputsEdades.push(Number(elemento.value));
	}
	const contenedorOutput = document.querySelector("#output");
	contenedorOutput.appendChild(crearElementoParrafo(calcularSueldoPromedio(inputsEdades), "promedio"));
	contenedorOutput.appendChild(crearElementoParrafo(calcularSueldoMinimo(inputsEdades), "mínimo"));
	contenedorOutput.appendChild(crearElementoParrafo(calcularSueldoMaximo(inputsEdades), "máximo"));
};

function agregarElemento() {
	const newLabel = document.createElement("label");
	newLabel.for = `Familiar ${inputCounter + 1}`;
	newLabel.textContent = `Sueldo anual familiar ${inputCounter + 1}`;
	newLabel.classList.add("generated-element-label");
	const newInput = document.createElement("input");
	newInput.id = `familiar-${inputCounter + 1}`;
	newInput.classList.add("generated-element-input");
	document.querySelector("#element-container").appendChild(newLabel);
	document.querySelector("#element-container").appendChild(newInput);
	inputCounter++;
}

function eliminarElemento() {
	if (inputCounter === 0) {
		return false;
	}
	const inputs = document.querySelectorAll(".generated-element-input");
	inputs[inputs.length - 1].remove();
	const labels = document.querySelectorAll(".generated-element-label");
	labels[labels.length - 1].remove();
	inputCounter--;
}

document.querySelector("#reset").onclick = function(e) {
	e.preventDefault();
	const inputs = document.querySelectorAll(".generated-element-input");
	inputs.forEach(element => {
		element.remove();
	});
	const labels = document.querySelectorAll(".generated-element-label");
	labels.forEach(element => {
		element.remove();
	});
	const paragraphs = document.querySelectorAll(".paragraph-element");
	paragraphs.forEach(element => {
		element.remove();
	});
	inputCounter = 0;
};

function calcularSueldoPromedio(arraySueldos) {
	let sueldoPromedio = 0;
	for (let i = 0; i < arraySueldos.length; i++) {
		sueldoPromedio += arraySueldos[i];
	}
	return sueldoPromedio / arraySueldos.length;
}
function calcularSueldoMinimo(arraySueldos) {
	let sueldoMinimo = arraySueldos[0];
	for (let i = 0; i < arraySueldos.length; i++) {
		if (arraySueldos[i] < sueldoMinimo) {
			sueldoMinimo = arraySueldos[i];
		}
	}
	return sueldoMinimo;
}
function calcularSueldoMaximo(arraySueldos) {
	let sueldoMaximo = arraySueldos[0];
	for (let i = 0; i < arraySueldos.length; i++) {
		if (arraySueldos[i] > sueldoMaximo) {
			sueldoMaximo = arraySueldos[i];
		}
	}
	return sueldoMaximo;
}
function crearElementoParrafo(valorInterno, nombreFuncion) {
	const nuevoParrafo = document.createElement("p");
	nuevoParrafo.classList.add("paragraph-element");
	nuevoParrafo.innerHTML = `El sueldo ${nombreFuncion} es ${valorInterno}`;
	return nuevoParrafo;
}
