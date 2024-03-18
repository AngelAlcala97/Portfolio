
var inicio = {
    
	iniciar() {
        buclePrincipal.iterar()
        // setInterval(() => {
        // //BORRAR MONEDA ALEATORIA
        //     setInterval(() => {
        //         var numeroAleatorio = randomNumber(1,8)
        //         console.log("BORRANDO MONEDA"+numeroAleatorio)
        //         document.querySelector('#coin'+numeroAleatorio+'').style.display='none'
        //     // document.querySelector('main div').removeChild(borrarCoin);    
        //     },  randomNumber(1000,8000));
        // //GENERAR MONEDA ALEATORIA
        //     setInterval(() => {
        //         var numeroAleatorio = randomNumber(1,8)
        //         console.log("GENERANDO MONEDA"+numeroAleatorio)
        //         document.querySelector('#coin'+numeroAleatorio+'').style.display='block'
        //         document.querySelector('#coin'+numeroAleatorio+'').style.opacity='1'
        //     }, randomNumber(1000,2000));
        // }, 10000);
	},
   start() {
        document.getElementById('start').innerHTML=`
        <main id="main">
            <div>
               
                <div class="credits"><img src="img/coin.webp"><h1 id="creditsNum">0</h1></div>
                <div class="mar"></div>
                <img class="mapa" src="img/Mapa.png">
                <div id="estrella">
                    <div id="sol"><img src="img/sol.png"></div>
                    <div id="luna"><img src="img/luna.png"></div>
                </div>
                <div class="divBicho"><img id="bicho" src="img/bicho.png"></div>
                <div class="noFace"><div style="display:none" id="finjuego"><button onclick="inicio.start()">FIN</button></div><img onclick="away()" id="noFace" src="img/noFace.png"></div>
                <div class="bird"><img id="bird1" src="img/bird.gif"></div>
                <div class="bird"><img id="bird2" src="img/bird.gif"></div>
                <div class="bird"><img id="bird3" src="img/bird.gif"></div>
                <div class="bird"><img id="bird4" src="img/bird.gif"></div>
            </div>
        </main>`
        Nublado()
        for (i=0; i<8;i++){
               Riqueza()
        }
        
        var audio= document.getElementById('audio')
        audio.play()
 
}    

};


document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciar();
}, false);



