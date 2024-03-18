tablero=document.getElementById('pintaje')
var cuadro=''
let terreno = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm1', 0, 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm15', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'emblema', 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 0, 0, 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'decorado1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0],
    [0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 0, 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 'm1', 'm1', 0, 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm1', 'm1', 0, 0, 0],
    [0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'm1', 0, 0, 0, 0, 'm1', 'm1', 0, 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 'm1', 'm1', 0, 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'm1', 0, 'm1', 'm1', 'm1', 0, 0, 'm1', 'm1', 'm1', 0, 0, 'm1', 'm1', 0, 0, 0, 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 'm1', 0, 'm1', 'm1', 'm1', 0, 0],
    [0, 0, 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0, 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 'm1', 0],
    
  ];

  let digimons=[]
  //let digimons=[
  // [0,15,5,0] Donde  [nº digimon[0], posicionX[15], posicionY[5], foto[0]]
  // [1,3,18,6] Cada vector interno contiene la info de un digimon diferente
  // [2,19,1,3] 
  //]
  var contador=0
  let oraculo=[
    'Dame digihuevos y te dare información...',
    'Cada vez que me des uno, te diré mas',
    'El digivice es rosa, el talisman naranja',
    'No pulses el talisman hasta que te lo diga',
    'Para invocar digimons, pulsa el digivice',
    'Puedes mover un digimon pulsando sobre el',
    'Ahora podras usar las flechas de dirección',
    'Tambien puedes digievolucionar a los digimon',
    'Para ello, haz doble click sobre ellos',
    'Cada uno puede digievolucionar dos veces',
    'Cuando hayas terminado de jugar, vuelve',
    'Si estas listo, puedes pulsar el talisman...',

]



//EMPIEZA EL JUEGO
function start(){
  document.getElementById('menu').innerHTML='<h1 id onclick="pintarmapa()">NEW GAME</h1>'
  var audio = document.getElementById("audio");
  audio.play();
}




//GENERAR EL TERRENO
function pintarmapa(){
  document.getElementById('start').innerHTML=''
  document.getElementById('start').style='display:none'
  var audio2 = document.getElementById("audio2");
  audio2.play();
  document.getElementById('pintaje').style='display:flex'


  for (let i = 0; i < terreno.length; i++) {
    for (let j = 0; j < terreno[i].length; j++) {
        if(terreno[i][j]== 0){
            cuadro+= '<div class="cuadro1" id="casilla'+i+','+j+'"></div>'  
        } else if (terreno[i][j]== 'm15'){
            cuadro+= '<div class="cuadro3" id="casilla'+i+','+j+'"><img onclick="newdigimon()" id="invocador" src="img/digivice.webp"></div>'
            terreno[i][j]= 'invocador'
        } else if (terreno[i][j]== 'decorado1'){
            var audio3 = document.getElementById("audio3");
            audio3.play();
            cuadro+= '<div class="cuadro1" id="casilla'+i+','+j+'"><h5 class="typing2" id=oraculo>'+oraculo[0]+'</h5><img onclick="inforaculo(1)" src="img/Seadramon.gif"></div>'
            terreno[i][j]= 'seadramon'
        } else if (terreno[i][j]== 'emblema'){
          cuadro+= '<div class="cuadro3" id="casilla'+i+','+j+'"><img onclick="end()" src="img/emblema.webp"></div>'
          terreno[i][j]= 'emblema'
        }else  {
            cuadro+= '<div class="cuadro" id="casilla'+i+','+j+'"></div>'  
        }     
    }
  }
  tablero.innerHTML+=cuadro
}



//FRASES DEL ORACULO
let frases=0
function inforaculo(siguiente){
  if (frases>10){
    return
  } else {
  var audio3 = document.getElementById("audio3");
  audio3.play();
  frases+=siguiente
  oraculo[0]=''
  document.getElementById('casilla6,21').innerHTML='<h5 class="typing2" id=oraculo>'+oraculo[0+frases]+'</h5><img onclick="inforaculo(1)" src="img/Seadramon.gif">'
  // document.getElementById('oraculo').innerHTML=oraculo[0+frases]
  }
}


//GENERAR DIGIMONS
function newdigimon(){
  if (contador==342) {
    alert ('NO HAY HUECO')
  } else {
    variablex=aleatorioEntre(1, 21)
    variabley=aleatorioEntre(1, 41)
    foto=aleatorioEntre(1, 8)
    posicion=terreno[variablex][variabley]
    if (posicion==0){
        setTimeout(newdigimon,2) 
    }else if (posicion!='m1'){
        setTimeout(newdigimon,2) 
    }else {
        digimons.push([contador,variablex,variabley,foto])
        document.getElementById('casilla'+digimons[contador][1]+','+digimons[contador][2]+'').innerHTML='<img onclick="addmovimiento('+digimons[contador][0]+')" ondblclick="activarevolucion('+digimons[contador][0]+',10)" id="digimon'+digimons[contador][0]+'" src="img/digimon'+digimons[contador][3]+'.gif"></div>'
        terreno[digimons[contador][1]][digimons[contador][2]]= 'digimon'+digimons[contador][0]
        contador+=1
    }}
}


//VARIABLES PARA EL MOVIMIENTO
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var clicked=0


//AÑADIR EVENTO AL DIGIMON CLICKADO
function addmovimiento(digimon){
clicked= digimon
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
}

//PULSAR TECLA MOVIMIENTO
function keyDownHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = true;
      mover(clicked,0,1)
    } else if (e.keyCode == 37) {
      leftPressed = true;
      mover(clicked,0,-1)
    } else if (e.keyCode == 38) {
        upPressed = true;
        mover(clicked,-1,0)
    } else if (e.keyCode == 40) {
        downPressed = true;
        mover(clicked,1,0)
    }
  }
  
//SOLTAR TECLA MOVIMIENTO
function keyUpHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = false;
    } else if (e.keyCode == 37) {
      leftPressed = false;
    } else if (e.keyCode == 38) {
        upPressed = false;
    } else if (e.keyCode == 40) {
        downPressed = false;
    }

  }


//NUMEROS ALEATORIOS
function aleatorioEntre(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1));
}


//MOVIMIENTO DEL DIGIMON
function mover(digimon,posx,posy){
    posicion= terreno[digimons[digimon][1]+posx][digimons[digimon][2]+posy]
    if (posicion==0){
        return    
    } else if (posicion!='m1'){
        return
    }else {
        document.getElementById('casilla'+digimons[digimon][1]+','+digimons[digimon][2]+'').innerHTML=''
        terreno[digimons[digimon][1]][digimons[digimon][2]]= 'm1'
        digimons[digimon][1]+=posx
        digimons[digimon][2]+=posy
        document.getElementById('casilla'+digimons[digimon][1]+','+digimons[digimon][2]+'').className='cuadro2'
        document.getElementById('casilla'+digimons[digimon][1]+','+digimons[digimon][2]+'').innerHTML='<img onclick="addmovimiento('+digimons[digimon][0]+')" ondblclick="activarevolucion('+digimons[digimon][0]+',10)" id="digimon'+digimons[digimon][0]+'" src="img/digimon'+digimons[digimon][3]+'.gif"></div>'
        terreno[digimons[digimon][1]][digimons[digimon][2]]='digimon'+digimons[digimon][0]

    }
}

//ACTIVAMOS VIDEO DE DIGIEVOLUCIONES
function activarevolucion(digimon,evolucion){
  energia=digimons[digimon][3]+evolucion
  if (energia>26){
    return
  } else {
  document.getElementById('vidigimon'+digimons[digimon][3]).style='display:flex'
  var video = document.getElementById("video"+digimons[digimon][3]);
  video.play();
  setTimeout(digievolucion,8000,digimon,evolucion)
  }
}

//DIGIEVOLUCIONAMOS
  function digievolucion(digimon,evolucion){
    energia=digimons[digimon][3]+evolucion
    if (energia>26){
      return
    } else {
    document.getElementById('vidigimon'+digimons[digimon][3]).style='display:none'
    digimons[digimon][3]+=evolucion
    document.getElementById('casilla'+digimons[digimon][1]+','+digimons[digimon][2]+'').className='cuadro4'
    document.getElementById('casilla'+digimons[digimon][1]+','+digimons[digimon][2]+'').innerHTML='<img onclick="addmovimiento('+digimons[digimon][0]+')" ondblclick="activarevolucion('+digimons[digimon][0]+',10)" id="digimon'+digimons[digimon][0]+'" src="img/digimon'+digimons[digimon][3]+'.gif"></div>'
  }
  // document.getElementById('casilla'+digimons[digimon][1]+','+digimons[digimon][2]+'').className='cuadro2'

  }

//TERMINAR - IR CREDITOS
var creditoscount=1
function end(){
    document.getElementById('pintaje').style='display:none'
    var audio4 = document.getElementById("audio4");
    audio4.play();
    document.getElementById('end').style='display:flex'
    setTimeout(creditos,5000,0)
}



// CREDITOS
  agradecimientos=document.getElementById('listagradecimientos')
function creditos(numero){
    creditoscount+=numero
    if (creditoscount==0){
    }
    else if (creditoscount==1){
      agradecimientos.innerHTML='<h2>Canva</h2><h3>Edicion de diseños</h3>'
    }else if (creditoscount==2){
      agradecimientos.innerHTML='<h2>Digimon Sprite Database</h2><h3>Biblioteca de gifs</h3>'
    } else if (creditoscount==3){
      agradecimientos.innerHTML='<h2>Youtube</h2><h3>Biblioteca de sonidos</h3>'
    }else if (creditoscount==4){
      agradecimientos.innerHTML='<h2>Internet</h2><h3>Resto de cosas</h3>'
    }else if (creditoscount==5){
      agradecimientos.innerHTML='<h2>PEDRO</h2><h3>Explicarme matrices</h3>'
    }else if (creditoscount==6){
      agradecimientos.innerHTML='<h2>Juanma</h2><h3>Por aguantarnos</h3>'
    } else if (creditoscount==7){
      agradecimientos.innerHTML='<h2>Clase</h2><h3>Espero que os haya gustado</h3>'
    }else if (creditoscount==8){
      agradecimientos.innerHTML='<img src="img/credito.png">'
      clearTimeout(stopcreditos)
    }
    console.log(creditoscount)
    stopcreditos=setTimeout(creditos,5000,1)
  }








