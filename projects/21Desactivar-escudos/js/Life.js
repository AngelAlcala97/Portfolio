

var life={

    testLiferecarga(){
        if(vida==0){
            window.location.href = 'muerte.html'
        }
    },
    lowStats(value){
        if(escudo>0){
            life.shieldChange((value/(-2)));
        }else{
            life.lifeChange(value);
        }
    },
    lifeChange(value){
        if((vida - value)<0){
            vida= 0
        }else if((vida - value)>100){
            vida= 100
        }else{
            vida-=value
        }
        
        document.getElementById('my-life').style.width=`${vida}%`
        life.testLiferecarga()
    },
    
    shieldChange(value){
        if((escudo + value) > 100){
            escudo= 100
            console.log(escudo)
        }else if((escudo + value) <= 0){
            escudo= 0
            console.log(escudo)
        }else{
            escudo+= value
            console.log(escudo)
        }
        document.getElementById('my-shield').style.width=`${escudo * 2}%`
        document.getElementById('nave').style.filter=`drop-shadow(0 0 ${escudo /50}vh  #50bcff)`

    }

}