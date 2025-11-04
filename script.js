import { barcelona, roma, paris, londres } from "./ciudades.js";
// Obtener elementos del dom
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio")

//Agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {

    //Remover todos los active
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //Agregar active al que corresponda
    this.classList.add("active");

    //Traer la información del objeto correspondiente a la elección
    let contenido = obetenerContenido(this.textContent);

    //Mostrar contenid en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML =  contenido.precio;

  });
});

//Función para traer la información correcta desde ciudades.js
function obetenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    París: paris,
    Roma: roma,
    Londres: londres,
  };
  return contenido[enlace];
}
