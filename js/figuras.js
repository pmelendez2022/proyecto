// Código del cuadrado

function perimetroCuadrado (lado) {
    return lado *4;
} 
function areaCuadrado (lado){
    return lado**2;
} 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado (value);
//    document.getElementById("perimetroCuadro").innerText = "Su perímetro es: " + perimetro + " cm.";
    document.getElementById("perimetroCuadro").innerText = `Su perímetro es:  ${perimetro}  cm.`;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const area = areaCuadrado (value);
    document.getElementById("areaCuadro").innerText = "Su área es: " + area + " cm^2.";
}

//Codigo triangulo

function perimetroTriangulo (lado1, lado2, base) {
return lado1 + lado2 + base;
} 

function areaTriangulo (lado1, lado2, lado3) {
    let s = (lado1 + lado2 + lado3)/2
    return (Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3)));
}

function calcularPerimetroTriangulo() {
    let input;
    input = document.getElementById("InputTriangulo1");
    const lado1 = parseInt(input.value);
    input = document.getElementById("InputTriangulo2");
    const lado2 = parseInt(input.value);
    input = document.getElementById("InputTriangulo3");
    const lado3 = parseInt(input.value);

    const perimetro = perimetroTriangulo (lado1, lado2, lado3);
    document.getElementById("perimetroTriangulo").innerText = "Su perímetro es: " + perimetro + " cm.";
}

function calcularAreaTriangulo() {
    let input;
    input = document.getElementById("InputTriangulo1");
    const lado1 = parseInt(input.value);
    input = document.getElementById("InputTriangulo2");
    const lado2 = parseInt(input.value);
    input = document.getElementById("InputTriangulo3");
    const lado3 = parseInt(input.value);

    const area = areaTriangulo (lado1, lado2, lado3);

    document.getElementById("areaTriangulo").innerText = "Su área es: " + area + " cm^2.";
}

//Codigo circulo

function perimetroCirculo (radio) {
    return 2 * radio * Math.PI;
}
function areaCirculo (radio) {
    return Math.PI * radio**2;
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    
    const perimetro =  perimetroCirculo (radio);
    document.getElementById("perimetroCirculo").innerText = "Su perímetro es: " + perimetro + " cm.";
}
function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    
    const area =  areaCirculo (radio);
    document.getElementById("areaCirculo").innerText = "Su área es: " + area + " cm^2.";
}
