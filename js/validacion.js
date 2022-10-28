const contraseña1 = document.getElementById("password1");
const contraseña2 = document.getElementById("password2");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail = document.getElementById("email");
const invalidCheck = document.getElementById("invalidCheck");
const inputList = document.getElementsByTagName("input");
let btnOk = false;

const caracterMail = (e) => {
	return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
		e
	);
};

const btn = document.getElementById("btn");

function validar(el, tipo = "error") {
	let inp = el;

	if (tipo === "error") {
		inp.classList.remove("is-valid");
		inp.classList.add("is-invalid");
	} else {
		inp.classList.remove("is-invalid");
		inp.classList.add("is-valid");
	}
}
function validarForm() {
	// convertir esto en una función para poder callearla dentro de in addeventlistner("input", ~~validaciones)
	if (contraseña1.value.trim() != "" && contraseña1.value.length >= 6) {
		validar(contraseña1, "c");
	} else {
		validar(contraseña1);
	}
	if (contraseña2.value.trim() != "" && contraseña1.value == contraseña2.value && contraseña1.value.length >= 6) {
		validar(contraseña2, "c");
	} else {
		validar(contraseña2);
	}
	if (nombre.value.trim() != "") {
		validar(nombre, "c");
	} else {
		validar(nombre);
	}
	if (apellido.value.trim() != "") {
		validar(apellido, "c");
	} else {
		validar(apellido);
	}
	if (mail.value.trim() != "" && caracterMail(mail.value)) {
		validar(mail, "c");
	} else {
		validar(mail);
	}
	if (invalidCheck.checked) {
		document.getElementById("linkModal").classList.remove("link-danger");
		document.getElementById("termError").classList.remove("d-inline");
		validar(invalidCheck, "c");
	} else {
		document.getElementById("termError").classList.add("d-inline");
		document.getElementById("linkModal").classList.add("link-danger");
		validar(invalidCheck);
	}
}

for (const input of inputList) {
	input.addEventListener("input", () => {
		if (btnOk) {
			validarForm();
		}
	});
}

btn.addEventListener("click", (e) => {
	e.preventDefault();
	validarForm();
	btnOk = true;
});
