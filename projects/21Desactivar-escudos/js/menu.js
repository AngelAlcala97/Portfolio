var menu={

closeMenu(){
    if(document.getElementById('all-menu').style.top == '10vh'){
        document.getElementById('all-menu').style.top = '100vh'
        document.getElementById('open-menu').style.bottom = '82vh'
        document.getElementById('open-menu').innerHTML= '<b>^</b>'
    }else{
        document.getElementById('all-menu').style.top = '10vh'
        document.getElementById('open-menu').style.bottom = '2vh'
        document.getElementById('open-menu').innerHTML= '<b>X</b>'
    }
},

showSubMenu(obj){
    document.getElementById('menu').style.display='none'
    document.getElementById(obj).style.display='grid'
},
goBackMenu(obj){
    document.getElementById(obj).style.display='none'
    document.getElementById('menu').style.display='grid'
},

refreshStadistics(){
        document.getElementById('stadistics1').innerHTML=`Caracteres correctos: ${niceLetters}`
        document.getElementById('stadistics2').innerHTML=`Contraseñas correctas: ${nicePasswords}`
        document.getElementById('stadistics3').innerHTML=`Caracteres fallidos: ${wrongLetters}`
        document.getElementById('stadistics4').innerHTML=`Contraseñas fallidas: ${wrongPasswords}`
    }
}

