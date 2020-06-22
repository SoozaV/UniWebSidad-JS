var dni = document.getElementById("dni"), 
    letra = document.getElementById("letra"),
    verificar = document.getElementById("verificarDNIbtn");

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
              'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
              'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
    letraDNI;

// Se puede usar el siguiente DNI para verificar el programa: 69936681Y

function verificarDNI(){
  dni = Number(dni.value);
  // Verifica que el valor intrudocido solo sean números dentro del rango establecido
  if(dni < 0 || dni > 99999999 || isNaN(dni) || dni % 1 != 0){
    alert("Valor DNI incorrecto, intente de nuevo.");
  } else if(letra.length != 1 || typeof letra != "string"){
    alert("Valor letra incorrecto, intente de nuevo.");
  } else {
    letra = letra.value.toUpperCase();
    letraDNI = letras[dni % 23];
    
    if(letraDNI == letra){
    alert("El DNI y la letra son correctos.");
    } else {
    alert("Letra equivocada, verifique la información.")
    }
  }
}

verificar.onclick = verificarDNI;