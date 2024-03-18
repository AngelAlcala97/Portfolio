var ejex= 0;
var ejey=0;
aleatorio=0;
function start() {
    
     ejex = Math.floor(Math.random() * 251);
     ejey = Math.floor(Math.random() * 251);
     var aleatorio= (Math.floor(Math.random()*4)+1);
     var bocata= (Math.floor(Math.random()*10)+1);

     switch (bocata) {
        case 1:
          mensaje='Ayudame porfavor'
        break;
        case 2:
            mensaje='Estoy atrapado'
            break;
        case 3:
            mensaje='¿Que me esta pasando?'
            break;
        case 4:
            mensaje='AHHHH'
            break;
        case 5:
            mensaje='Socorro'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='😡'
            } else {
            mensaje='😭'
            }
        break;
        
      }
      document.getElementById('todo').style='transition: 5s ease-in';
      
      document.getElementById('todo').innerHTML = `
    <div id="robot" class="robot">
            <h4 id="mensaje1" style="top:`+(ejey)+`px;left:`+(ejex+110)+`px;position:absolute">`+mensaje+`</h4>
            <img id="heroe" style="top:`+ejey+`px;left:`+ejex+`px;position:absolute" src="img/heroe`+aleatorio+`.png">
        </div>

        <div  class="controles">
        <div id="start" class="subcontroles"><img style="width: 150px;" onclick="start()" src="img/start2.png">
        </div>
            <div class="subcontroles">
                <img class="botones" onclick="left()" src="img/left2.png">
            </div>
            <div class="subcontroles">
                <img class="botones" onclick="up()" src="img/top2.png">
                <img class="botones" onclick="down()" src="img/bot2.png">

            </div>
            <div class="subcontroles">
                <img class="botones" onclick="right()" src="img/right2.png">
            </div>
        </div>`;
}

function up(){
    aleatorio=1;
    ejey-= 5;
    var bocata= (Math.floor(Math.random()*10)+1);

     switch (bocata) {
        case 1:
          mensaje='Ayudame porfavor'
        break;
        case 2:
            mensaje='Estoy atrapado'
            break;
        case 3:
            mensaje='¿Que me esta pasando?'
            break;
        case 4:
            mensaje='AHHHH'
            break;
        case 5:
            mensaje='Socorro'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='😡'
            } else {
            mensaje='😭'
            }
        break;
        
      }
    
      if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<320)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Gracias por salvarme';
        aleatorio=5;
    }
    
    document.getElementById('robot').innerHTML= `
    <h4 id="mensaje" style="top:`+(ejey)+`px;left:`+(ejex+110)+`px;position:absolute">`+mensaje+`</h4>
    <img id="heroe" style="top:`+ejey+`px;left:`+ejex+`px;position:absolute;transition: 5s linear;" src="img/heroe`+aleatorio+`.png">`
}

function down(){
    aleatorio=2;
    ejey+=5;
    var bocata= (Math.floor(Math.random()*10)+1);

     switch (bocata) {
        case 1:
          mensaje='Ayudame porfavor'
        break;
        case 2:
            mensaje='Estoy atrapado'
            break;
        case 3:
            mensaje='¿Que me esta pasando?'
            break;
        case 4:
            mensaje='AHHHH'
            break;
        case 5:
            mensaje='Socorro'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='😡'
            } else {
            mensaje='😭'
            }
        break;
        
      }
    if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Gracias por salvarme';
        aleatorio=5;
    }
    document.getElementById('robot').innerHTML= `
    <h4 id="mensaje" style="top:`+(ejey)+`px;left:`+(ejex+110)+`px;position:absolute">`+mensaje+`</h4>
    <img id="heroe" style="top:`+ejey+`px;left:`+ejex+`px;position:absolute;transition: 5s linear;" src="img/heroe`+aleatorio+`.png">`
}

function left(){
    aleatorio=3;
    ejex-=5;
    var bocata= (Math.floor(Math.random()*10)+1);

     switch (bocata) {
        case 1:
          mensaje='Ayudame porfavor'
        break;
        case 2:
            mensaje='Estoy atrapado'
            break;
        case 3:
            mensaje='¿Que me esta pasando?'
            break;
        case 4:
            mensaje='AHHHH'
            break;
        case 5:
            mensaje='Socorro'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='😡'
            } else {
            mensaje='😭'
            }
        break;
        
      }
      if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Gracias por salvarme';
        aleatorio=5;
    }
    document.getElementById('robot').innerHTML= `
    <h4 id="mensaje" style="top:`+(ejey)+`px;left:`+(ejex+110)+`px;position:absolute">`+mensaje+`</h4>
    <img id="heroe" style="top:`+ejey+`px;left:`+ejex+`px;position:absolute;transition: 5s linear;" src="img/heroe`+aleatorio+`.png">`
}

function right(){
    aleatorio=4;
    ejex+=5;
    var bocata= (Math.floor(Math.random()*10)+1);

     switch (bocata) {
        case 1:
          mensaje='Ayudame porfavor'
        break;
        case 2:
            mensaje='Estoy atrapado'
            break;
        case 3:
            mensaje='¿Que me esta pasando?'
            break;
        case 4:
            mensaje='AHHHH'
            break;
        case 5:
            mensaje='Socorro'
        break;
        default:
            if (bocata>5 && bocata<9){
            mensaje='😡'
            } else {
            mensaje='😭'
            }
        break;
        
      }
      if (((ejex>-50) && (ejey>320)) | ((ejex<-50) && (ejey<340)) | ((ejex>340) && (ejey>0)) | ((ejex>340) && (ejey>320)) | ((ejex<-50) && (ejey<0))  | ((ejex<-50) && (ejey>320)) | ((ejex>340) && (ejey<0)) | ((ejex<340) && (ejey<-150))   ){
        mensaje='Gracias por salvarme';
        aleatorio=5;
    }
    document.getElementById('robot').innerHTML= `
    <h4 id="mensaje" style="top:`+(ejey)+`px;left:`+(ejex+110)+`px;position:absolute">`+mensaje+`</h4>
    <img id="heroe" style="top:`+ejey+`px;left:`+ejex+`px;position:absolute;transition: 5s linear;" src="img/heroe`+aleatorio+`.png">`
    
}