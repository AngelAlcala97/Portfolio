var posibilities=[
    // {ownValue:'1',ownDamage:10},
    // {ownValue:'2',ownDamage:10},
    // {ownValue:'3',ownDamage:10},
    // {ownValue:'4',ownDamage:10},
    // {ownValue:'5',ownDamage:10},
    // {ownValue:'6',ownDamage:10},
    // {ownValue:'7',ownDamage:10},
    // {ownValue:'8',ownDamage:10},
    // {ownValue:'9',ownDamage:10},
    // {ownValue:'0',ownDamage:10},
    {ownValue:'q',ownDamage:5},
    {ownValue:'w',ownDamage:5},
    {ownValue:'e',ownDamage:7},
    {ownValue:'r',ownDamage:5},
    {ownValue:'t',ownDamage:5},
    {ownValue:'y',ownDamage:3},
    {ownValue:'u',ownDamage:7},
    {ownValue:'i',ownDamage:7},
    {ownValue:'o',ownDamage:7},
    {ownValue:'p',ownDamage:5},
    {ownValue:'a',ownDamage:7},
    {ownValue:'s',ownDamage:5},
    {ownValue:'d',ownDamage:5},
    {ownValue:'f',ownDamage:5},
    {ownValue:'g',ownDamage:5},
    {ownValue:'h',ownDamage:5},
    {ownValue:'j',ownDamage:5},
    {ownValue:'k',ownDamage:5},
    {ownValue:'l',ownDamage:5},
    {ownValue:'ñ',ownDamage:5},
    {ownValue:'z',ownDamage:5},
    {ownValue:'x',ownDamage:5},
    {ownValue:'c',ownDamage:5},
    {ownValue:'v',ownDamage:5},
    {ownValue:'b',ownDamage:5},
    {ownValue:'n',ownDamage:5},
    {ownValue:'m',ownDamage:5}
    ];



var masterPassword={
    generatePassword(){
        document.getElementById('resultados').innerHTML=''
        // movNave = document.getElementById('nave').style;
        password=[];
        HUD=[];
        descubiertas=[]
        
        // var digits=randomNumber(5,8);
        for(i=0;i<EjercitoEnemigo[esteEnemigo].longitudPass;i++){
            password.push(posibilities[randomNumber(0,(posibilities.length - 1))].ownValue);
            HUD.push('_');
        }
        console.log(password);
    },

    testPassword(){
        if(HUD.join('')==password.join('')){
            nicePasswords++
            var botin=randomNumber(EjercitoEnemigo[esteEnemigo].botin[0],EjercitoEnemigo[esteEnemigo].botin[1])
            credits+=botin
            document.getElementById('your-credits').innerHTML=`Creditos: ${credits}`
            document.getElementById('botinObtenido').style.backgroundColor='rgba(88, 238, 255, 0.371)'
            document.getElementById('botinObtenido').style.boxShadow='0 0 2vh rgb(88, 238, 255)'
            document.getElementById('botinObtenido').innerHTML=`Botín obtenido: ${botin} créditos`
            setTimeout(() => {
                document.getElementById('botinObtenido').style.boxShadow='0 0 0'
                document.getElementById('botinObtenido').style.backgroundColor='rgba(88, 238, 255, 0)'
                document.getElementById('botinObtenido').innerHTML=``
            }, 5000);
            if (contadorEnemigos == 4 || contadorEnemigos == 9){
                esteEnemigo = 4
            } else {
                esteEnemigo=randomNumber(0,3)
            }
            contadorEnemigos++
            // esteEnemigo=contadorEnemigos
            exterior=true
            audio2.play()
            life.shieldChange(password.length * 2.5)
            masterPassword.generatePassword()
            document.getElementById('hackConsole').style.display='none'
            document.getElementById('letrasIntentadas').innerHTML=`            
            <div id="letraa" class="letra">A</div>
            <div id="letrab" class="letra">B</div>
            <div id="letrac" class="letra">C</div>
            <div id="letrad" class="letra">D</div>
            <div id="letrae" class="letra">E</div>
            <div id="letraf" class="letra">F</div>
            <div id="letrag" class="letra">G</div>
            <div id="letrah" class="letra">H</div>
            <div id="letrai" class="letra">I</div>
            <div id="letraj" class="letra">J</div>
            <div id="letrak" class="letra">K</div>
            <div id="letral" class="letra">L</div>
            <div id="letram" class="letra">M</div>
            <div id="letran" class="letra">N</div>
            <div id="letrañ" class="letra">Ñ</div>
            <div id="letrao" class="letra">O</div>
            <div id="letrap" class="letra">P</div>
            <div id="letraq" class="letra">Q</div>
            <div id="letrar" class="letra">R</div>
            <div id="letras" class="letra">S</div>
            <div id="letrat" class="letra">T</div>
            <div id="letrau" class="letra">U</div>
            <div id="letrav" class="letra">V</div>
            <div id="letraw" class="letra">W</div>
            <div id="letrax" class="letra">X</div>
            <div id="letray" class="letra">Y</div>
            <div id="letraz" class="letra">Z</div>`
            setTimeout(() => {
                Enemigos.push(new Enemigo('Enemigo'+esteEnemigo+'', EjercitoEnemigo[esteEnemigo].vida, 'img/'+EjercitoEnemigo[esteEnemigo].nombre+'.gif',0,0,EjercitoEnemigo[esteEnemigo].ancho))
                Enemigos[contadorEnemigos].generarEnemigo();
                setTimeout(Enemigos[contadorEnemigos].movimientoEnemigo,400,Enemigos[contadorEnemigos]);
                timersDisparosEnemigos.push(setInterval(controles.disparaEnemigo,EjercitoEnemigo[esteEnemigo].cadencia))

            }, 6000);
        }
    },
    guessPassword(){
        var triedCharacter=document.getElementById('prueba').value
        var temp=triedCharacter.split('')
    
        if(triedCharacter.length <= 1){
            
            if(password.includes(triedCharacter)){
                niceLetters++
                descubiertas.push(password.indexOf(triedCharacter))
                document.getElementById('letra'+triedCharacter).style.color='lawngreen'
                for(i=0;i<password.length;i++){
                    if(triedCharacter==password[i]){
                        HUD[i]=password[i]
                    }
                }
            }else{
                wrongLetters++
                document.getElementById('letra'+triedCharacter).style.color='rgb(255, 45, 45)'
                for(i=0;i<posibilities.length;i++){
                    if(posibilities[i].ownValue==triedCharacter){
                        life.lowStats(posibilities[i].ownDamage)
                    }
                }
            }
            
        }else{   
            
            if(temp.join('')==password.join('')){   
                for(i=0;i<password.length;i++){
                    if(temp[i]==password[i]){
                        HUD[i]=password[i]
                    }
                }   
            }else{
                wrongLetters+=temp.join('').length
                wrongPasswords++
                life.lowStats(25)
            }
        } 
        document.getElementById('prueba').value=''
        document.getElementById('prueba').focus()
        document.getElementById('resultados').innerHTML=HUD.join(' ')
        setTimeout(masterPassword.testPassword,10)
        setTimeout(menu.refreshStadistics,20)
    },
}

