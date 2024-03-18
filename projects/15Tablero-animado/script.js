
var alto = document.getElementById('alto').value
var ancho = document.getElementById('ancho').value
var tablero = document.getElementById('tablero')


var casilla = ''
var contador = 0;
var filas = 0;
var columna = 1;
var parar




function start() {
    clearTimeout(parar)
    var altura = document.getElementById('alto').value
    var anchura = document.getElementById('ancho').value
    total = anchura * altura
    var tamano = document.getElementById('size').value
    var tiempo = document.getElementById('retardo').value
    document.getElementById('tablero').style.width = (tamano * anchura) + 'px'
    document.getElementById('tablero').style.height = (tamano * altura) + 'px'

    filas = 0
    columna = 1
    contador = 0
    casilla = ''
    pintar(tamano, altura, anchura, tiempo)
}



function pintar(size, alto, ancho, retardo) {
    var par = document.getElementById('color1').value
    var impar = document.getElementById('color2').value


    if (contador % ancho == 0) {
        filas += 1
        columna = 1
    }
//---------------------------------------
    if (filas % 2 != 0) {
        color = impar
        if (contador % 2 == 0) {
            color = par
        } else {
            color = impar
        }

    } else {
        if (contador % 2 == 0) {
            color = impar
        } else {
            color = par
        }
    }
//---------------------------------------
    if (ancho % 2 != 0) {
        if (contador % 2 == 0) {
            color = par
        } else {
            color = impar
        }
    }
//---------------------------------------
    if (ancho == 8 && alto == 8) {
        casilla += '<div id="casilla' + contador + '" class="casilla" style="width:' + size + 'px;height:' + size + 'px;position:relative;float:left;background:' + color + '"><h4 style="position:absolute">' + filas + ',' + columna + '</h4><img class="blancas" style="width:' + size + 'px;position:absolute" src="img/imagen' + contador + '.png"></div>'
    } else {
        casilla += '<div id="casilla' + contador + '" class="casilla" style="width:' + size + 'px;height:' + size + 'px;position:relative;float:left;background:' + color + '"><h4>' + filas + ',' + columna + '</h4></div>'
    }


    contador++
    columna++
    tablero.innerHTML = casilla



    if (contador < (total)) {
        parar = setTimeout(pintar, retardo, size, alto, ancho, retardo)
    }
    console.log(columna)

}




function inicio() {
    document.getElementById('pintaje').style = 'display:flex'
    document.getElementById('logotexto').src = 'img/logotexto.png'
    document.getElementById('logotexto').style.animation = 'none'
}
