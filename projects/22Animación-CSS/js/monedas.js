var monedas=[];
var contadorMonedas=0;
var EjercitoMonedas=[
    {nombre: 'coin1',
    posy: 320,
    posx: 256,
    tiempoDesaparicion: 25000,
    },
    {nombre: 'coin2',
    posy:256,
    posx: 384,
    tiempoDesaparicion: 90000,
    },
    {nombre: 'coin3',
    posy: 224,
    posx: 544,
    tiempoDesaparicion: 63000,

    },
    {nombre: 'coin4',
    posy: 224,
    posx: 736,
    tiempoDesaparicion: 56000,
    },
    {nombre: 'coin5',
    posy: 256,
    posx: 928,
    tiempoDesaparicion: 43000,
    },
    {nombre: 'coin6',
    posy: 352,
    posx: 1152,
    tiempoDesaparicion: 71000,
    },
    {nombre: 'coin7',
    posy: 480,
    posx: 800,
    tiempoDesaparicion: 84000,
    },
    {nombre: 'coin8',
    posy: 480,
    posx: 416,
    tiempoDesaparicion: 37000,
    },
]
function randomNumber(quantity0,quantity1){
    return Math.floor((Math.random() * ((quantity1 + 1) - quantity0)) + quantity0);
 }

class CreaMonedas{
    constructor(nombre,posy,posx,zindex,tiempoAnimacion){
        this.nombre=nombre
        this.posy=posy
        this.posx=posx
        this.zindex=zindex
        this.tiempoAnimacion=tiempoAnimacion
    }
    generarMonedas(){
        document.querySelector('main div').innerHTML+='<div class="supercoin"><div onclick="coin('+contadorMonedas+')" class="coin" id="'+this.nombre+'"><img src="img/coin.webp"></div></div>'
        document.getElementById(this.nombre).style.position= 'absolute'
        document.getElementById(this.nombre).style.left= this.posx + 'px'
        document.getElementById(this.nombre).style.top= this.posy + 'px'
        document.getElementById(this.nombre).style.zIndex= this.zindex
        document.getElementById(this.nombre).style.filter='drop-shadow(0px 6px 6px)'
        // document.getElementById(this.nombre).style.animation= 'coinOut 3s linear '+this.tiempoAnimacion+'s 1 both'
        setTimeout(() =>{
            console.log(this.nombre+" serra borrada en "+(this.tiempoAnimacion/1000)+" segundos")
            document.getElementById(this.nombre).style.opacity=0
            document.getElementById(this.nombre).style.display='none'
            document.getElementById(this.nombre).style.pointerEvents='none'
        }, this.tiempoAnimacion)
    }
}


  function Riqueza(){
    monedas.push(new CreaMonedas(EjercitoMonedas[contadorMonedas].nombre, EjercitoMonedas[contadorMonedas].posy,EjercitoMonedas[contadorMonedas].posx,11,EjercitoMonedas[contadorMonedas].tiempoDesaparicion ))
    monedas[contadorMonedas].generarMonedas();
    contadorMonedas++
   
            
  } 

   