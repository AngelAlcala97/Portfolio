var nubes=[];
var contadorNubes=0;

function randomNumber(quantity0,quantity1){
    return Math.floor((Math.random() * ((quantity1 + 1) - quantity0)) + quantity0);
 }

class CreaNubes{
    constructor(nombre,imagen,posy,posx,zindex,tiempoAnimacion){
        this.nombre=nombre
        this.imagen=imagen
        this.posy=posy
        this.posx=posx
        this.zindex=zindex
        this.tiempoAnimacion=tiempoAnimacion
    }
    generarNube(){
        document.querySelector('main div').innerHTML+='<img id="'+this.nombre+'"src="img/nube'+this.imagen+'.png">'
        document.getElementById(this.nombre).style.position= 'absolute'
        document.getElementById(this.nombre).style.left= this.posx + 'px'
        document.getElementById(this.nombre).style.top= this.posy + 'px'
        document.getElementById(this.nombre).style.zIndex= this.zindex
        document.getElementById(this.nombre).style.animation= 'nublado '+this.tiempoAnimacion+'s linear infinite'
    }
}

function Nublado(){
    if (contadorNubes<=7){
    // setTimeout(() => {
        nubes.push(new CreaNubes("nube"+contadorNubes,randomNumber(2,3), randomNumber(20,380),randomNumber(-800,-300),randomNumber(0,9),randomNumber(60,80)))
        nubes[contadorNubes].generarNube();
        contadorNubes++
        Nublado()
    // }, 0);
} 
var finjuego=document.getElementById('finjuego')
            finjuego.style.display='none'
// else {
//     setTimeout(() => {
//         nubes=[]
//         contadorNubes=0
//         Nublado()
//     }, 81000);

// }
}