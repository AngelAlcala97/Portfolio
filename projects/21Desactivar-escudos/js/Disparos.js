var exterior=true

class Disparo {
    constructor(number, posY, posX, tirador, objetivo) {
        this.number = number;
        this.posY = parseInt(posY.split('px')[0]);
        this.posX = parseInt(posX.split('px')[0]);
        this.tirador = tirador;
        this.objetivo = objetivo;
        

    }

    crearDisparo(){
        document.body.innerHTML += `<div id="${this.number}" class="disparo"></div>`;
        //movNave = document.getElementById('nave').style; //LA CLAVE
        document.getElementById(this.number).style.top = `${this.posY}px`;
        document.getElementById(this.number).style.left = `${this.posX}px`;
        // console.log(this.posX)
        timers.push(setInterval(avance, 25, this));
    }

}

class DisparoEnemigo {
    constructor(number, posY, posX) {
        this.number = number;
        this.posY = posY;
        this.posX = posX;
        this.objetivo = movNave;
    }

    crearDisparoEnemigo(){
        document.body.innerHTML += `<div id="${this.number}" class="disparoEnemigo"></div>`;
        //movNave = document.getElementById('nave').style; //LA CLAVE
        document.getElementById(this.number).style.top = `${this.posY}px`;
        // document.getElementById(this.number).style.top = this.posY+this.ancho+'px';
        document.getElementById(this.number).style.left = `${this.posX}px`;
        // console.log(this.posX)
        timers.push(setInterval(avanceEnemigo, 25, this));
    }

}
// && ((idntf.posy > idntf.objetivo.posy) && (idntf.posy < (idntf.objetivo.posy + idntf.objetivo.alto)))
function testImpacto(idntf){
    if(((idntf.posX > parseInt(idntf.objetivo.posx)) && (idntf.posX < (parseInt(idntf.objetivo.posx + idntf.objetivo.ancho))))){
        if (((idntf.posY > parseInt(idntf.objetivo.posy)) && (idntf.posY < (parseInt(idntf.objetivo.posy + idntf.objetivo.alto))))){
            clearInterval(timers[idntf.number])
            document.getElementById(idntf.number).style.background='url("img/disparo.webp")'
            document.getElementById(idntf.number).style.backgroundRepeat='no-repeat'
            document.getElementById(idntf.number).style.backgroundSize='cover'
            document.getElementById(idntf.number).style.top=idntf.objetivo.posy+(idntf.objetivo.ancho*0.5) + 'px'
            document.getElementById(idntf.number).style.zIndex='20'

            
            idntf.objetivo.vida-=EjercitoEnemigo[esteEnemigo].DEF
            document.getElementById('vidaEnemigos').style.width=idntf.objetivo.vida+'%'
            setTimeout(()=>{
            document.body.removeChild(document.getElementById(idntf.number))
            if ( idntf.objetivo.vida<=0){
                exterior=false
                console.log('prueba')
                clearInterval(timerEnemigo[timer])
                timerEnemigo=[]
                timer=0
                clearInterval(timersDisparosEnemigos[contadorEnemigos])
                document.getElementById('vidaEnemigos').style.width='0%'
                document.getElementById('iconoEnemigo').innerHTML=``
                document.getElementById('enemigos').innerHTML='<img id="explosion" src="img/explode.gif">'
                document.getElementById('explosion').style.position= 'relative'
                document.getElementById('explosion').style.left= idntf.objetivo.posx + 'px'
                document.getElementById('explosion').style.top= idntf.objetivo.posy + 'px'
                document.getElementById('explosion').style.width= idntf.objetivo.ancho + 'px'
                // document.getElementById('vidaEnemigos').
                setTimeout(()=>{
                    document.getElementById('enemigos').innerHTML=''
                    clearInterval(timerEnemigo[timer])
                    timerEnemigo=[]
                    timer=0
                },1000)
                
                setTimeout(()=>{
                    document.getElementById('hackConsole').style.display='flex'
                    clearInterval(timerEnemigo[timer])
                    timerEnemigo=[]
                    timer=0
                },2000)
                
            }
            },250)

        }
    }
    // else{
    //     console.log('nada')
    // }
}

function testImpactoNave(idntf){
    // console.log(movNave.left.split('px')[0])
    // if(((idntf.posX > parseInt(movNave.left.split('px')[0])) && (idntf.posX < (parseInt(movNave.left.split('px')[0]) + ((document.documentElement.clientWidth)* .05))))){
    //     if (((idntf.posY > parseInt(movNave.top.split('px')[0])) && (idntf.posY < (parseInt(movNave.top.split('px')[0]) + (document.documentElement.clientHeight)* .07)))){
    // if((idntf.posX < (parseInt(movNave.left) + ((document.documentElement.clientWidth)* .05)) ) && ((idntf.posX > parseInt(movNave.left))) ){
    //     if (((idntf.posY > parseInt(movNave.top)) && (idntf.posY < (parseInt(movNave.top) + ((document.documentElement.clientHeight)* .07))))){
            if( (parseInt(movNave.left)-50) < idntf.posX &&   idntf.posX < (parseInt(movNave.left) + ((document.documentElement.clientWidth)* .05)) ){
                if ((parseInt(movNave.top)< idntf.posY &&  idntf.posY < (parseInt(movNave.top) + ((document.documentElement.clientHeight)* .07)))){
                 
            console.log('left '+ movNave.left)
            console.log('7vw '+((document.documentElement.clientWidth)* .07))
            console.log('Total '+(parseInt(movNave.left.split('px')[0]) + ((document.documentElement.clientWidth)* .07)))
            clearInterval(timers[idntf.number])
            document.getElementById(idntf.number).style.background='url("img/disparo.webp")'
            document.getElementById(idntf.number).style.backgroundRepeat='no-repeat'
            document.getElementById(idntf.number).style.backgroundSize='cover'
            document.getElementById(idntf.number).style.zIndex='20'
            
            setTimeout(()=>{
                document.body.removeChild(document.getElementById(idntf.number))
                life.lowStats(EjercitoEnemigo[esteEnemigo].ATK)
                },150)
        }
    }else{
        console.log('nada')
    }
}

function avance(idntf){
    // if (idntf.posY == objetivo.posY && idntf.posx == objetivo.posX ){
    // }
    const element = document.getElementById(idntf.number);
    if(idntf.posY <= -150){
        clearInterval(timers[idntf.number])
        document.body.removeChild(element)
        // console.log('hola')
    }else{
        idntf.posY -=25 
        element.style.top=`${idntf.posY}px`
        testImpacto(idntf)
    }

}

function avanceEnemigo(idntf){
    var element = document.getElementById(idntf.number);
    if(idntf.posY >= 1000){
        clearInterval(timers[idntf.number])
        document.body.removeChild(element)
        // console.log('hola')
    }else{
        idntf.posY +=25 
        element.style.top=`${idntf.posY}px`
        testImpactoNave(idntf)
    }
}