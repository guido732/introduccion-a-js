/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("#submit-cantidad-familiares").onclick = function(e) {
	e.preventDefault();
	const cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
	if (cantidadFamiliares === 0) {
		return false;
	}
	agregarElementos(cantidadFamiliares);
};
function agregarElementos(cantidad) {
	for (let i = 0; i < cantidad; i++) {
		const newLabel = document.createElement("label");
		newLabel.for = `Familiar ${i + 1}`;
		newLabel.innerHTML = `Familiar ${i + 1}`;
		newLabel.classList.add("generated-element");
		const newInput = document.createElement("input");
		newInput.id = `familiar-${i + 1}`;
		newInput.classList.add("generated-element");
		document.querySelector("#element-container").appendChild(newLabel);
		document.querySelector("#element-container").appendChild(newInput);
	}
	document.querySelector("#calcular").hidden = false;
	document.querySelector("#cantidad-familiares").disabled = true;
	document.querySelector("#submit-cantidad-familiares").disabled = true;
}

/* 
Tomar valor de familiares
generar n cantidad de elementos (función)
*deshabilitar primera etapa
*habilitar 2da etapa
completar campos
calcular
mostrar resultados en #output
*/
