//Crear un algoritmo por el cual se simule el lanzamiento de dos dados

//* Resolución

let game = confirm("Que comience el juego");
if(game){
iniciarJuego();
}else if(confirm("Debe aceptar para iniciar la simulación")){
iniciarJuego();
}

function iniciarJuego(){
    let dado1 = Math.ceil(Math.random()*6);
    let dado2 = Math.ceil(Math.random()*6);
    alert('DADO 1: \n '+dado1);
    alert('DADO 2: \n '+dado2);
}
