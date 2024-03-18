var ejex= 0;
var ejey=0;
aleatorio=0;
var ejex2= 0;
var ejey2=0;
aleatorio=0;
function start() {
    
     ejex = Math.floor(Math.random() * 251);
     ejey = Math.floor(Math.random() * 251);
     var aleatorio= (Math.floor(Math.random()*4)+1);
     ejex2 = Math.floor(Math.random() * 251);
     ejey2 = Math.floor(Math.random() * 251);
     var aleatorio2= (Math.floor(Math.random()*4)+1);
     var bocata= (Math.floor(Math.random()*10)+1);

     switch (bocata) {
        case 1:
          mensaje='¡Piccolo!'
        break;
        case 2:
            mensaje='¿Que hacemos aqui?'
            break;
        case 3:
            mensaje='Creo que es obra de Freezer'
            break;
        case 4:
            mensaje='¿Sabes algo de Gohan?'
            break;
        case 5:
            mensaje='No nos quedan judias senzu'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='Voy a intentar algo'
            } else {
            mensaje='Algo me bloquea'
            }
        break;
        
      }
      var bocata2= (Math.floor(Math.random()*10)+1);

      switch (bocata2) {
        case 1:
          mensaje2='¿Goku?'
        break;
        case 2:
            mensaje2='¿Que esta pasando?'
            break;
        case 3:
            mensaje2='¿Contra quien nos enfrentamos?'
            break;
        case 4:
            mensaje2='¿Son los saiyans?'
            break;
        case 5:
            mensaje2='¿Freezer?'
        break;
        default:
            if (bocata2>5 && bocata2<9){
            mensaje2='Estamos atrapados'
            } else {
            mensaje2='Contacta con Krillin'
            }
        break;
        
      }
      
      document.getElementById('todo').innerHTML = `
    <div id="robot" class="robot">
    <div id="robot1"  style="top:`+ejey+`px;left:`+ejex+`px;position:absolute">
            <h4 id="mensaje1">¿Piccolo?</h4>
            <img id="heroe" src="img/heroe.png">
            </div>
            <div id="robot2" style="top:`+(ejey2)+`px;left:`+(ejex2)+`px;position:absolute">
            <h4 id="mensaje">¿Goku?</h4>
            <img id="heroe2" src="img/heroe10.png">
            </div>
            </div>
        <div  class="controles">
        <div class="subcontroles">
        <img class="botones" onclick="left()" src="img/left3.png">
        </div>
        <div class="subcontroles">
        <img id="botonup" class="botones" onclick="up()" src="img/top3.png">
        <img class="botones" onclick="down()" src="img/bot3.png">
        
        </div>
        <div class="subcontroles">
        <img class="botones" onclick="right()" src="img/right3.png">
        
        </div>
        <div id="start" class="subcontroles"><img style="width: 150px;" onclick="start()" src="img/start3.png">
        </div>
        <div class="subcontroles">
        <img class="botones" onclick="left2()" src="img/left3.png">
        </div>
        <div class="subcontroles">
        <img class="botones" onclick="up2()" src="img/top3.png">
        <img class="botones" onclick="down2()" src="img/bot3.png">

        </div>
        <div class="subcontroles">
        <img class="botones" onclick="right2()" src="img/right3.png">
        </div>
        `;
}

function up(){
    document.getElementById('audio').play()
    aleatorio=3;
    ejey-= 30;
    var bocata= (Math.floor(Math.random()*10)+1);

    switch (bocata) {
        case 1:
          mensaje='¡Piccolo!'
        break;
        case 2:
            mensaje='¿Que hacemos aqui?'
            break;
        case 3:
            mensaje='Creo que es obra de Freezer'
            break;
        case 4:
            mensaje='¿Sabes algo de Gohan?'
            break;
        case 5:
            mensaje='No nos quedan judias senzu'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='Voy a intentar algo'
            } else {
            mensaje='Algo me bloquea'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=6;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
        if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
            mensaje2='Sal de ahi Goku';
            aleatorio2=10;
            document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
            document.getElementById('body').style.transition='1s ease-in-out'

        }   

        if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
           mensaje='¿Que ha sido eso?'
           mensaje2='¿Teletransporte?'
            document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
            document.getElementById('robot').style='background: url(img/fondorobot.png)';
            document.getElementById('body').style.transition='1s ease-in-out'
            document.getElementById('robot').style.transition='1s ease-in-out'

        } 
        
        document.getElementById('mensaje1').innerHTML=mensaje
        document.getElementById('heroe').src=`img/heroe`+aleatorio+`.gif`
        document.getElementById('robot1').style=`top:`+ejey+`px;left:`+ejex+`px;position:absolute`
        document.getElementById('robot1').style.transition='1s'
        


}

function down(){
    document.getElementById('audio').play()

    aleatorio=4;
    ejey+=30;
    var bocata= (Math.floor(Math.random()*10)+1);

    switch (bocata) {
        case 1:
          mensaje='¡Piccolo!'
        break;
        case 2:
            mensaje='¿Que hacemos aqui?'
            break;
        case 3:
            mensaje='Creo que es obra de Freezer'
            break;
        case 4:
            mensaje='¿Sabes algo de Gohan?'
            break;
        case 5:
            mensaje='No nos quedan judias senzu'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='Voy a intentar algo'
            } else {
            mensaje='Algo me bloquea'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
    if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=5;   
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=9;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    document.getElementById('mensaje1').innerHTML=mensaje
    document.getElementById('heroe').src=`img/heroe`+aleatorio+`.gif`
    document.getElementById('robot1').style=`top:`+ejey+`px;left:`+ejex+`px;position:absolute`
    document.getElementById('robot1').style.transition='1s'
}

function left(){
    document.getElementById('audio').play()

    aleatorio=3;
    ejex-=30;
    var bocata= (Math.floor(Math.random()*10)+1);

    switch (bocata) {
        case 1:
          mensaje='¡Piccolo!'
        break;
        case 2:
            mensaje='¿Que hacemos aqui?'
            break;
        case 3:
            mensaje='Creo que es obra de Freezer'
            break;
        case 4:
            mensaje='¿Sabes algo de Gohan?'
            break;
        case 5:
            mensaje='No nos quedan judias senzu'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='Voy a intentar algo'
            } else {
            mensaje='Algo me bloquea'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      
      if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=6; 
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'
    }
    
    if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=10;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    document.getElementById('mensaje1').innerHTML=mensaje
    document.getElementById('heroe').src=`img/heroe`+aleatorio+`.gif`
    document.getElementById('robot1').style=`top:`+ejey+`px;left:`+ejex+`px;position:absolute`
    document.getElementById('robot1').style.transition='1s'
    
}

function right(){
    document.getElementById('audio').play()

    aleatorio=4;
    ejex+=30;
    var bocata= (Math.floor(Math.random()*10)+1);

    switch (bocata) {
        case 1:
          mensaje='¡Piccolo!'
        break;
        case 2:
            mensaje='¿Que hacemos aqui?'
            break;
        case 3:
            mensaje='Creo que es obra de Freezer'
            break;
        case 4:
            mensaje='¿Sabes algo de Gohan?'
            break;
        case 5:
            mensaje='No nos quedan judias senzu'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='Voy a intentar algo'
            } else {
            mensaje='Algo me bloquea'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=5; 
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=9;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    document.getElementById('mensaje1').innerHTML=mensaje
    document.getElementById('heroe').src=`img/heroe`+aleatorio+`.gif`
    document.getElementById('robot1').style=`top:`+ejey+`px;left:`+ejex+`px;position:absolute`
    document.getElementById('robot1').style.transition='1s'
}

function up2(){
    document.getElementById('audio2').play()

    aleatorio2=7;
    ejey2-= 30;
    var bocata2= (Math.floor(Math.random()*10)+1);

    switch (bocata2) {
        case 1:
          mensaje2='¿Goku?'
        break;
        case 2:
            mensaje2='¿Que esta pasando?'
            break;
        case 3:
            mensaje2='¿Contra quien nos enfrentamos?'
            break;
        case 4:
            mensaje2='¿Son los saiyans?'
            break;
        case 5:
            mensaje2='¿Freezer?'
        break;
        default:
            if (bocata2>5 && bocata2<9){
            mensaje2='Estamos atrapados'
            } else {
            mensaje2='Contacta con Krillin'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=10;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=6;    
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    
    document.getElementById('mensaje').innerHTML=mensaje2
    document.getElementById('heroe2').src=`img/heroe`+aleatorio2+`.gif`
    document.getElementById('robot2').style=`top:`+ejey2+`px;left:`+ejex2+`px;position:absolute`
    document.getElementById('robot2').style.transition='1s'
}

function down2(){
    document.getElementById('audio2').play()

    aleatorio2=8;
    ejey2+=30;
    var bocata2= (Math.floor(Math.random()*10)+1);

    switch (bocata2) {
        case 1:
          mensaje2='¿Goku?'
        break;
        case 2:
            mensaje2='¿Que esta pasando?'
            break;
        case 3:
            mensaje2='¿Contra quien nos enfrentamos?'
            break;
        case 4:
            mensaje2='¿Son los saiyans?'
            break;
        case 5:
            mensaje2='¿Freezer?'
        break;
        default:
            if (bocata2>5 && bocata2<9){
            mensaje2='Estamos atrapados'
            } else {
            mensaje2='Contacta con Krillin'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=9;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=5;   
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    document.getElementById('mensaje').innerHTML=mensaje2
    document.getElementById('heroe2').src=`img/heroe`+aleatorio2+`.gif`
    document.getElementById('robot2').style=`top:`+ejey2+`px;left:`+ejex2+`px;position:absolute`
    document.getElementById('robot2').style.transition='1s'
}
function left2(){
    document.getElementById('audio2').play()

    aleatorio2=8;
    ejex2-=30;
    var bocata2= (Math.floor(Math.random()*10)+1);

    switch (bocata2) {
        case 1:
          mensaje2='¿Goku?'
        break;
        case 2:
            mensaje2='¿Que esta pasando?'
            break;
        case 3:
            mensaje2='¿Contra quien nos enfrentamos?'
            break;
        case 4:
            mensaje2='¿Son los saiyans?'
            break;
        case 5:
            mensaje2='¿Freezer?'
        break;
        default:
            if (bocata2>5 && bocata2<9){
            mensaje2='Estamos atrapados'
            } else {
            mensaje2='Contacta con Krillin'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=10;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=6;    
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    document.getElementById('mensaje').innerHTML=mensaje2
    document.getElementById('heroe2').src=`img/heroe`+aleatorio2+`.gif`
    document.getElementById('robot2').style=`top:`+ejey2+`px;left:`+ejex2+`px;position:absolute`
    document.getElementById('robot2').style.transition='1s'
}

function right2(){
    document.getElementById('audio2').play()

    aleatorio2=7;
    ejex2+=30;
    var bocata2= (Math.floor(Math.random()*10)+1);

     switch (bocata2) {
        case 1:
          mensaje2='¿Goku?'
        break;
        case 2:
            mensaje2='¿Que esta pasando?'
            break;
        case 3:
            mensaje2='¿Contra quien nos enfrentamos?'
            break;
        case 4:
            mensaje2='¿Son los saiyans?'
            break;
        case 5:
            mensaje2='¿Freezer?'
        break;
        default:
            if (bocata2>5 && bocata2<9){
            mensaje2='Estamos atrapados'
            } else {
            mensaje2='Contacta con Krillin'
            }
        break;
        
      }
      document.getElementById('body').style='background: url(img/fondo.png);background-attachment: fixed;background-size: cover;';
      document.getElementById('robot').style='background: url(img/fondorobot0.png)';
      document.getElementById('body').style.transition='1s ease-in-out'
      document.getElementById('robot').style.transition='1s ease-in-out'
      if (((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))   ){
        mensaje2='Sal de ahi Goku';
        aleatorio2=9;
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Escapa Piccolo';
        aleatorio=5;  
        document.getElementById('body').style='background: url(img/fondoroto.png);background-attachment: fixed;background-size: cover;';
        document.getElementById('body').style.transition='1s ease-in-out'

    }
    if ((((ejex2>-50) && (ejey2>320)) | ((ejex2<-50) && (ejey2<340)) | ((ejex2>340) && (ejey2>0)) | ((ejex2>340) && (ejey2>320)) | ((ejex2<-50) && (ejey2<0))  | ((ejex2<-50) && (ejey2>320)) | ((ejex2>340) && (ejey2<0)) | ((ejex2<340) && (ejey2<-150))) && (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ) ){
        mensaje='¿Que ha sido eso?'
        mensaje2='¿Teletransporte?'
         document.getElementById('body').style='background: url(img/fondo.jpg);background-attachment: fixed;background-size: cover;';
         document.getElementById('robot').style='background: url(img/fondorobot.png)';
         document.getElementById('body').style.transition='1s ease-in-out'
         document.getElementById('robot').style.transition='1s ease-in-out'
     }
    document.getElementById('mensaje').innerHTML=mensaje2
    document.getElementById('heroe2').src=`img/heroe`+aleatorio2+`.gif`
    document.getElementById('robot2').style=`top:`+ejey2+`px;left:`+ejex2+`px;position:absolute`
    document.getElementById('robot2').style.transition='1s'
}


function magia(){
    document.getElementById('heroe').src=`img/heroe9.gif`
}