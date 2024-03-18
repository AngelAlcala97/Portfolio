
var inicio=document.getElementById('tiempoInicio');
var transition=document.getElementById('tiempoTransition');
var final=document.getElementById('tiempoFinal');
var tornado=document.getElementById('tornado');
var tornadofoto=document.getElementById('tornadofoto');
var tiempoInicio;
var tiempoTransition;
var tiempoFinal;




function recogerDatos(){
   

    tiempoInicio=inicio.value;
    tiempoTransition=transition.value;
    tiempoFinal=final.value;

    if (tiempoInicio>1){
        document.getElementById('valorInicial').innerHTML=tiempoInicio+' segundos';
    }else{
        document.getElementById('valorInicial').innerHTML=tiempoInicio+' segundo';
    }

    if (tiempoTransition>1){
        document.getElementById('valorTrans').innerHTML=tiempoTransition+' segundos';
    }else{
        document.getElementById('valorTrans').innerHTML=tiempoTransition+' segundo';
    }

    if (tiempoFinal>1){
        document.getElementById('valorFinal').innerHTML=tiempoFinal+' segundos';
    }else{
        document.getElementById('valorFinal').innerHTML=tiempoFinal+' segundo';
    }
}

//Desplazamiento
var pararfin;
var pararinicio;
var varx=0
var vary=0
var magica=false
var desplazamientoX;
var desplazamientoY;
function desplazamiento(){
  document.getElementById('botondesplazamientoon').style='display:none'
  document.getElementById('botondesplazamientooff').style='display:block'



  magica=false
   desplazamientoX=document.getElementById('desplazamientoX').value;
   desplazamientoY=document.getElementById('desplazamientoY').value;
   if (desplazamientoX>91){
    desplazamientoX=91
   } else if (desplazamientoY>91) {
    desplazamientoY=91

   }
   pararinicio= setTimeout(iniciodesplazamiento,(inicio.value*1000))
}

function iniciodesplazamiento(){
  clearTimeout(pararfin)
  clearTimeout(pararinicio)
 
  if (varx>=desplazamientoX && vary>=desplazamientoY){
    varx=desplazamientoX
    vary=desplazamientoY
    clearTimeout(pararfin)
    clearTimeout(pararinicio)
     pararfin= setTimeout(findesplazamiento,(final.value*1000))

  } else {
  varx+=(desplazamientoX/(transition.value*200))
  vary+=(desplazamientoY/(transition.value*200))

tornado.style.top=-vary+'%'
 tornado.style.left=varx+'%'
 console.log(tornado.style.left,tornado.style.top,magica,varx,vary)
 
  pararinicio= setTimeout(iniciodesplazamiento,(inicio.value))
}
}

function findesplazamiento(){
  clearTimeout(pararfin)
  clearTimeout(pararinicio)


  if (varx<=0 && vary<=0){
    varx=0
    vary=0
    if (magica==true){
      clearTimeout(pararfin)
      clearTimeout(pararinicio)
    } else {
    clearTimeout(pararfin)
    clearTimeout(pararinicio)
     pararinicio= setTimeout(iniciodesplazamiento,(inicio.value*1000))
    }
  } else {
  varx-=(desplazamientoX/(transition.value*200))
  vary-=(desplazamientoY/(transition.value*200))

tornado.style.top=-vary+'%'
tornado.style.left=varx+'%'
console.log(tornado.style.left,tornado.style.top,magica,varx,vary)

 pararfin= setTimeout(findesplazamiento,(final.value))
}
}

function findesplazamientomaximo(){
  magica=true
  console.log(magica)
  document.getElementById('botondesplazamientoon').style='display:block'
  document.getElementById('botondesplazamientooff').style='display:none'


}

//Resize
var pararfincrecer;
var parariniciocrecer;
var crecx=8
var crecy=8
var magica2=false
var crecimientoX;
var crecimientoY;
function crecimiento(){
  document.getElementById('botoncrecimientoon').style='display:none'
  document.getElementById('botoncrecimientooff').style='display:block'



  magica2=false
   crecimientoX=document.getElementById('crecimientoX').value;
   crecimientoY=document.getElementById('crecimientoY').value;
   if (crecimientoX>90){
    crecimientoX=90
   } else if (crecimientoY>90) {
    crecimientoY=90

   }
   parariniciocrecer= setTimeout(iniciocrecimiento,(inicio.value*1000))
}

function iniciocrecimiento(){
  clearTimeout(pararfincrecer)
  clearTimeout(parariniciocrecer)
 
  if (crecx>=crecimientoX && crecy>=crecimientoY){
    crecx=crecimientoX
    crecy=crecimientoY
    clearTimeout(pararfincrecer)
    clearTimeout(parariniciocrecer)
     pararfincrecer= setTimeout(fincrecimiento,(final.value*1000))

  } else {
  crecx+=(crecimientoX/(transition.value*200))
  crecy+=(crecimientoY/(transition.value*200))

  tornado.style.height=crecy+'vh'
  tornado.style.width=crecx+'vw'
  console.log(tornado.style.left,tornado.style.top,magica,crecx,crecy)
 
  parariniciocrecer= setTimeout(iniciocrecimiento,(inicio.value))
}
}

function fincrecimiento(){
  clearTimeout(pararfincrecer)
  clearTimeout(parariniciocrecer)


  if (crecx<=8 && crecy<=8){
    crecx=8
    crecy=8
    if (magica2==true){
      clearTimeout(pararfincrecer)
      clearTimeout(parariniciocrecer)
    } else {
    clearTimeout(pararfincrecer)
    clearTimeout(parariniciocrecer)
     parariniciocrecer= setTimeout(iniciocrecimiento,(inicio.value*1000))
    }
  } else {
  crecx-=(crecimientoX/(transition.value*200))
  crecy-=(crecimientoY/(transition.value*200))

tornado.style.height=crecy+'vh'
tornado.style.width=crecx+'vw'
console.log(tornado.style.left,tornado.style.top,magica,crecx,crecy)

 pararfincrecer= setTimeout(fincrecimiento,(final.value))
}
}

function fincrecimientomaximo(){
  magica2=true
  console.log(magica2)
  document.getElementById('botoncrecimientoon').style='display:block'
  document.getElementById('botoncrecimientooff').style='display:none'


 
}

//Rotación
var pararfinrotar;
var parariniciorotar;
var rotacionTotal=0;
var magica3=false;
var transformacionRotacion;

function rotacion(){
  document.getElementById('botonrotaron').style='display:none'
  document.getElementById('botonrotaroff').style='display:block'



  magica3=false
  transformacionRotacion=document.getElementById('rotacion').value;
   if (transformacionRotacion>360){
    transformacionRotacion=360
   }
   parariniciorotar= setTimeout(iniciorotar,(inicio.value*1000))
}

function iniciorotar(){
  clearTimeout(pararfinrotar)
  clearTimeout(parariniciorotar)
 
  if (rotacionTotal>=transformacionRotacion){
    rotacionTotal=transformacionRotacion
    clearTimeout(pararfinrotar)
    clearTimeout(parariniciorotar)
     pararfinrotar= setTimeout(finrotar,(final.value*1000))

  } else {
    rotacionTotal+=(transformacionRotacion/(transition.value*200))

  tornado.style.transform= 'rotate('+rotacionTotal+'deg)';
  console.log(tornado.style.transform,magica3,rotacionTotal)
 
  parariniciorotar= setTimeout(iniciorotar,(inicio.value))
}
}

function finrotar(){
  clearTimeout(pararfinrotar)
  clearTimeout(parariniciorotar)


  if (rotacionTotal<=0){
    rotacionTotal=0
    if (magica3==true){
      clearTimeout(pararfinrotar)
      clearTimeout(parariniciorotar)
    } else {
    clearTimeout(pararfinrotar)
    clearTimeout(parariniciorotar)
     parariniciorotar= setTimeout(iniciorotar,(inicio.value*1000))
    }
  } else {
    rotacionTotal-=(transformacionRotacion/(transition.value*200))

  tornado.style.transform= 'rotate('+rotacionTotal+'deg)';
  console.log(tornado.style.transform,magica3,rotacionTotal)

 pararfinrotar= setTimeout(finrotar,(final.value))
}
}

function finrotacionmaxima(){
  magica3=true
  console.log(magica3)
  document.getElementById('botonrotaron').style='display:block'
  document.getElementById('botonrotaroff').style='display:none'

}

//DROP SHADOW
var pararfindrop;
var parariniciodrop;
var dropTotalsize=0;

var magica4=false;
var transformaciondroptop;
var transformaciondropleft;
var transformaciondropsize;
var transformaciondropcolor;
var dropFinalSize;

function drop(){
  document.getElementById('botondropon').style='display:none'
  document.getElementById('botondropoff').style='display:block'

  magica4=false
  transformaciondroptop=document.getElementById('droptop').value;
  transformaciondropleft=document.getElementById('dropleft').value;
  transformaciondropsize=document.getElementById('dropsize').value;
  transformaciondropcolor=document.getElementById('dropcolor').value;

   if (transformaciondropsize>3){
    transformaciondropsize=3
   }
   parariniciodrop= setTimeout(iniciodrop,(inicio.value*1000))
}

function iniciodrop(){
  clearTimeout(pararfindrop)
  clearTimeout(parariniciodrop)
 
  if (dropTotalsize>=transformaciondropsize){
    dropTotalsize=transformaciondropsize
    transformaciondropcolor=document.getElementById('dropcolor').value;
    clearTimeout(pararfindrop)
    clearTimeout(parariniciodrop)
    pararfindrop= setTimeout(findrop,(final.value*1000))

  } else {
    dropTotalsize+=(transformaciondropsize/(transition.value*200))
    dropFinalSize=dropTotalsize.toFixed(1);

    tornadofoto.style= 'filter: drop-shadow('+transformaciondroptop+'px '+transformaciondropleft+'px '+dropFinalSize+'px transparent);';
    console.log(dropFinalSize, transformaciondropcolor)
 
  parariniciodrop= setTimeout(iniciodrop,(inicio.value))
}
}

function findrop(){
  clearTimeout(pararfindrop)
  clearTimeout(parariniciodrop)


  if (dropTotalsize<=0){
    dropTotalsize=0
    if (magica4==true){
      clearTimeout(pararfindrop)
      clearTimeout(parariniciodrop)
    } else {
    clearTimeout(pararfindrop)
    clearTimeout(parariniciodrop)
    parariniciodrop= setTimeout(iniciodrop,(inicio.value*1000))
    }
  } else {
    dropTotalsize-=(transformaciondropsize/(transition.value*200))
    dropFinalSize=dropTotalsize.toFixed(1);
    if (dropTotalsize<=0){
      dropTotalsize=0
    }
    console.log(dropFinalSize, transformaciondropcolor)
    

    tornadofoto.style= 'filter: drop-shadow('+transformaciondroptop+'px '+transformaciondropleft+'px '+dropFinalSize+'px '+transformaciondropcolor+');';

    pararfindrop= setTimeout(findrop,(final.value))
  }
}

function findropmaxima(){
  magica4=true
  document.getElementById('botondropon').style='display:block';
  document.getElementById('botondropoff').style='display:none';
}

//Origen de rotación
var origenX=0;
var origenY=0;
function agregarOrigen(){
  origenX=document.getElementById('origenX').value;
  origenY=document.getElementById('origenY').value;

  tornado.style='transform-origin: '+origenX+'% '+origenY+'%;';

}


//Skew
var pararfinskew;
var pararinicioskew;
var skewx=0
var skewy=0
var magica5=false
var skewX;
var skewY;
function skew(){
  document.getElementById('botonskewon').style='display:none'
  document.getElementById('botonskewoff').style='display:block'



    magica5=false
   skewX=document.getElementById('skewX').value;
   skewY=document.getElementById('skewY').value;
   if (skewX>90){
    skewX=90
   } else if (skewY>90) {
    skewY=90

   }
   pararinicioskew= setTimeout(inicioskew,(inicio.value*1000))
   console.log(skewX, skewY)
}

function inicioskew(){
  clearTimeout(pararfinskew)
  clearTimeout(pararinicioskew)
 
  if (skewx>=skewX && skewy>=skewY){
    skewx=skewX
    skewy=skewY
    clearTimeout(pararfinskew)
    clearTimeout(pararinicioskew)
     pararfinskew= setTimeout(finskew,(final.value*1000))

  } else {
  skewx+=(skewX/(transition.value*200))
  skewy+=(skewY/(transition.value*200))

  tornadofoto.style='transform: skew('+skewx+'deg, '+skewy+'deg);';
  console.log(skewx,skewy)
  pararinicioskew= setTimeout(inicioskew,(inicio.value))
}
}

function finskew(){
  clearTimeout(pararfinskew)
  clearTimeout(pararinicioskew)


  if (skewx<=0 && skewy<=0){
    skewx=0
    skewy=0
    if (magica5==true){
      clearTimeout(pararfinskew)
      clearTimeout(pararinicioskew)
    } else {
    clearTimeout(pararfinskew)
    clearTimeout(pararinicioskew)
     pararinicioskew= setTimeout(inicioskew,(inicio.value*1000))
    }
  } else {
  skewx-=(skewX/(transition.value*200))
  skewy-=(skewY/(transition.value*200))

  tornadofoto.style='transform: skew('+skewx+'deg, '+skewy+'deg);';
console.log(skewx, skewy)
 pararfinskew= setTimeout(finskew,(final.value))
}
}

function finskewmaximo(){
  magica5=true
  console.log(magica5)
  document.getElementById('botonskewon').style='display:block'
  document.getElementById('botonskewoff').style='display:none'

}














































var input = document.querySelector("#tiempoInicio");
input.style.setProperty("--value", input.value);
input.addEventListener("input", function(evt) {
input.style.setProperty("--value", input.value);
},false);

var input2 = document.querySelector("#tiempoTransition");
input2.style.setProperty("--value", input2.value);
input2.addEventListener("input", function(evt) {
input2.style.setProperty("--value", input2.value);
},false);

var input3 = document.querySelector("#tiempoFinal");
input3.style.setProperty("--value", input3.value);
input3.addEventListener("input", function(evt) {
input3.style.setProperty("--value", input3.value);
},false);
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        // if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        // }
      }
    }
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        // if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        // }
      }
    }
  }

  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        // if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        // }
      }
    }
  }


