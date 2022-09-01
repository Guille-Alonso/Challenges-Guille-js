/*Obtener la base y la altura de un triángulo, y el radio de un circulo.
Mostrar en consola el área del triangulo y del círculo.

Pista: 
- Área del triángulo: (base x altura) / 2
- Área del círculo: pi x radio^2*/

//* Resolución

let base = parseFloat(prompt("Ingrese la base del triangulo"));
let altura = parseFloat(prompt("Ingrese la altura del triangulo"));
let banderaTriangulo = false;
let banderaCirculo = false;

if(isNaN(base) || isNaN(altura)){
    banderaTriangulo = true;
}
if(banderaTriangulo==true)
{
    console.log("No ingresó numeros para calcular el area del triangulo..");
}else  console.log("área del triangulo: ",parseFloat(((base*altura)/2).toFixed(2)));

let radio = parseFloat(prompt("Ingrese el radio del circulo"));
if(isNaN(radio)){
    banderaCirculo = true;
}
if(banderaCirculo==true){
    console.log("No ingresó un numero para calcular el area del circulo..");
}else  console.log("área del circulo: ",parseFloat((Math.PI * Math.pow(radio,2)).toFixed(2)));