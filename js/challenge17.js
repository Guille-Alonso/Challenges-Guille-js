/*El usuario ingresa un DNI. Comprobar que sea válido, es decir, 
que tenga 7 u 8 dígitos y que no sean todos ceros*/

//* Resolución

let dni = prompt("Ingrese su DNI");
if(isNaN(dni) || dni.length < 7 || dni.length >8 || dni == 0){
alert("debe ingresar un DNI valido.. Ej: 40544896");
}else alert("DNI valido: "+dni);