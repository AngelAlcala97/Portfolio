var tiradaaleatoria6 = Math.round(Math.random() * (7 - 1) + 1);
var tirada1 = 0;
var tirada2 = 0;
var tirada3 = 0;
var tirada4 = 0;
var tirada5 = 0;
var tirada6 = 0;
var ntiradas= 0;
var ultimastiradas=0;
var tiradatotal= 0;
var dados6 = document.getElementById('dados6');

function lanzardado6() {
    var audio= document.getElementById('audio');
    audio.play();

    if (tiradaaleatoria6 == 1) {
        dados6.innerHTML = '<img class="imagendado" src="img/cara' + tiradaaleatoria6 + '.png">';
        tirada1+= 1;
        ntiradas+=1;
    } else if (tiradaaleatoria6 == 2) {
        dados6.innerHTML = '<img class="imagendado" src="img/cara' + tiradaaleatoria6 + '.png">';
        tirada2+= 1;
        ntiradas+=1;
    } else if (tiradaaleatoria6 == 3) {
        dados6.innerHTML = '<img class="imagendado" src="img/cara' + tiradaaleatoria6 + '.png">';
        tirada3+= 1;
        ntiradas+=1;
    } else if (tiradaaleatoria6 == 4) {
        dados6.innerHTML = '<img class="imagendado" src="img/cara' + tiradaaleatoria6 + '.png">';
        tirada4+= 1;
        ntiradas+=1;
    } else if (tiradaaleatoria6 == 5) {
        dados6.innerHTML = '<img class="imagendado" src="img/cara' + tiradaaleatoria6 + '.png">';
        tirada5+= 1;
        ntiradas+=1;
    } else if (tiradaaleatoria6 == 6) {
        dados6.innerHTML = '<img class="imagendado" src="img/cara' + tiradaaleatoria6 + '.png">';
        tirada6+= 1;
        ntiradas+=1;
    }
    tiradatotal+= tiradaaleatoria6;
    document.getElementById('estadistica').innerHTML=`

    <table>
    <tr>
        <td style="background:#062d1c;text-transform:uppercase;padding:5px">Cara</td>
        <td style="background:#062d1c;text-transform:uppercase;padding:5px">Porcentaje</td>
        <td style="background:#062d1c;text-transform:uppercase;padding:5px">Veces</td>
    </tr>
    <tr>
        <td>1</td>
        <td>`+((tirada1*100)/ntiradas).toFixed(2)+`%</td>
        <td>`+tirada1+`</td>
    </tr>
    <tr>
        <td>2</td>
        <td>`+((tirada2*100)/ntiradas).toFixed(2)+`%</td>
        <td>`+tirada2+`</td>
    </tr>
    <tr>
        <td>3</td>
        <td>`+((tirada3*100)/ntiradas).toFixed(2)+`%</td>
        <td>`+tirada3+`</td>
    </tr>
    <tr>
        <td>4</td>
        <td>`+((tirada4*100)/ntiradas).toFixed(2)+`%</td>
        <td>`+tirada4+`</td>
    </tr>
    <tr>
        <td>5</td>
        <td>`+((tirada5*100)/ntiradas).toFixed(2)+`%</td>
        <td>`+tirada5+`</td>
    </tr>
    <tr>
        <td>6</td>
        <td>`+((tirada6*100)/ntiradas).toFixed(2)+`%</td>
        <td>`+tirada6+`</td>
    </tr>
    <tr>
        <td colspan="2" style="background:#062d1c;text-transform:uppercase;padding:5px;"><strong style="color:#fff">Numero de lanzamientos</td>
        <td style="background:white; color:#062d1c ">`+ntiradas+`</td>
    <tr>
    <tr>
        <td colspan="2" style="background:#062d1c;text-transform:uppercase;padding:5px;"><strong style="color:#fff">Promedio</td>
        <td style="background:white; color:#062d1c ">`+Math.floor(tiradatotal/ntiradas)+`</td>
    <tr>
    </table>
    `;


    document.getElementById('grafico1').innerHTML='<h4>1</h4>'+((tirada1*100)/ntiradas).toFixed(2)+'%';
    document.getElementById('grafico1').style='background-color: white;border: 5px inset #4ddb98;padding:5px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;height:'+((tirada1*400)/ntiradas).toFixed(2)+'px';

    document.getElementById('grafico2').innerHTML='<h4>2</h4>'+((tirada2*100)/ntiradas).toFixed(2)+'%';
    document.getElementById('grafico2').style='background-color: white;border: 5px inset #4ddb98;padding:5px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;height:'+((tirada2*400)/ntiradas).toFixed(2)+'px';
    
    document.getElementById('grafico3').innerHTML='<h4>3</h4>'+((tirada3*100)/ntiradas).toFixed(2)+'%';
    document.getElementById('grafico3').style='background-color: white;border: 5px inset #4ddb98;padding:5px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;;height:'+((tirada3*400)/ntiradas).toFixed(2)+'px';
    
    document.getElementById('grafico4').innerHTML='<h4>4</h4>'+((tirada4*100)/ntiradas).toFixed(2)+'%';
    document.getElementById('grafico4').style='background-color: white;border: 5px inset #4ddb98;padding:5px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;height:'+((tirada4*400)/ntiradas).toFixed(2)+'px';
    
    document.getElementById('grafico5').innerHTML='<h4>5</h4>'+((tirada5*100)/ntiradas).toFixed(2)+'%';
    document.getElementById('grafico5').style='background-color: white;border: 5px inset #4ddb98;padding:5px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;height:'+((tirada5*400)/ntiradas).toFixed(2)+'px';
    
    document.getElementById('grafico6').innerHTML='<h4>6</h4>'+((tirada6*100)/ntiradas).toFixed(2)+'%';
    document.getElementById('grafico6').style='background-color: white;border: 5px inset #4ddb98;padding:5px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;height:'+((tirada6*400)/ntiradas).toFixed(2)+'px';
    

    ultimastiradas= tiradaaleatoria6
    document.getElementById('tiradas').style='border: 2px inset white;'
    document.getElementById('tiradas').innerHTML+='&nbsp<p><img src="img/cara' + ultimastiradas + '.png"></p>&nbsp';
    tiradas.scrollBy(100, 0);


    tiradaaleatoria6 = Math.round(Math.random() * (6 - 1) + 1);

}

//10 CARAS
var tiradaaleatoria10 = Math.round(Math.random() * (11 - 1) + 1);
var dados10 = document.getElementById('dados10');

function lanzardado10() {
    var audio= document.getElementById('audio');
    audio.play();
    
    if (tiradaaleatoria10 == 1) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 2) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 3) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 4) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 5) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 6) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 7) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 8) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 9) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    } else if (tiradaaleatoria10 == 10) {
        dados10.innerHTML = '<img class="imagendado" src="img/cara10' + tiradaaleatoria10 + '.png">';
    }
    tiradaaleatoria10 = Math.round(Math.random() * (11 - 1) + 1);
}
//20 CARAS
var tiradaaleatoria20 = Math.round(Math.random() * (21 - 1) + 1);
var dados20 = document.getElementById('dados20');

function lanzardado20() {
    var audio= document.getElementById('audio');
    audio.play();
    
    if (tiradaaleatoria20 == 1) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 2) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 3) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 4) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 5) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 6) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 7) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 8) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 9) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 10) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 11) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 12) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 13) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 14) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 15) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 16) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 17) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 18) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 19) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } else if (tiradaaleatoria20 == 20) {
        dados20.innerHTML = '<img class="imagendado" src="img/cara20' + tiradaaleatoria20 + '.png">';
    } 

    
    tiradaaleatoria20 = Math.round(Math.random() * (21 - 1) + 1);
}

var encendido=document.getElementById('switch').value;
function cambiarfondo(){
  if (encendido=='on'){
document.getElementById('body').style='background: linear-gradient(#1d1d1d,#4ddb98)';
encendido='off';
  } else { document.getElementById('body').style='background: linear-gradient(#4ddb98,#062d1c)';
        encendido='on';

}
}