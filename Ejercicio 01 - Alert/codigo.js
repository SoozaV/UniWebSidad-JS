// Se obtienen los elementos del DOM
var boton = document.getElementById("alert");
var ejercicio = document.getElementById("ejercicio");
var codigo = document.getElementById("codigo");
var mostrarEjercicioBtn = document.getElementById("mostrarEjercicio");
var mostrarCodigoBtn = document.getElementById("mostrarCodigo");

// Mensaje a mostrar en el alert. 
// \n es para mostrar un salto de línea
// \' sirve para mostrar comillas simples
// \" sirve para mostrar comillas dobles
var mensaje = "Hola Mundo!\nQué fácil es incluir \'comillas simples\' y \"comillas dobles\"";

// Función para cambiar la clase del <div> ejercicio.
function mostrarEjercicio(){
    ejercicio.classList.toggle("mostrar");
    ejercicio.classList.contains("mostrar") ? mostrarEjercicioBtn.innerHTML = "Ocultar instrucciones" : mostrarEjercicioBtn.innerHTML = "Mostrar instrucciones";
}

// Función para cambiar la clase del <div> código.
function mostrarCodigo(){
    codigo.classList.toggle("mostrar");
    codigo.classList.contains("mostrar") ? mostrarCodigoBtn.innerHTML = "Ocultar código" : mostrarCodigoBtn.innerHTML = "Mostrar código";
}

// Función para mostrar los mensajes de alerta.
function alerta(){
    alert(mensaje);
    alert("Soy el primer script");
}

boton.onclick = alerta;
mostrarEjercicioBtn.onclick = mostrarEjercicio;
mostrarCodigoBtn.onclick = mostrarCodigo;