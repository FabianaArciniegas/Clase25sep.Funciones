/* Ejercicio: hacer una función que recorra un array de nombres de
personas y los imprima en el html a media que vaya recorriendo
el array */


var nombres = ["andres", "juan", "marcos", "matias", "ricardo"];

function mostrarnombres (nombres) {
   for (let i=0; i<nombres.length; i++){
      document.write(nombres[i] + " ");
  }
}

mostrarnombres(nombres);

