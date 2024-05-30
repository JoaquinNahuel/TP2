function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let edad = parseInt(document.getElementById('edad').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje');

    let valido = true;
    let errores = [];

    // Validación del nombre y apellido
    if (nombre === "" || apellido === "" || nombre.length > 50 || apellido.length > 50) {
        errores.push("El nombre y apellido no pueden estar vacíos y deben tener un máximo de 50 caracteres.");
        valido = false;
    }

    // Validación de la edad
    if (isNaN(edad) || edad < 0 || edad < 18) {
        errores.push("La edad no puede ser negativa y debe ser mayor o igual a 18 años.");
        valido = false;
    }

    // Validación de la altura
    if (isNaN(altura) || altura < 0 || altura > 230) {
        errores.push("La altura debe ser un valor positivo y no puede ser mayor a 230 cm.");
        valido = false;
    }

    // Validación del correo electrónico
    if (email === "" || !email.includes("@")) {
        errores.push("El correo electrónico no puede estar vacío y debe incluir '@'.");
        valido = false;
    }

    // Mostrar mensaje de validación
    if (valido) {
        mensaje.textContent = "Formulario válido!";
        mensaje.className = "mensaje-exito";
        mensaje.style.color = "green"; 
    } else {
        mensaje.innerHTML = errores.join("<br>");
        mensaje.className = "mensaje-error";
        mensaje.style.color = "red"; 
    }
}
