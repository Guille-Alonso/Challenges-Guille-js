/*Pedir dos números al usuario y mostrar por consola o por alerta si el primer número es mayor, 
menor o igual al número dos*/

//* Resolución

let numero1 = parseFloat(prompt("Ingrese un numero"));
let numero2 = parseFloat(prompt("Ingrese un segundo numero"));

switch(true){
    case numero1 > numero2:
        alert("El primer numero es mayor que el segundo numero");
        break;
    case numero1 < numero2:
        alert("El primer numero es menor que el segundo numero");
        break;
    case numero1 == numero2:
        alert("El primer numero es igual al segundo numero");
        break;
    default:
        alert("Algo no va bien, ingrese numeros");
}   