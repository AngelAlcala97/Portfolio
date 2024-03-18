
function tablero(){
    var i=0;
    var filas=0;
    var size= document.getElementById('size').value
    var alto= document.getElementById('alto').value
    var ancho= document.getElementById('ancho').value
    var divs='';
    var par=document.getElementById('color1').value
    var impar=document.getElementById('color2').value
    
    document.getElementById('tablero').style.width=(size*ancho)+'px'
    document.getElementById('tablero').style.height=(size*alto)+'px'

    if (ancho%2!=0){
     while (i<(ancho*alto)){
        if (i%2==0){
            color= par
        } else{
            color=impar
        }
    
         divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"></div>'
       i++
    }
    document.getElementById('tablero').innerHTML=divs
    } else {
        while (i<(ancho*alto)){
            if (i%ancho==0){
                filas+=1
            }
            if (filas%2!=0){
                color=impar
                if (i%2==0){
                    color= par
                } else{
                    color=impar
                }
            } else {
                if (i%2==0){
                    color= impar
                } else{
                    color=par
                }
            }
            if (ancho==8 && alto==8){
            
            if (i==0 | i==7){
            //Torre blanca
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="blancas" style="width:'+size+'px" src="img/torre2.png"></div>'
                i++
            }  else if (i==1 | i==6) {
            //Caballo blanco
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="blancas" style="width:'+size+'px" src="img/caballo2.png"></div>'
                i++
            } else if (i==2 | i==5) {
            //Alfil blanco
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="blancas" style="width:'+size+'px" src="img/alfil2.png"></div>'
                i++
            }  else if (i==3) {
            //Rey blanco
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="blancas" style="width:'+size+'px" src="img/rey2.png"></div>'
                i++
            } else if (i==4) {
            //Reina blanca
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="blancas" style="width:'+size+'px" src="img/reina2.png"></div>'
                i++
            } else if (i>7 && i<16){
            //Peones blancos
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="blancas" style="width:'+size+'px" src="img/peon2.png"></div>'
                i++
            } else if (i<56 && i>47) {
            //Peones negros
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="negras" style="width:'+size+'px" src="img/peon.png"></div>'
                i++
            } else if (i==63 | i==56 ){
            //Torre negra
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="negras" style="width:'+size+'px" src="img/torre.png"></div>'
                i++
            } else if (i==62 | i==57 ) {
            //Caballo negro
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="negras" style="width:'+size+'px" src="img/caballo.png"></div>'
                i++
            } else if ( i==61 | i==58 ) {
            //Alfil negro
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="negras" style="width:'+size+'px" src="img/alfil.png"></div>'
                i++
            }  else if (i==59 ) {
            //Rey negro
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="negras" style="width:'+size+'px" src="img/rey.png"></div>'
                i++
            } else if (i==60 ) {
            //Reina negra
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"><img class="negras" style="width:'+size+'px" src="img/reina.png"></div>'
                i++
            } else {
                divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"></div>'
                i++  
            }
        } else {
             divs+='<div id="casilla'+i+'" class="casilla" style="animation: casillas '+(i/20)+'s ease;width:'+size+'px;height:'+size+'px;position:relative;float:left;background:'+color+'"></div>'
            i++

        }
        
    }
    document.getElementById('tablero').innerHTML=divs
}
} 
function pintaje(){
    document.getElementById('pintaje').style='display:flex'
    document.getElementById('logotexto').style.animation='none'
}