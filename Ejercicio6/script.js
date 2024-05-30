function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var edad = parseInt(document.getElementById('edad').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje');

    var errores = [];

    // Validación del nombre
    if (nombre === "" || nombre.length > 50) {
        errores.push("El nombre no puede estar vacío y debe tener un máximo de 50 caracteres.");
    }

    // Validación del apellido
    if (apellido === "" || apellido.length > 50) {
        errores.push("El apellido no puede estar vacío y debe tener un máximo de 50 caracteres.");
    }

    // Validación de la edad
    if (isNaN(edad) || edad < 0) {
        errores.push("La edad no debe ser negativa.");
    } else if (edad < 18) {
        errores.push("Debe ser mayor de edad.");
    }

    // Validación de la altura
    if (isNaN(altura) || altura < 0) {
        errores.push("La altura no puede ser negativa.");
    } else if (altura > 230) {
        errores.push("La altura no puede ser mayor a 230 cm.");
    }

    // Validación del correo electrónico
    if (email === "" || !email.includes('@')) {
        errores.push("El correo electrónico no puede estar vacío y debe incluir '@'.");
    }

    // Mostrar mensaje de validación
    if (errores.length > 0) {
        mensaje.innerHTML = errores.join("<br>");
        mensaje.className = "mensaje-error";
    } else {
        mensaje.innerHTML = "Todas las validaciones son correctas.";
        mensaje.className = "mensaje-exito";
    }
    
    mensaje.style.display = "block";
}
