// Se obtienen los elementos del DOM
var ejercicio = document.getElementById("ejercicio"),
    codigo = document.getElementById("codigo"),
    mostrarEjercicioBtn = document.getElementById("mostrarEjercicio"),
    mostrarCodigoBtn = document.getElementById("mostrarCodigo");

// Función para cambiar la clase del 'div' ejercicio.
function mostrarEjercicio(){
    ejercicio.classList.toggle("mostrar");
    ejercicio.classList.contains("mostrar") ? mostrarEjercicioBtn.innerHTML = "Ocultar instrucciones" : mostrarEjercicioBtn.innerHTML = "Mostrar instrucciones";
}

// Función para cambiar la clase del 'div' código.
function mostrarCodigo(){
    codigo.classList.toggle("mostrar");
    codigo.classList.contains("mostrar") ? mostrarCodigoBtn.innerHTML = "Ocultar código" : mostrarCodigoBtn.innerHTML = "Mostrar código";
}

mostrarEjercicioBtn.onclick = mostrarEjercicio;
mostrarCodigoBtn.onclick = mostrarCodigo;  