document.addEventListener("keydown",(event)=>{
    
    switch(event.key){

    case "Escape":
        menu.closeMenu()
    break;
    case " ":
        controles.disparar()
    break;
    // case "Control" && "r":
    //     window.location.href = 'inicio.html' 

    // break;
    // case "Control" && "R":
    //     window.location.href = 'inicio.html' 

    // break;
    case "F5":
        window.location.href = 'inicio.html' 

    break;
    case "Control" && "F5":
        window.location.href = 'inicio.html' 
    break;
    }
})


var controles={
        seguir() {
        //    console.log(window.event.pageX)
        //    console.log(document.documentElement.clientWidth)
        
        movNave.top = parseInt(window.event.pageY - ((document.documentElement.clientHeight)* .07)) + "px";
        movNave.left = parseInt(window.event.pageX - ((document.documentElement.clientWidth)* .035)) + "px";
        
        // console.log(movNave.top)
        },
         
        // cadencia(){
        //     recarga=true
        // },
        
         disparar(){
            // if(recarga==true){
                if(exterior==true){
                    disparos.push(new Disparo(numDisparos, movNave.top, movNave.left,'nave',Enemigos[contadorEnemigos]))
                    disparos[numDisparos].crearDisparo()
                    numDisparos++
                }
            // console.log(disparos)
        //    recarga=false
        //    setTimeout(controles.cadencia,700)  
        //    }
           
        },

        disparaEnemigo(){
                disparos.push(new DisparoEnemigo(numDisparos, (Enemigos[contadorEnemigos].posy + (Enemigos[contadorEnemigos].ancho*0.7)), (Enemigos[contadorEnemigos].posx + (Enemigos[contadorEnemigos].ancho/2.25))))
                disparos[numDisparos].crearDisparoEnemigo()
                numDisparos++
        }
        
}