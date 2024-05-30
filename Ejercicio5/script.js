function calcularArea() {
    var A = parseFloat(document.getElementById('A').value);
    var B = parseFloat(document.getElementById('B').value);
    var C = parseFloat(document.getElementById('C').value);

    if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
        alert('Por favor, introduce valores válidos y positivos para A, B y C.');
        return;
    }

    if (A <= C) {
        alert('A debe ser mayor que C.');
        return;
    }

    var areaRectangulo = B * C;
    var areaTriangulo = 0.5 * B * (A - C);
    var areaTotal = areaRectangulo + areaTriangulo;

    alert('El área del terreno es: ' + areaTotal.toFixed(2) + ' metros cuadrados');
}
