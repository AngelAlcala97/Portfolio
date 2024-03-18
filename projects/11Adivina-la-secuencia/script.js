contenedores=0;
contenedor=0;
nivel=0;
reinicio=0;
i=0;
puntuacion=0
usuario='';
var fila = '';
var usuario=prompt("Introduce tu nombre")
var t0 = ' <table border="1" width="20%" id="tabla">';
fila = '<tr><td style="background: #1d1d1d;color:#fff" align="center">' + usuario + '</td><td style="background: #1d1d1d;color:#fff" align="center">' + puntuacion + '</td></tr>';
var t3 = '</table>';

document.getElementById('puntuacion').innerHTML = (t0 + fila + t3);


    while (i < 5) {
        
        var aleatorio= Math.floor(Math.random()*5)+1;

    if (aleatorio==1){
        color= '#ff6961';
    } else if (aleatorio==2){
        color= '#77dd77';
    } else if (aleatorio==3){
        color= '#fdfd96';
    } else if (aleatorio==4){
        color= '#84b6f4';
    } else if (aleatorio==5){
        color= '#fdcae1';
    }
        i += 1;
        document.getElementById('muestra').innerHTML+=`<div id="`+contenedor+`" style="background:`+color+`" class="color"></div>`
        document.getElementById('selector').innerHTML+=`<div id="`+contenedor+`R" class="color"></div>`
        document.getElementById('selector').style.display=`none`

        contenedores+=1
        contenedor+=1
      }



function pintada(){
    


    var aleatorio= Math.floor(Math.random()*5)+1;

    if (aleatorio==1){
        color= '#ff6961';
    } else if (aleatorio==2){
        color= '#77dd77';
    } else if (aleatorio==3){
        color= '#fdfd96';
    } else if (aleatorio==4){
        color= '#84b6f4';
    } else if (aleatorio==5){
        color= '#fdcae1';
    }
    for (var pintar = 0; pintar < 1; pintar++) {
        document.getElementById('muestra').innerHTML+=`<div id="`+contenedor+`" style="background:`+color+`" class="color"></div>`
        document.getElementById('selector').innerHTML+=`<div id="`+contenedor+`R" class="color"></div>`

       
    }
      contenedores+=1
      contenedor+=1





}
var orden=0
function comprobar1(){
    document.getElementById('audio2').play()
    var color1= document.getElementById('color1').value
    document.getElementById(orden+'R').style.background=color1
    orden++

}
function comprobar2(){
    document.getElementById('audio2').play()
    var color2= document.getElementById('color2').value
    document.getElementById(orden+'R').style.background=color2
    orden++

}

function comprobar3(){
    document.getElementById('audio2').play()
    var color3= document.getElementById('color3').value
    document.getElementById(orden+'R').style.background=color3
    orden++

}

function comprobar4(){
    document.getElementById('audio2').play()
    var color4= document.getElementById('color4').value
    document.getElementById(orden+'R').style.background=color4
    orden++

}

function comprobar5(){
    document.getElementById('audio2').play()
    var color5= document.getElementById('color5').value
    document.getElementById(orden+'R').style.background=color5
    orden++

    }


function comprobarrespuesta(){
    if ((document.getElementById('0').style.backgroundColor==document.getElementById('0R').style.backgroundColor) && (document.getElementById('1').style.backgroundColor==document.getElementById('1R').style.backgroundColor) && (document.getElementById('2').style.backgroundColor==document.getElementById('2R').style.backgroundColor) && (document.getElementById('3').style.backgroundColor==document.getElementById('3R').style.backgroundColor) && (document.getElementById('4').style.backgroundColor==document.getElementById('4R').style.backgroundColor)){
        document.getElementById('body').innerHTML=`<div class="colores"><h1>ACERTASTE<h2></div>`
    } else {
        alert("FALLASTE")
        location.reload()
    }
    
}
var fallo=0;
function comprobarrespuesta2(){

    for (var comprobar=0;comprobar < 100; comprobar++){
        if ((document.getElementById(comprobar).style.backgroundColor)==(document.getElementById(comprobar+'R').style.backgroundColor)){
            document.getElementById(comprobar+'R').innerHTML=`<div class="colores"><img src="img/check.png"></div>`
            document.getElementById('comprobar').innerHTML='<button onclick="reiniciar()">SIGUIENTE NIVEL</button>'
            

    
        
        }else{
            fallo+=1
            document.getElementById(comprobar+'R').innerHTML=`<div class="colores"><img src="img/error.gif"></div>`
            // document.getElementById('body').innerHTML=`<div onclick="location.reload()" style="margin-top:70px" class="colores"><img src="img/fail.png"></div>`
        }
    
    if (fallo>0){
        document.getElementById('audio3').play()
        document.getElementById('comprobar').innerHTML='<button onclick="reiniciar2()">REINICIAR</button>'
        
    }
   

    }

 
   
}
function ocultar(){
    document.getElementById('muestra').style.display='none'
    document.getElementById('botonocultar').style.display='none'
    document.getElementById('respuesta').style.display='flex'
    document.getElementById('comprobar').style.display='flex'
    document.getElementById('selector').style.display=`flex`
    document.getElementById('audio').play()
   
  
}



function reiniciar(){
 puntuacion+=1
  unomas= i+1
  nivel+=1
  
    document.getElementById('body').innerHTML=`
    <audio id="audio" style="display: none;">
        <source src="audio/inicio.mp3" type="audio/mp3">
    </audio>

    <audio id="audio2" style="display: none;">
        <source src="audio/pulsar.mp3" type="audio/mp3">
    </audio>

    <audio id="audio3" style="display: none;">
        <source src="audio/fail.mp3" type="audio/mp3">
    </audio>

    <audio id="audio4" style="display: none;">
    <source src="audio/acierto.mp3" type="audio/mp3">
    </audio>

    <div class="colores"><img id="logo"  src="img/logo.png"></div>
    <!-- Aparicion de contenedores -->
    <div id="muestra" class="colores">
    </div>
   <!-- Boton de Aparicion -->
   <div id="botonocultar" class="colores"> <button onclick="ocultar()">JUGAR</button></div>
    <div id="botonpintar1" style="display:none" class="colores"> <button onclick="pintada()">Pintar</button></div>
    <!-- Contenedores de comprobacion -->
    <div id="selector" class="colores">
    </div>
    <!-- Clicks de respuesta -->
    <div style="display:none" id="respuesta" class="colores">
    <span><input style="background: #ff6961;color:#ff6961" onclick="comprobar1()" id="color1" type="button" value="rgb(255, 105, 97)"></span>
    <span><input style="background: #77dd77;color: #77dd77;" onclick="comprobar2()" id="color2" type="button" value="rgb(119, 221, 119)"></span>
    <span><input style="background: #fdfd96;color: #fdfd96;" onclick="comprobar3()" id="color3" type="button" value="rgb(253, 253, 150)"></span>
    <span><input style="background: #84b6f4;color: #84b6f4;" onclick="comprobar4()" id="color4" type="button" value="rgb(132, 182, 244)"></span>
    <span><input style="background: #fdcae1;color: #fdcae1;" onclick="comprobar5()" id="color5" type="button" value="rgb(253, 202, 225)"></span>
    </div>
    <div style="display:none" id="comprobar" class="colores"><button onclick="comprobarrespuesta2()">Comprobar</button></div>
    <div class="colores"><h1>Nivel: `+nivel+`</h1></div>
    <div id="puntuacion" class="puntuacion"></div>


`
t0 = ' <table border="1" width="20%" id="tabla">';
fila += '<tr><td align="right" style="color:#3d3d3d">Nivel:</td><td align="center">' + puntuacion + '</td></tr>';
 t3 = '</table>';

document.getElementById('puntuacion').innerHTML = (t0 + fila + t3);
document.getElementById('audio4').play()

orden=0;
contenedores=0;
contenedor=0;
i=0;

    while (i < unomas) {
        
        var aleatorio= Math.floor(Math.random()*5)+1;

    if (aleatorio==1){
        color= '#ff6961';
    } else if (aleatorio==2){
        color= '#77dd77';
    } else if (aleatorio==3){
        color= '#fdfd96';
    } else if (aleatorio==4){
        color= '#84b6f4';
    } else if (aleatorio==5){
        color= '#fdcae1';
    }
    
        i += 1;
        document.getElementById('muestra').innerHTML+=`<div id="`+contenedor+`" style="background:`+color+`" class="color"></div>`
        document.getElementById('selector').innerHTML+=`<div id="`+contenedor+`R" class="color"></div>`
        document.getElementById('selector').style.display=`none`
        contenedores+=1
        contenedor+=1

      }

}

function reiniciar2(){
    usuario=prompt("Introduce tu nombre")
    unomas= 5
    nivel=0
    
      document.getElementById('body').innerHTML=`
      <audio id="audio" style="display: none;">
          <source src="audio/inicio.mp3" type="audio/mp3">
      </audio>
  
      <audio id="audio2" style="display: none;">
          <source src="audio/pulsar.mp3" type="audio/mp3">
      </audio>
  
      <audio id="audio3" style="display: none;">
          <source src="audio/fail.mp3" type="audio/mp3">
      </audio>
  
      <audio id="audio4" style="display: none;">
      <source src="audio/acierto.mp3" type="audio/mp3">
      </audio>
  
      <div class="colores"><img id="logo"  src="img/logo.png"></div>
      <!-- Aparicion de contenedores -->
      <div id="muestra" class="colores">
      </div>
     <!-- Boton de Aparicion -->
     <div id="botonocultar" class="colores"> <button onclick="ocultar()">JUGAR</button></div>
      <div id="botonpintar1" style="display:none" class="colores"> <button onclick="pintada()">Pintar</button></div>
      <!-- Contenedores de comprobacion -->
      <div id="selector" class="colores">
      </div>
      <!-- Clicks de respuesta -->
      <div style="display:none" id="respuesta" class="colores">
      <span><input style="background: #ff6961;color:#ff6961" onclick="comprobar1()" id="color1" type="button" value="rgb(255, 105, 97)"></span>
      <span><input style="background: #77dd77;color: #77dd77;" onclick="comprobar2()" id="color2" type="button" value="rgb(119, 221, 119)"></span>
      <span><input style="background: #fdfd96; color: #fdfd96;" onclick="comprobar3()" id="color3" type="button" value="rgb(253, 253, 150)"></span>
      <span><input style="background: #84b6f4; color: #84b6f4;" onclick="comprobar4()" id="color4" type="button" value="rgb(132, 182, 244)"></span>
      <span><input style="background: #fdcae1; color: #fdcae1;" onclick="comprobar5()" id="color5" type="button" value="rgb(253, 202, 225)"></span>
      </div>
      <div style="display:none" id="comprobar" class="colores"><button onclick="comprobarrespuesta2()">Comprobar</button></div>
      <div class="colores"><h1>Nivel: `+nivel+`</h1></div>
      <div id="puntuacion" class="puntuacion"></div>

  
  `
  puntuacion=0;
  

   t0 = ' <table border="1" width="20%" id="tabla">';
  fila += '<tr><td style="background: #1d1d1d;color:#fff" align="center">' + usuario + '</td><td style="background: #1d1d1d;color:#fff" align="center">' + puntuacion + '</td></tr>';
   t3 = '</table>';

  document.getElementById('puntuacion').innerHTML += (t0 + fila + t3);

  document.getElementById('audio4').play()
  fallo=0;
  orden=0;
  contenedores=0;
  contenedor=0;
  i=0;
  
      while (i < unomas) {
          
          var aleatorio= Math.floor(Math.random()*5)+1;
  
      if (aleatorio==1){
          color= '#ff6961';
      } else if (aleatorio==2){
          color= '#77dd77';
      } else if (aleatorio==3){
          color= '#fdfd96';
      } else if (aleatorio==4){
          color= '#84b6f4';
      } else if (aleatorio==5){
          color= '#fdcae1';
      }
      
          i += 1;
          document.getElementById('muestra').innerHTML+=`<div id="`+contenedor+`" style="background:`+color+`" class="color"></div>`
          document.getElementById('selector').innerHTML+=`<div id="`+contenedor+`R" class="color"></div>`
          document.getElementById('selector').style.display=`none`
          contenedores+=1
          contenedor+=1
  
        }
  
  }