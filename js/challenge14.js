/*Necesito que segun la edad del usuario se muestre por consola un tema destacado de la edad que tiene
Ejemplo:
Tengo 26 años --> Tema de rata blanca
Tengo 15 años --> tema de bad bunny --> respuesta 'El tema para tu edad es me porto bonito'
Tengo 66 --> Tema de gardel*/

//* Resolución

let edad = Number(prompt('cuantos años tienes?'));
if(isNaN(edad) || !Number.isInteger(edad)){
alert("debe ingresar un numero entero");
}else{
switch(true){
    case edad > 20 && edad <=35:
      console.log('%ctema:Paulo Londra-Plan b','color:yellow; font-size:30px;');
      break;
    case edad<20 && edad>=12:
      console.log('%ctema:bad bunny-Efecto','color:yellow; font-size:30px;');
      break;
    case edad>35 && edad<=50:
      console.log('%ctema:chayanne-Un siglo sin ti','color:yellow; font-size:30px;');
      break;
    default:
      console.log('%csos muy viejo o muy joven','color:yellow; font-size:30px;');
}
}