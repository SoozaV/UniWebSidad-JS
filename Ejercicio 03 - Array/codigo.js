// Se obtienen los elementos del DOM
var boton = document.getElementById("meses"),
    numeroMes = document.getElementById("numeroMes"),
    ejercicio = document.getElementById("ejercicio"),
    codigo = document.getElementById("codigo"),
    mostrarEjercicioBtn = document.getElementById("mostrarEjercicio"),
    mostrarCodigoBtn = document.getElementById("mostrarCodigo");

// Array que almacena los meses del año.
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

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
function mostrarMeses(){
    if(numeroMes.value == ""){
        alert(meses.join(', '));
    } else if(numeroMes.value < 1 || numeroMes.value > 12 || numeroMes.value % 1 !== 0){
        alert("Por favor introduce solo números enteros del 1 al 12.");
    } else {
        alert("El mes " + numeroMes.value + " es " + meses[numeroMes.value - 1]);
    }
}

boton.onclick = mostrarMeses;
mostrarEjercicioBtn.onclick = mostrarEjercicio;
mostrarCodigoBtn.onclick = mostrarCodigo;