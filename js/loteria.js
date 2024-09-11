var carta = new Array(4);
for (var i = 0; i < 4; i++) {
    carta[i] = new Array(4);
}
var n, i1 = 0, i2 = 0; // Inicializar i1 y i2 en 0 para que apunten a la primera carta por defecto
var repetidos = new Array(16);

function cartas() {
    var c = 1;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            while (true) {
                n = Math.floor(Math.random() * 54) + 1;
                if (!repetidos.includes(n)) {
                    break;
                }
            }
            carta[x][y] = n;
            repetidos[c - 1] = n;
            document.getElementById("c" + c).src = "../img/" + n + ".jpg"; // Carga la imagen de la carta en la cuadrícula
            c++;
        }
    }

    // Mostrar la primera carta por defecto en la previsualización
    document.getElementById("prev").src = "../img/" + carta[0][0] + ".jpg";
}

function consultar() {
    // Obtener las posiciones seleccionadas por el usuario
    i1 = document.getElementById("i1").value;
    i2 = document.getElementById("i2").value;
    // Actualizar la previsualización con la carta seleccionada
    document.getElementById("prev").src = "../img/" + carta[i1][i2] + ".jpg";
}

function play() {
    // Reproduce el sonido de la carta seleccionada o la primera carta si no se ha seleccionado ninguna
    let audio = new Audio("../audio/b" + carta[i1][i2] + ".mp3");
    audio.play();
}

// Inicializa la primera jugada
cartas();
