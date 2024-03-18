var EjercitoEnemigo=[
    {nombre: 'enemy0',
    vida: 100,
    DEF: 5,
    ATK: 1,
    cadencia: 3000 ,
    botin:[50,100],
    ancho: (document.documentElement.clientWidth)* .1,
    longitudPass: 5
    },
    {nombre: 'enemy1',
    vida: 100,
    DEF: 3,
    ATK: 2,
    cadencia: 3000 ,
    botin:[100,200],
    ancho: (document.documentElement.clientWidth)* .15,
    longitudPass: 6
    },
    {nombre: 'enemy2',
    vida: 100,
    DEF: 1,
    ATK: 5,
    cadencia: 2000 ,
    botin:[200,400],
    ancho: (document.documentElement.clientWidth)* .2,
    longitudPass: 7
    },
    {nombre: 'enemy3',
    vida: 100,
    DEF: 0.7,
    ATK: 10,
    cadencia: 1000 ,
    botin:[400,800],
    ancho: (document.documentElement.clientWidth)* .25,
    longitudPass: 7
    },
    {nombre: 'enemy4',
    vida: 100,
    DEF: 0.1,
    ATK: 25,
    cadencia: 100 ,
    botin:[800,1600],
    ancho: (document.documentElement.clientWidth)* .30,
    longitudPass: 8
    },
   
]


var desplazamiento = 0
var paso = 0
var pasos = 0
var timerEnemigo=[]
var timer=0
class Enemigo{
    constructor(nombre,vida,imagen,posx,posy,ancho){
        this.nombre=nombre
        this.vida=vida
        this.imagen=imagen
        this.posy=posy
        this.posx=posx
        this.ancho=ancho
        this.alto=ancho
    }

    generarEnemigo(){
        document.getElementById('enemigos').innerHTML=`<img id="${this.nombre}" src="${this.imagen}">`
        document.getElementById('iconoEnemigo').innerHTML=`<img style="width:30px" id="${this.nombre}" src="${this.imagen}">`
        document.getElementById('vidaEnemigos').style.backgroundColor='red'
        document.getElementById('vidaEnemigos').style.width=this.vida + '%'
        document.getElementById(this.nombre).style.position= 'relative'
        document.getElementById(this.nombre).style.left= this.posx + 'px'
        document.getElementById(this.nombre).style.top= this.posy + 'px'
        document.getElementById(this.nombre).style.width= this.ancho + 'px'
    }
    
    movimientoEnemigo(obj){
     desplazamiento = Math.floor(Math.random() * ((document.documentElement.clientWidth)* .85))
     paso = (desplazamiento - obj.posx) / 200
     pasos = 0
     timerEnemigo.push(setInterval((obj)=>{
        if(pasos < 200){
            obj.posx+=paso
            document.getElementById(obj.nombre).style.left=`${obj.posx}px`
            pasos++
        }else{
        
        console.log(obj.posx)
           clearInterval(timerEnemigo[timer])
           timer++
           setTimeout(obj.movimientoEnemigo,2000,obj)
        }
    },20,obj))
    }
}

