var dni, letra, letraDNI;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Se puede usar el siguiente DNI para verificar el programa: 69936681Y

dni = Number(prompt("Número de DNI"));
// Verifica que el valor intrudocido solo sean números dentro del rango establecido
if(dni < 0 || dni > 99999999 || typeof dni != "number"){
  alert("Valor DNI incorrecto, intente de nuevo.");
}

letra = prompt("Letra de DNI").toUpperCase();
// Verifica que el valor solo sea una letra | sería mejor con expresiones regulares
if(letra.length != 1 || typeof letra != "string"){
  alert("Valor letra incorrecto, intente de nuevo.");
}

letraDNI = letras[dni % 23];

if(letraDNI == letra){
  alert("El DNI y la letra son correctos.");
} else {
  alert("Letra equivocada, verifique la información.")
}