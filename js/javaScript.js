var aleatorio = Math.floor(Math.random() * 100);
var intentos = 0;
var numerosUtilizados = [];

function adivinar() {
    let message = "";
    let numero = document.getElementById("valor").value;
    if (numero >= 0 && numero <= 100) {
        if (intentos < 10) {
            numerosUtilizados.push(numero);
            if (numero == aleatorio) {
                message += numero + " es el número aleatorio \n Felicidades!! Adivinaste el numero";
                if(confirm(message+ ". Desea reiniciar el juego?")){
                    reiniciar();
                    return;
                }
                return;
            }
            if (numero < aleatorio) {
                message += " El número a adivinar es mayor <br>";
            } else {
                message += " El número a adivinar es menor <br>";
            }
            document.getElementById("valor").value = "";
            intentos++;
            message += " Intentos restantes: " + (10 - intentos) + " <br>";
            message += "Numeros Utilizados: " + (numerosUtilizados) + " <br>";
        } else {
            message += "Número máximo de intentos alcanzados. El número es: " + aleatorio + " <br>";
            message += " Lo lamento no lograste adivinar el número<br>";
        }
    } else {
        alert("El número introducido debe estar en un rango entre cero y cien");
    }
    document.getElementById("message").innerHTML = message;
}

function reiniciar() {
    let message = "";
    message += " Intentos restantes: " + (10 - intentos) + " <br>";
    alert("Reiniciando el juego");
    alert("Generando un nuevo número aleatorio");
    aleatorio = Math.floor(Math.random() * 100);
    alert("Reiniciando la cantidad de intentos a 10");
    intentos = 0;
    numerosUtilizados = [];
    document.getElementById("message").innerHTML = "";
}