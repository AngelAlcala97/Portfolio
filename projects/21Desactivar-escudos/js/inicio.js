var password=[];
var HUD=[];
var disparos=[];
var timers=[]
var numDisparos=0
var vida=100;
var escudo=0;
var bonus=0;
var niceLetters=0
var nicePasswords=0
var wrongLetters=0
var wrongPasswords=0
var posNaveX=45
var posNaveY=70
var movNave;
var contadorEnemigos=0
var esteEnemigo=0
var Enemigos=[new Enemigo('Enemigo'+contadorEnemigos+'', EjercitoEnemigo[contadorEnemigos].vida, 'img/'+EjercitoEnemigo[contadorEnemigos].nombre+'.gif',0,0,EjercitoEnemigo[contadorEnemigos].ancho)]
var recarga=true
var credits=10000
var timersDisparosEnemigos=[]
var audio = document.getElementById('audio')
var audio2 = document.getElementById('audio2')

var inicio = {
    
	iniciar() {
        masterPassword.generatePassword();
        buclePrincipal.iterar()
        console.log(((document.documentElement.clientWidth)* .85))
        setTimeout(() => {
            Enemigos[contadorEnemigos].generarEnemigo();
            setTimeout(Enemigos[contadorEnemigos].movimientoEnemigo,400,Enemigos[contadorEnemigos]);
            timersDisparosEnemigos.push(setInterval(controles.disparaEnemigo,EjercitoEnemigo[0].cadencia))
        }, 6000);
        
	},
    onload(){
        document.getElementById('all-menu').style.top = '100vh'
        document.getElementById('open-menu').style.bottom = '82vh'
        document.getElementById('open-menu').innerHTML= '<b>^</b>'
    },

};


document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciar();
    inicio.onload();
}, false);



function randomNumber(quantity0,quantity1){
    return Math.floor((Math.random() * ((quantity1 + 1) - quantity0)) + quantity0);
 }


        //  // var direccion = direccionAleatoria()
        //  console.log(id)
        //  console.log('hola')
        //  // console.log(this.posx)
        //  // var paso = (desplazamientoAleatorio() - this.posx )/ 200
        //  // console.log(paso)
        //  // setInterval(()=> {
        //  //     if(pasos < 200){
        //  //         this.posx+= paso
        //  //         document.getElementById(id).style.left=`${parseInt(this.posx)}vw`
        //  //     }else{
        //  //         this.movimientoNave(id)
        //  //     }
        //  // },20)

