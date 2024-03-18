var creditos=100;
var numero1='';
var numero2='';
var numero3='';
var avanzar=1;
document.getElementById('creditos').innerHTML='<p>'+creditos+'€</p>';
document.getElementById('bet').innerHTML='<p>'+avanzar+'</p>';

//NUMERO ALEATORIO

function aleatorioEntre(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

//SPIN DE LOS SLOTS

function mover(){
    var audio= document.getElementById('audio3')
    audio.play()
    document.getElementById('ganancia').innerHTML='<p></p>'

    if (creditos==0){
        return
    } else {
    document.getElementById('numero1').style.backgroundPositionY='0px';
    document.getElementById('numero2').style.backgroundPositionY='0px';
    document.getElementById('numero3').style.backgroundPositionY='0px';
    creditos-=5;
    var cuadro1= aleatorioEntre(1,5);
    var cuadro2= aleatorioEntre(1,5);
    var cuadro3= aleatorioEntre(1,5);
    
    

   document.getElementById('numero1').style.backgroundPositionY=cuadro1*100+'px';
   document.getElementById('numero2').style.backgroundPositionY=cuadro2*100+'px';
   document.getElementById('numero3').style.backgroundPositionY=cuadro3*100+'px';

  
    numero1=document.getElementById('numero1').style.backgroundPositionY=cuadro1*100+'px';
    numero2= document.getElementById('numero2').style.backgroundPositionY=cuadro2*100+'px';
    numero3=document.getElementById('numero3').style.backgroundPositionY=cuadro3*100+'px';

        comprobar()
        resultados()
    }
    
}

//AVANCE DE COMBINACION

function avance(posicion,numero){
    var audio2= document.getElementById('audio2')
        audio2.play()
    if (avanzar==0){
        return
    } else {
    avanzar-=1;
     document.getElementById('numero'+numero).style.backgroundPositionY=(parseInt(document.getElementById('numero'+numero).style.backgroundPositionY)+posicion)+'px';
     if (numero==1){
     numero1=  document.getElementById('numero'+numero).style.backgroundPositionY
     } else if (numero==2){
        numero2=  document.getElementById('numero'+numero).style.backgroundPositionY
    }else if (numero==3){
        numero3=  document.getElementById('numero'+numero).style.backgroundPositionY
    }

     comprobar()
    }
}


//COMPROBACION DE COMBINACION
function comprobar(){
    document.getElementById('ganancia').style=`
    color: #FFF`
document.getElementById('ganancia').innerHTML='<p id="premio">SORRY :(</p>'
document.getElementById('premio').style='animation: premio 2s ease infinite'


    if (numero1==numero2 && numero2==numero3){
        var audio2= document.getElementById('audio')
        audio2.play()
        if(numero1 == '100px'){
            avanzar+=1;
            creditos+=150
            document.getElementById('ganancia').style=`
            color: #DB1819`
            document.getElementById('ganancia').innerHTML='<p id="premio">WIN: 150€</p>'
            document.getElementById('premio').style='animation: premio 0.1s ease infinite'
        } else if (numero1 == '200px'){
            avanzar+=1;
            creditos+=100
            document.getElementById('ganancia').style=`
            color: #EEBE46`
            document.getElementById('ganancia').innerHTML='<p id="premio">WIN: 100€</p>'
            document.getElementById('premio').style='animation: premio 0.1s ease infinite'
    
        } else if (numero1 == '300px'){
            avanzar+=1;
            creditos+=75
            document.getElementById('ganancia').style=`
            color: #33D72D`
            document.getElementById('ganancia').innerHTML='<p id="premio">WIN: 75€</p>'
            document.getElementById('premio').style='animation: premio 0.1s ease infinite'
    
        } else if (numero1 == '400px'){
            avanzar+=1;
            creditos+=50
            document.getElementById('ganancia').style=`
            color: #FE0000`
            document.getElementById('ganancia').innerHTML='<p id="premio">WIN: 50€</p>'
            document.getElementById('premio').style='animation: premio 0.1s ease infinite'
    
        } else if (numero1 == '500px'){
            avanzar+=1;
            creditos+=25
            document.getElementById('ganancia').style=`
            color: #0F59B7`
            document.getElementById('ganancia').innerHTML='<p id="premio">WIN: 25€</p>'
            document.getElementById('premio').style='animation: premio 0.1s ease infinite'
    
        } 
        
        }
    
        console.log(numero1,numero2,numero3)
    
        document.getElementById('creditos').innerHTML='<p>'+creditos+'€</p>';
        document.getElementById('bet').innerHTML='<p>'+avanzar+'</p>';
       


}

function resultados(){
  var slot= document.getElementById('slots').innerHTML
  document.getElementById('puntuaciones').innerHTML+= slot;
    puntuaciones.scrollBy(0, 1000);


 
}


// Get the modal
var modal = document.getElementById("ventana");

// Get the button that opens the modal
var btn = document.getElementById("botonpop");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cerrar")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// var saludo='';
// export {saludo}


// import {saludo}
// from '/modulo.js'
// console.log(saludo)
