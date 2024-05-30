document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de peso y estatura
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    // Calcular el IMC
    const imc = peso / (estatura * estatura);

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)}`;
});
