/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#submit-cantidad-familiares").onclick = function(e) {
	e.preventDefault();
	const cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
	if (cantidadFamiliares < 1) {
		return false;
	}
	agregarElementos(cantidadFamiliares);
};
document.querySelector("#calcular-edades").onclick = function(e) {
	e.preventDefault();
	const inputsEdadesCrudo = document.querySelectorAll(".generated-element-input");
	const inputsEdades = [];
	for (let elemento of inputsEdadesCrudo) {
		inputsEdades.push(Number(elemento.value));
	}
	const contenedorOutput = document.querySelector("#output");
	contenedorOutput.appendChild(crearElementoParrafo(calcularEdadPromedio(inputsEdades), "promedio"));
	contenedorOutput.appendChild(crearElementoParrafo(calcularEdadMinima(inputsEdades), "mínima"));
	contenedorOutput.appendChild(crearElementoParrafo(calcularEdadMaxima(inputsEdades), "máxima"));
};
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
	document.querySelector("#submit-cantidad-familiares").disabled = false;
	document.querySelector("#cantidad-familiares").disabled = false;
	document.querySelector("#cantidad-familiares").value = "";
	document.querySelector("#calcular-edades").hidden = true;
};
function agregarElementos(cantidad) {
	for (let i = 0; i < cantidad; i++) {
		const newLabel = document.createElement("label");
		newLabel.for = `Familiar ${i + 1}`;
		newLabel.textContent = `Edad familiar ${i + 1}`;
		newLabel.classList.add("generated-element-label");
		const newInput = document.createElement("input");
		newInput.id = `familiar-${i + 1}`;
		newInput.classList.add("generated-element-input");
		document.querySelector("#element-container").appendChild(newLabel);
		document.querySelector("#element-container").appendChild(newInput);
	}
	document.querySelector("#calcular-edades").hidden = false;
	document.querySelector("#cantidad-familiares").disabled = true;
	document.querySelector("#submit-cantidad-familiares").disabled = true;
}
function calcularEdadPromedio(arrayEdades) {
	let edadPromedio = 0;
	for (let i = 0; i < arrayEdades.length; i++) {
		edadPromedio += arrayEdades[i];
	}
	return edadPromedio / arrayEdades.length;
}
function calcularEdadMinima(arrayEdades) {
	let edadMinima = arrayEdades[0];
	for (let i = 0; i < arrayEdades.length; i++) {
		if (arrayEdades[i] < edadMinima) {
			edadMinima = arrayEdades[i];
		}
	}
	return edadMinima;
}
function calcularEdadMaxima(arrayEdades) {
	let edadMaxima = arrayEdades[0];
	for (let i = 0; i < arrayEdades.length; i++) {
		if (arrayEdades[i] > edadMaxima) {
			edadMaxima = arrayEdades[i];
		}
	}
	return edadMaxima;
}
function crearElementoParrafo(valorInterno, nombreFuncion) {
	const nuevoParrafo = document.createElement("p");
	nuevoParrafo.classList.add("paragraph-element");
	nuevoParrafo.innerHTML = `La edad ${nombreFuncion} es ${valorInterno}`;
	return nuevoParrafo;
}
