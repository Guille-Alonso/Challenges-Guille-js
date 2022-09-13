//Armar un piedra papel o tijeras, donde el jugador juegue contra un bot.

//* Resolución

let options = ["piedra","papel","tijera"];
let user = prompt("Elija entre piedra-papel-tijera");
if(user != null){
user.toLowerCase().trim(); 

if(user == 'piedra' || user == 'papel' || user == 'tijera'){
   startGame();
}else  alert("debe ingresar piedra papel ó tijera");

function startGame(){
let aleatorio = Math.floor(Math.random() * 2.99);
let option = options[aleatorio];
console.log(option);

switch(true){
case user == option:
    alert("empate");
    break;
case user == "piedra" && option =="papel":
    alert("gano el bot");
    break;
case user == "papel" && option == "tijera":
    alert("gano el bot");
    break;
case user == "tijera" && option =="piedra":
    alert("gano el bot");
    break;
default: alert("gano el usuario");
}
}
}
