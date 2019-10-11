//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector(".btn-entrar").onclick = function(e) {
	const usuarioPrimerNombre = document.querySelector("#usuarioPrimerNombre").value;
	const usuarioSegundoNombre = document.querySelector("#usuarioSegundoNombre").value;
	const usuarioApellido = document.querySelector("#usuarioApellido").value;
	const usuarioEdad = document.querySelector("#usuarioEdad").value;
	e.preventDefault(); // Encontré ésta alternativa al return false, es válida?
	document.querySelector("#mensajeBienvenida").innerHTML = `Bienvenidx ${usuarioPrimerNombre}`;
	document.querySelector("#resultado").rows = 3;
	document.querySelector(
		"#resultado"
	).value = `Tu primer nombre es ${usuarioPrimerNombre}, tu segundo nombre es ${usuarioSegundoNombre}, tu apellido es ${usuarioApellido} y tenés ${usuarioEdad}`;
};
