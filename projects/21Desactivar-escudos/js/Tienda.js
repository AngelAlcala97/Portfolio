var ventajas=[
    {text:"1 caracter aleatorio", precio:200, accion:unCaracter()},
    {text:"3 caracteres aleatorios", precio:500, accion:tresCaracter()},
    {text:"1er caracter", precio:500, accion:primerCaracter()},
    {text:"Ultimo caracter", precio:500, accion:ultimoCaracter()},
    {text:"Contraseña completa", precio:200, accion:todosCaracter()},
]

var contadorLetras = 0
var descubiertas=[]

function unCaracter(){
    if(credits >= 200){
        var temp=randomNumber(0,password.length-1)
        if(descubiertas.includes(temp)){
            unCaracter()
        }else{
            HUD[temp]=password[temp]
            document.getElementById('resultados').innerHTML=HUD.join(' ')
            masterPassword.testPassword() 
            credits-=200
            contadorLetras=0
        }
    }
}

function tresCaracter(){
    if(credits >= 500){
        if((password.length - descubiertas.length) > 3){
            var temp=[]
            for(i=0;i<3;i++){
                temp.push(randomNumber(0,password.length-1))
            }

            if(temp[0]==temp[1] || temp[0]==temp[2] || temp[1]==temp[2]){
                tresCaracter()
            }else{

                    HUD[temp[0]]=password[temp[0]]
                    HUD[temp[1]]=password[temp[1]]
                    HUD[temp[2]]=password[temp[2]]

                    document.getElementById('resultados').innerHTML=HUD.join(' ')

                        masterPassword.testPassword() 
                        credits-=500
                        contadorLetras=0
            }
        }
    }
}

function primerCaracter(){
    if(credits >= 500){
        HUD[0]=password[0]
        document.getElementById('resultados').innerHTML=HUD.join(' ')
        credits-=500
        masterPassword.testPassword() 
    }
}

function primerCaracter(){
    if(credits >= 500){
        HUD[0]=password[0]
        document.getElementById('resultados').innerHTML=HUD.join(' ')
        credits-=500
        masterPassword.testPassword() 

    }
}

function ultimoCaracter(){
    if(credits >= 500){
        HUD[password.length-1]=password[password.length-1]
        document.getElementById('resultados').innerHTML=HUD.join(' ')
        credits-=500
        masterPassword.testPassword() 
    }
}

function todosCaracter(){
    if(credits >=1000){
        HUD = password
        document.getElementById('resultados').innerHTML=HUD.join(' ')
        credits-=1000
        masterPassword.testPassword() 
    }
}



function purchaseHealth(boton){
    if(credits>=100){
        credits-=100
        life.lifeChange(-10)
        document.getElementById('your-credits').innerHTML=`Creditos: ${credits}`
    }else{
        boton.style.backgroundColor='#ff5050'
        setTimeout(()=>{
            boton.style.backgroundColor='#50bcff'
        },500)
    }
}

function purchaseShield(boton){
    if(credits>=100){
        credits-=100
        life.shieldChange(10/2)
        document.getElementById('your-credits').innerHTML=`Creditos: ${credits}`
    }else{
        boton.style.backgroundColor='#ff5050'
        setTimeout(()=>{
            boton.style.backgroundColor='#50bcff'
        },500)
    }
}