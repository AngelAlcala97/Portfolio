
function randomNumber(quantity0,quantity1){
    return Math.floor((Math.random() * ((quantity1 + 1) - quantity0)) + quantity0);
 }

var posxInicial=32;
var posxFinal;
var posYInicial=352;
var posYFinal;
var posxMedia;
var posYMedia;
var monedasCogidas= 0;

function coin(coin){
    var creditsNum = document.getElementById('creditsNum')
    var bichito = document.getElementById('bicho')
    var noFace = document.getElementById('noFace')
    noFace.style.pointerEvents='none'

    var coinActual = document.getElementById('coin'+(coin+1))
    
    posxFinal= (parseInt(coinActual.style.left)-24)
    posYFinal= (parseInt(coinActual.style.top)-28)

    document.documentElement.style.setProperty('--xm',((posxFinal+posxInicial)/2)+'px')
    document.documentElement.style.setProperty('--ym',((posYFinal/1.4))+'px')

    document.documentElement.style.setProperty('--xf',posxFinal+'px')
    document.documentElement.style.setProperty('--yf',posYFinal+'px')

    if (posxFinal < posxInicial){

        bichito.style.transform='rotateY(180deg)'
    } else {

        bichito.style.transform='rotateY(0deg)'
    }
        
    bichito.style.animation='coin 1.5s linear 0s 1 both'



    for (i=1;i<9;i++){
        document.getElementById('coin'+i).style.pointerEvents='none'
    }

    // coinActual.style.animation='coinOut 1s linear 2s 1 both'
    
    setTimeout(() => {
        coinActual.style.display='none'
        coinActual.style.opacity=0
        monedasCogidas++
        creditsNum.innerHTML= monedasCogidas
        posxInicial = posxFinal
        posYInicial = posYFinal
        document.documentElement.style.setProperty('--xi',posxInicial+'px')
        document.documentElement.style.setProperty('--yi',posYInicial+'px')
        
        bichito.style.animation=''
        // for (i=1;i<9;i++){
        //     document.getElementById('coin'+i).style.pointerEvents=''
        // }
    }, 1500);

// LA VUELTA
    setTimeout(() => {
        posxFinal= 32
        posYFinal= 352
    
        document.documentElement.style.setProperty('--xf',posxFinal+'px')
        document.documentElement.style.setProperty('--yf',posYFinal+'px')
        if (posxFinal < posxInicial){

            bichito.style.transform='rotateY(180deg)'
        } else {
    
            bichito.style.transform='rotateY(0deg)'
        }
        bichito.style.animation='coin 1.5s linear 0s 1 both'
        // for (i=1;i<9;i++){
        //     document.getElementById('coin'+i).style.pointerEvents='none'
        // }
    }, 2500);

    setTimeout(() => {
        posxInicial = posxFinal
        posYInicial = posYFinal
        document.documentElement.style.setProperty('--xi',posxInicial+'px')
        document.documentElement.style.setProperty('--yi',posYInicial+'px')
        bichito.style.transform='rotateY(0deg)'
        bichito.style.animation=''
        for (i=1;i<9;i++){
            document.getElementById('coin'+i).style.pointerEvents=''
            
        }
        noFace.style.pointerEvents=''

        // coinActual.style.pointerEvents='none'
       
        // setTimeout(() =>{
        //     console.log("Restaurando moneda" + coin+1)
        //         coinActual.style.opacity=1
        //         coinActual.style.display='block'
        //         coinActual.style.pointerEvents=''
    
        // }, randomNumber(5000,10000))
    }, 4000);

   

}


function away(){
    var bichito = document.getElementById('bicho')
    var noFace = document.getElementById('noFace')
    noFace.style.pointerEvents='none'
    noFace.style.top=320+'px'
    noFace.style.left=1200+'px'
    console.log('Top:'+noFace.style.top,'Left: '+noFace.style.left)

    posxFinal= (parseInt(noFace.style.left)-32)
    posYFinal= (parseInt(noFace.style.top)+96)

    document.documentElement.style.setProperty('--xm',((posxFinal+posxInicial)/2)+'px')
    document.documentElement.style.setProperty('--ym',((posYFinal/1.4))+'px')

    document.documentElement.style.setProperty('--xf',posxFinal+'px')
    document.documentElement.style.setProperty('--yf',posYFinal+'px')

    bichito.style.animation='coin 1.5s linear 0s 1 both'

    for (h=1;h<9;h++){
        document.getElementById('coin'+h).style.pointerEvents='none'
    }
    
    setTimeout(() => {
       var soporte= monedasCogidas
        for (m=0;m<soporte;m++){
            setTimeout(() => {
                monedasCogidas--
                creditsNum.innerHTML= monedasCogidas
            }, m*1000);
        }
        setTimeout(() => {
			noFace.style.animation='FIN 3s linear forwards'
            setTimeout(() => {
                console.log("Finalizando")
                var finjuego=document.getElementById('finjuego')
                finjuego.style.display='flex'
            }, 1000);
        }, 1100*soporte);

        

        posxInicial = posxFinal
        posYInicial = posYFinal
        document.documentElement.style.setProperty('--xi',posxInicial+'px')
        document.documentElement.style.setProperty('--yi',posYInicial+'px')
        
        bichito.style.animation=''
        // for (i=1;i<9;i++){
        //     document.getElementById('coin'+i).style.pointerEvents=''
        // }
    }, 1500);

   
}


