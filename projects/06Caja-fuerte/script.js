var n1 = 0;
var n2 = 0;
var n3 = 0;
var intentos= 0;
var numero1=Math.random();
    var numero2=Math.random();
	var numero3=Math.random();

    numero1=numero1*10;
    numero2=numero2*10;
    numero3=numero3*10;

	numero1=Math.floor(numero1);
    numero2=Math.floor(numero2);
	numero3=Math.floor(numero3);



function subir3() {
    var audio = document.getElementById("audio");
    audio.play();
    if (n3 < 9) {
        n3 += 1;
        document.getElementById('n3').innerHTML = '<img class="num"  src="img/' + n3 + '.png">';
    }
}
function subir2() {
    var audio = document.getElementById("audio");
    audio.play();
    if (n2 < 9) {
        n2 += 1;
        document.getElementById('n2').innerHTML = '<img class="num"  src="img/' + n2 + '.png">';

    }
}
function subir1() {
    var audio = document.getElementById("audio");
    audio.play();
    if (n1 < 9) {
        n1 += 1;
        document.getElementById('n1').innerHTML = '<img class="num"  src="img/' + n1 + '.png">';
    }
}

function bajar3() {
    var audio = document.getElementById("audio");
    audio.play();
    if (n3 > 0) {
        n3 -= 1;
        document.getElementById('n3').innerHTML = '<img class="num"  src="img/' + n3 + '.png">';

    }
}
function bajar2() {
    var audio = document.getElementById("audio");
    audio.play();
    if (n2 > 0) {
        n2 -= 1;
        document.getElementById('n2').innerHTML = '<img class="num" src="img/' + n2 + '.png">';
    }
}
function bajar1() {
    var audio = document.getElementById("audio");
    audio.play();
    if (n1 > 0) {
        n1 -= 1;
        document.getElementById('n1').innerHTML = '<img class="num"  src="img/' + n1 + '.png">';
    }
}

function comprobar(){
    
    if (n1==numero1){
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById('n1').style='background-color: green';
        document.getElementById('pista1').innerHTML='';
    } else if (numero1<n1){
        var audio5 = document.getElementById("audio5");
    audio5.play();
        document.getElementById('pista1').innerHTML='- El primer numero es menor';
    } else if (numero1>n1){
        var audio5 = document.getElementById("audio5");
    audio5.play();
        document.getElementById('pista1').innerHTML='- El primer numero es mayor';
    }


    if (n2==numero2){
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById('n2').style='background-color: green';
        document.getElementById('pista2').innerHTML='';
    }else if (numero2<n2){
        var audio5 = document.getElementById("audio5");
    audio5.play();
        document.getElementById('pista2').innerHTML='- El segundo numero es menor';
    }else if (numero2>n2){
        var audio5 = document.getElementById("audio5");
    audio5.play();
        document.getElementById('pista2').innerHTML='- El segundo numero es mayor';
    }


    if (n3==numero3){
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById('n3').style='background-color: green';
        document.getElementById('pista3').innerHTML='';
        
    } else if (numero3<n3){
        var audio5 = document.getElementById("audio5");
    audio5.play();
        document.getElementById('pista3').innerHTML='- El tercer numero es menor';
    }else if (numero3>n3){
        var audio5 = document.getElementById("audio5");
    audio5.play();
        document.getElementById('pista3').innerHTML='- El tercer numero es mayor';
    }
    if (n1==numero1 && n2==numero2 && n3==numero3){
        var audio2 = document.getElementById("audio2");
        audio2.play();
        document.getElementById('cajafuerte').innerHTML=` <div class="informacion">
        <h1 style="text-align: center; margin-bottom: 38px; font-size: 30px; color: green;-webkit-text-stroke: 1px white;text-transform: uppercase;">¡Robaste los codigos!</h1>
        <img style="width:150px" src="img/cajaabierta.png">
        <input onclick="reiniciar()" style="font-size: 28px; padding: 15px; background-color: #8C52FF; color: white;text-transform: uppercase; border: 5px solid white; border-radius: 30px;" type="button" value="volver a jugar">
    </div>`;
    n1 = 0;
    n2 = 0;
    n3 = 0;
    intentos= 0;
    numero1=Math.random();
    numero2=Math.random();
	numero3=Math.random();

    numero1=numero1*10;
    numero2=numero2*10;
    numero3=numero3*10;

	numero1=Math.floor(numero1);
    numero2=Math.floor(numero2);
	numero3=Math.floor(numero3);
    }
    
    //COMPROBACION DIGITOS
    // document.getElementById('comprobar1').innerHTML= numero1;
    // document.getElementById('comprobar2').innerHTML= numero2;
    // document.getElementById('comprobar3').innerHTML= numero3;
    intentos+=1;
    document.getElementById('intentos').innerHTML= '<h3>Intentos restantes: '+ (5-intentos)+'</h3>';
    document.getElementById('pistas').style='display:flex;flex-direction:column';



    
    
    if (intentos>=5){
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById('cajafuerte').innerHTML=` <div class="informacion">
        <h1 style="text-align: center; margin-bottom: 38px; font-size: 30px; color: red;-webkit-text-stroke: 1px white;text-transform: uppercase;">¡Te pillaron!</h1>
        <img style="width:150px" src="img/arresto.png">

        <input onclick="reiniciar()" style="font-size: 28px; padding: 15px; background-color: #8C52FF; color: white;text-transform: uppercase; border: 5px solid white; border-radius: 30px;" type="button" value="volver a intentar">
    </div>`;
    n1 = 0;
    n2 = 0;
    n3 = 0;
    intentos= 0;
    numero1=Math.random();
    numero2=Math.random();
	numero3=Math.random();

    numero1=numero1*10;
    numero2=numero2*10;
    numero3=numero3*10;

	numero1=Math.floor(numero1);
    numero2=Math.floor(numero2);
	numero3=Math.floor(numero3);
   
    }


}
function reiniciar(){
   
    document.getElementById('cajafuerte').innerHTML=`   
    <div class="informacion">  
    <div id="intentos"><h3>Intentos restantes: 5</h3></div>
</div> 
<div class="contenedorcaja">
<div class="filas">  
    <div> <img onclick="subir1()" class="flechaup" src="img/flecharriba.png"></div>
    <div> <img onclick="subir2()" class="flechaup" src="img/flecharriba.png"></div>
    <div> <img onclick="subir3()" class="flechaup" src="img/flecharriba.png"></div>
    <div><img src="img/BLANCO.png"> </div>
</div> 
<div class="filas">  
    <div id="n1" class="numeros"><img class="num" id="num1" src="img/0.png"> </div>
    <div id="n2" class="numeros"><img class="num" src="img/0.png"> </div>
    <div id="n3" class="numeros"><img class="num" src="img/0.png"> </div>
    <div id="divrueda"><img onclick="comprobar()"  id="rueda" src="img/rueda.png"> </div>
</div> 
<div class="filas">  
    <div><img onclick="bajar1()" class="flechadown" src="img/flechaabajo.png"></div>
    <div><img onclick="bajar2()" class="flechadown" src="img/flechaabajo.png"></div>
    <div><img onclick="bajar3()" class="flechadown" src="img/flechaabajo.png"></div>
    <div><img src="img/BLANCO.png"></div>
</div> 
<div class="filas">  
    <div id="comprobar1"></div>
    <div id="comprobar2"></div>
    <div id="comprobar3"></div>
</div> 

</div>
<div class="informacion">  
<div style="display: none;" id="pistas">
        <h5 id="pista1"></h5>
        <h5 id="pista2"></h5>
        <h5 id="pista3"></h>
</div>
</div> 
 `;
 
}
function cambiarrueda(){
    document.getElementById('rueda').src='img/ruedahover.png';

}
function devolverrueda(){
    document.getElementById('rueda').src='img/rueda.png';

}
