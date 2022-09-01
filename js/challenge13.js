//Obtener un número del usuario y mostrar en consola o por alerta si es par o impar

//* Resolución

let numero = Number(prompt("ingrese un numero"));

if(isNaN(numero) || !Number.isInteger(numero)){
alert("debe ingresar un numero entero");
}else if(numero%2==0){
alert("el número es par");
}else alert("el número es impar");
