var nameList=[] //EL VECTOR
var addCount=0  //CONTADOR
var impresion=''
var clicked;
var clickedNum;
var decimals=[]
var promedio=0

//PARA LOS FILTROS

var AlfMyscl=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var AlfMnscl=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

function print(vector){
  var albertoContador=0
    var addition=`<div>
    <section><input type="text" value="ID" disabled></section>
    <section><input type="text" value="Nombre" disabled></section>
    <section><input type="text" value="Apellidos" disabled></section>
    <section><input type="text" value="Edad" disabled></section>
    <section><input type="text" value="Curso" disabled></section>
    <section><input type="text" value="DELETE" disabled></section>
    </div>` ;

    for(i=0;i<vector.length;i++){
        addition+=`<div>
        <section><input  type="text" value="`+vector[i][0]+`" id="id`+vector[i][0]+`" disabled></section>
        <section><input id="i`+albertoContador+'1'+`" onclick="tools(this,`+i+`)"  onchange="refreshName(this,`+i+`,1)" type="text" value="`+vector[i][1]+`"></section>
        <section><input id="i`+albertoContador+'2'+`" onclick="tools(this,`+i+`)"  onchange="refreshName(this,`+i+`,2)" value="`+vector[i][2]+`" type="text"></section>
        <section><input id="i`+albertoContador+'3'+`" onclick="tools(this,`+i+`)"  onchange="refreshName(this,`+i+`,3)" minlength="0" value="`+(parseFloat(vector[i][3]).toFixed(decimals[i]))+`" type="number"></section>
        <section><input id="i`+albertoContador+'4'+`" onclick="tools(this,`+i+`)"  onchange="refreshName(this,`+i+`,4)" value="`+vector[i][4]+`" type="text"></section>
        <section><button onclick="deleteRow(`+i+`)"><img src="img/delete.svg"></button></section>
    </div>`    
    albertoContador++
    }
    document.getElementById('matrix').innerHTML=addition

    impresion=addition
}
//MOSTRAR FILTROS

function showFilters(){
  if( document.getElementById('filters').style.visibility!='visible'){
    document.getElementById('filters').style.visibility='visible'
  }else{
    document.getElementById('filters').style.visibility='hidden'
  }
}

//Filtros


function testFilters(opc){
  if(opc.checked==true){
      for(i=1;i<6;i++){
      if(document.getElementById('filtro'+i)!=opc){
        document.getElementById('filtro'+i).disabled=true
      }
  }
    }else{
      for(i=1;i<6;i++){
        if(document.getElementById('filtro'+i)!=opc){
          document.getElementById('filtro'+i).disabled=false
        }
    }
    }

  
}

function orderByLetter(){
var filterVec=[]
var guardadodecimales=decimals
decimals=[]
for(m=0;m<nameList.length;m++){
  decimals.push(0)
}

for(i=0;i<nameList.length;i++){
  filterVec.push(nameList[i])
  var inicialBuscada=nameList[i][1].split('')
  for(j=0;j<filterVec.length-1;j++){
    var posicionDelBuscado=filterVec.indexOf(nameList[i])
    if(filterVec.length>1){
      var inicialComparada=filterVec[posicionDelBuscado-1][1].split('')
      if(AlfMyscl.includes(inicialBuscada[0]) && AlfMyscl.includes(inicialComparada[0])){
        if(AlfMyscl.indexOf(inicialBuscada[0]) < AlfMyscl.indexOf(inicialComparada[0])){
          filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
          filterVec.splice((posicionDelBuscado-1),1,nameList[i])
        }
      }else if(AlfMyscl.includes(inicialBuscada[0]) && AlfMnscl.includes(inicialComparada[0])){
        if(AlfMyscl.indexOf(inicialBuscada[0]) < AlfMnscl.indexOf(inicialComparada[0])){
          filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
          filterVec.splice((posicionDelBuscado-1),1,nameList[i])
        }
      }else if(AlfMnscl.includes(inicialBuscada[0]) && AlfMyscl.includes(inicialComparada[0])){
        if(AlfMnscl.indexOf(inicialBuscada[0]) < AlfMyscl.indexOf(inicialComparada[0])){
          filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
          filterVec.splice((posicionDelBuscado-1),1,nameList[i])
        }
      }else if(AlfMnscl.includes(inicialBuscada[0]) && AlfMnscl.includes(inicialComparada[0])){
        if(AlfMnscl.indexOf(inicialBuscada[0]) < AlfMnscl.indexOf(inicialComparada[0])){
        filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
        filterVec.splice((posicionDelBuscado-1),1,nameList[i])
      }
      }
    }  
  }
} 

console.log(filterVec)
  print(filterVec)
  decimals=guardadodecimales
}

function orderByLetterAsc(){
  var filterVec=[]
for(i=0;i<nameList.length;i++){
  filterVec.push(nameList[i])
  var inicialBuscada=nameList[i][1].split('')
  for(j=0;j<filterVec.length-1;j++){
    var posicionDelBuscado=filterVec.indexOf(nameList[i])
    if(filterVec.length>1){
      var inicialComparada=filterVec[posicionDelBuscado-1][1].split('')
      if(AlfMyscl.includes(inicialBuscada[0]) && AlfMyscl.includes(inicialComparada[0])){
        if(AlfMyscl.indexOf(inicialBuscada[0]) < AlfMyscl.indexOf(inicialComparada[0])){
          filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
          filterVec.splice((posicionDelBuscado-1),1,nameList[i])
        }
      }else if(AlfMyscl.includes(inicialBuscada[0]) && AlfMnscl.includes(inicialComparada[0])){
        if(AlfMyscl.indexOf(inicialBuscada[0]) < AlfMnscl.indexOf(inicialComparada[0])){
          filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
          filterVec.splice((posicionDelBuscado-1),1,nameList[i])
        }
      }else if(AlfMnscl.includes(inicialBuscada[0]) && AlfMyscl.includes(inicialComparada[0])){
        if(AlfMnscl.indexOf(inicialBuscada[0]) < AlfMyscl.indexOf(inicialComparada[0])){
          filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
          filterVec.splice((posicionDelBuscado-1),1,nameList[i])
        }
      }else if(AlfMnscl.includes(inicialBuscada[0]) && AlfMnscl.includes(inicialComparada[0])){
        if(AlfMnscl.indexOf(inicialBuscada[0]) < AlfMnscl.indexOf(inicialComparada[0])){
        filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
        filterVec.splice((posicionDelBuscado-1),1,nameList[i])
      }
      }
    }  
  }
} 
  console.log(filterVec)
    print(filterVec.reverse())
  }

  function orderByChars(){
    var filterVec=[]
    for(i=0;i<nameList.length;i++){
      filterVec.push(nameList[i])
      var inicialBuscada=nameList[i][1].split('')
      for(j=0;j<filterVec.length-1;j++){
        var posicionDelBuscado=filterVec.indexOf(nameList[i])
        if(filterVec.length>1){
          var inicialComparada=filterVec[posicionDelBuscado-1][1].split('')
          if(inicialBuscada.length > inicialComparada.length){
            filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
            filterVec.splice((posicionDelBuscado-1),1,nameList[i])
          }
        }  
      }
    } 
    print(filterVec)
  }

  function orderByCharsAsc(){
    var filterVec=[]
    for(i=0;i<nameList.length;i++){
      filterVec.push(nameList[i])
      var inicialBuscada=nameList[i][1].split('')
      for(j=0;j<filterVec.length-1;j++){
        var posicionDelBuscado=filterVec.indexOf(nameList[i])
        if(filterVec.length>1){
          var inicialComparada=filterVec[posicionDelBuscado-1][1].split('')
          if(inicialBuscada.length > inicialComparada.length){
            filterVec.splice((posicionDelBuscado),1,filterVec[posicionDelBuscado-1])
            filterVec.splice((posicionDelBuscado-1),1,nameList[i])
          }
        }  
      }
    } 
    print(filterVec.reverse())
  }

  function filterPalindroms(){
    var filterVec=[]
    for(i=0;i<nameList.length;i++){
      var nombreAComparar=nameList[i][1].split('')
      var palindromo=nameList[i][1].split('').reverse()
      var casualidades=0
        for(j=0;j<nombreAComparar.length;j++){
          if(AlfMnscl.includes(nombreAComparar[j]) && AlfMnscl.includes(palindromo[j])){
            if(nombreAComparar[j]==palindromo[j]){
            casualidades++
            }
          }else if(AlfMnscl.includes(nombreAComparar[j]) && AlfMyscl.includes(palindromo[j])){
            var indiceAComparar=AlfMnscl.indexOf(nombreAComparar[j])
            var indicePalindromo=AlfMyscl.indexOf(palindromo[j])
            if(indiceAComparar==indicePalindromo){
              casualidades++
              }
          }else if(AlfMyscl.includes(nombreAComparar[j]) && AlfMnscl.includes(palindromo[j])){
            var indiceAComparar=AlfMnscl.indexOf(nombreAComparar[j])
            var indicePalindromo=AlfMyscl.indexOf(palindromo[j])
            if(indiceAComparar==indicePalindromo){
              casualidades++
            }
          }else{
            if(nombreAComparar[j]==palindromo[j]){
              casualidades++
              }
          }
        }

        //let array = array
        // let array2 = array.toReversed()
        //array.join(',') === array2.toString()

      if(casualidades==nombreAComparar.length){
        console.log('es igual')
        filterVec.push(nameList[i])
      }
    }
    console.log(filterVec)
    print(filterVec)
  }

function applyFilters(){
  if(document.getElementById('filtro1').checked==true){
    orderByLetter()
  }
  if(document.getElementById('filtro2').checked==true){
    orderByLetterAsc()
  }
  if(document.getElementById('filtro3').checked==true){
    orderByChars()
  }
  if(document.getElementById('filtro4').checked==true){
    orderByCharsAsc()
  }
  if(document.getElementById('filtro5').checked==true){
    filterPalindroms()
  }
  if(document.getElementById('filtro1').checked==false && document.getElementById('filtro2').checked==false && document.getElementById('filtro3').checked==false && document.getElementById('filtro4').checked==false && document.getElementById('filtro5').checked==false){
    print(nameList)
  }
}


function searchFor(){
  print(nameList)
  var busqueda=document.getElementById('buscador').value
  var resultados=0
  var tempVec=[]

  for(i=0;i<nameList.length;i++){
    for(j=1;j<nameList[i].length;j++){
      if(nameList[i][j]==busqueda){
          resultados++        
          tempVec.push(nameList[i][0])
          console.log(nameList[i][j])
          console.log((i+j))
          document.getElementById('i'+i+''+j+'').style.backgroundColor='rgb(152, 184, 255)'
      }
    }
  }
  document.getElementById('resultsFor').innerHTML='Se han encontrado: '+resultados+' resultado/s. (ID/s:'+tempVec+')'
}

function replaceFor(){
var objetive=document.getElementById('buscador').value;
var change=document.getElementById('buscadorR').value;

for(i=0;i<nameList.length;i++){
  for(j=1;j<nameList[i].length;j++){
    if(nameList[i][j]==objetive){
      nameList[i][j]=change
    }
  }

}
print(nameList)
}



//SELECCIONAR LO QUE QUIERES EDITAR
function tools(elemento, id){
    clicked=elemento
    clickedNum=id
}
//PONER EN NEGRITA LO CLICKADO
function bold(){
  clicked.focus()

  if(clicked.style.fontWeight=='bold'){
    clicked.style.fontWeight=''
  }else{
    clicked.style.fontWeight='bold'
  }
}

function font(){
  clicked.focus()
  var family= document.getElementById('fuente').value
  clicked.style.fontFamily=family
}

function modifyDecimals(range){
  if((parseFloat(decimals[clickedNum])+range)>=0){
    decimals[clickedNum]+=range
    print(nameList)
  }else if((parseFloat(decimals[clickedNum])+range)<0){
    console.log('pa fuera')
    return
  }
      
}

function showInfo(){
  if(document.getElementById('info').style.visibility=='visible'){
    document.getElementById('info').style.visibility='hidden'
  }else{
    document.getElementById('info').style.visibility='visible'
  }
 var info=clicked.value
 var tempVec=[]
 var determinaPro=''
 var vocals=['a','e','i','o','u'] 
 var vocalsM=['A','E','I','O','U']
 var pavocalesTemp=info.split('')
 var infoVocals=0

 if(nameList.length>1){
  for(i=0;i<nameList.length;i++){
    tempVec.push(nameList[i][nameList[clickedNum].indexOf(info)])
    for(k=tempVec.length-1;k>0;k--){
      console.log(tempVec[k])
      var guardado=tempVec[k]
        if(tempVec[k].length > tempVec[k-1].length){
          tempVec[k]=tempVec[k-1]
          tempVec[k-1]=guardado
        }
    }
 }
 }else{
  for(i=0;i<nameList.length;i++){
    tempVec.push(nameList[i][nameList[clickedNum].indexOf(info)])
 }
}

 if(tempVec[tempVec.indexOf(info)].length > promedio){
  determinaPro='superior'
 }else if(tempVec[tempVec.indexOf(info)].length < promedio){
  determinaPro='inferior'
 }else{
  determinaPro='igual'
 }


for(y=0;y<pavocalesTemp.length;y++){
  if(vocals.includes(pavocalesTemp[y]) || vocalsM.includes(pavocalesTemp[y]) ){
    infoVocals++
  }
}

    if(nameList[clickedNum].indexOf(info)==1){
   document.getElementById('info-for').innerHTML=info + ' es el '+ (tempVec.indexOf(info)+1) + 'º nombre más largo. Tiene '+tempVec[tempVec.indexOf(info)].length + ' letras, es '+ determinaPro +' al promedio. Tiene '+ infoVocals + ' vocales.'
 }else if(nameList[clickedNum].indexOf(info)==2){
  document.getElementById('info-for').innerHTML=info + ' es el '+ (tempVec.indexOf(info)+1) + 'º apellido más largo. Tiene '+tempVec[tempVec.indexOf(info)].length + ' letras, es '+ determinaPro +' al promedio. Tiene '+ infoVocals + ' vocales.'
 }else{
  document.getElementById('info-for').innerHTML='ERROR'
 }
console.log(tempVec)
 
}


function invert(){
  var tempVec=[]

  for(i=0;i<nameList.length;i++){
    tempVec.push(nameList[i])
    for(j=1;j<tempVec[i].length;j++){
      tempVec[i][j]=tempVec[i][j].split('').reverse().join('')
    }
  }
  print(tempVec)
}

function italic(){
  clicked.focus()

    if(clicked.style.fontStyle=='italic'){
      clicked.style.fontStyle=''
    }else{
      clicked.style.fontStyle='italic'    
    }
}

function strike(){
  clicked.focus()

    if(clicked.style.textDecoration=='line-through'){
      clicked.style.textDecoration=''
    }else{
      clicked.style.textDecoration='line-through'    
    }
}

function textColor(){
  clicked.focus()
  var color=document.getElementById('textColor').value

  clicked.style.color=color    

    if(document.getElementById('text-color').style.visibility=='visible'){
      document.getElementById('text-color').style.visibility='hidden'
    }
}

function backgroundColor(){
  clicked.focus()
  var color=document.getElementById('backgroundColor').value

  clicked.style.backgroundColor=color    

    if(document.getElementById('background-color').style.visibility=='visible'){
      document.getElementById('background-color').style.visibility='hidden'
    }
}

function fontSize(){
  clicked.focus()
    clicked.style.fontSize=(parseFloat(document.getElementById('size-selector').value)/10)+'em'
}

function changeSize(aumento){
  clicked.focus()
  var actualValue=document.getElementById('size-selector').value

  document.getElementById('size-selector').value=parseFloat(actualValue)+parseFloat(aumento)
  fontSize()
}

function textAlignment(){
  clicked.focus()

  if(clicked.style.textAlign=='left'){
    clicked.style.textAlign='center'
  }else if(clicked.style.textAlign=='center'){
    clicked.style.textAlign='right'
  }else if(clicked.style.textAlign=='right'){
    clicked.style.textAlign='left'
  }else{
    clicked.style.textAlign='right'
  }
}

function showSearch(){
  if(document.getElementById('search').style.visibility!='visible'){
    document.getElementById('search').style.visibility='visible'
  }else{
    document.getElementById('search').style.visibility='hidden'
  }
  if(document.getElementById('replace').style.visibility=='visible'){
      document.getElementById('replace').style.visibility='hidden'
  }
}

function showReplace(){
  if(document.getElementById('replace').style.visibility!='visible'){
    document.getElementById('replace').style.visibility='visible'
  }else{
    document.getElementById('replace').style.visibility='hidden'
  }
}

function showTextColor(){
  if(document.getElementById('background-color').style.visibility=='visible'){
    document.getElementById('background-color').style.visibility='hidden'
  }

  if(document.getElementById('text-color').style.visibility=='visible'){
    document.getElementById('text-color').style.visibility='hidden'
  }else{
    document.getElementById('text-color').style.visibility='visible'
  }
}

function showBackgroundColor(){
  if(document.getElementById('text-color').style.visibility=='visible'){
    document.getElementById('text-color').style.visibility='hidden'
  }

  if(document.getElementById('background-color').style.visibility=='visible'){
    document.getElementById('background-color').style.visibility='hidden'
  }else{
    document.getElementById('background-color').style.visibility='visible'
  }
}

function refreshStadistic(){
  var suma=0;
    for(i=0;i<nameList.length;i++){
      suma+=nameList[i][1].split('').length
    }
var shortName='';
    for(j=0;j<nameList.length;j++){
      if(j==0){
        shortName=nameList[j][1]
      }else{
        if(nameList[j-1][1].split('').length > nameList[j][1].split('').length){
        shortName=nameList[j][1]
        }
      }
    }
var longName=''
for(k=0;k<nameList.length;k++){
  if(k==0){
    longName=nameList[k][1]
  }else{
    if(nameList[k-1][1].split('').length < nameList[k][1].split('').length){
    longName=nameList[k][1]
    }
  }
}

document.getElementById('stadistic1').innerHTML='Cantidad de alumnos: '+ addCount;
    document.getElementById('stadistic2').innerHTML='Promedio de caracteres: '+ (suma/addCount);
    document.getElementById('stadistic3').innerHTML='Nombre más corto: '+ shortName;
    document.getElementById('stadistic4').innerHTML='Nombre más largo: '+ longName;
}

function closeSearch(){
  document.getElementById('search').style.visibility='hidden'
  document.getElementById('replace').style.visibility='hidden'
  print(nameList)

}

function showStadistics(){
  if(document.getElementById('stadistics').style.visibility=='visible'){
    document.getElementById('stadistics').style.visibility='hidden'
  }else{
    document.getElementById('stadistics').style.visibility='visible'
  }
}
//BORRAR FILA
function deleteRow(source){
    nameList.splice(source,1)
    decimals.splice(source,1)
    addCount--
    print(nameList)
}

//ACdTUALIZA NOMBRE EN NAMELIST
function refreshName(info, source, applied){

    var change=info.value
    nameList[source].splice(applied,1,change)

}
var Id=0

function add(){
    var added=document.getElementById('source1').value;
    var addedVec=added.split(' ')
    var rest=''
    nameList.push([])
    nameList[addCount].push(Id)
    Id++
    if(addedVec.length==1){
      nameList[addCount].push(addedVec[0])
      nameList[addCount].push('')
      nameList[addCount].push("0")
      nameList[addCount].push('')
    }else if(addedVec.length==2){
      nameList[addCount].push(addedVec[0])
      nameList[addCount].push(addedVec[1])
      nameList[addCount].push("0")
      nameList[addCount].push('')
    }else{
      nameList[addCount].push(addedVec[0])
      for(i=1;i<addedVec.length;i++){
        if(i==addedVec.length-1){
          rest+=addedVec[i]
        }else{
          rest+=addedVec[i]+' '
        }
      }
      nameList[addCount].push(rest)
      nameList[addCount].push("0")
      nameList[addCount].push('')
    }
var suma=0;
    for(i=0;i<nameList.length;i++){
      suma+=nameList[i][1].split('').length
    }
var shortName='';
    for(j=0;j<nameList.length;j++){
      if(j==0){
        shortName=nameList[j][1]
      }else{
        if(shortName.length > nameList[j][1].split('').length){
        shortName=nameList[j][1]
        }
      }
    }
var longName=''
for(k=0;k<nameList.length;k++){
  if(k==0){
    longName=nameList[k][1]
  }else{
    if(longName.length < nameList[k][1].split('').length){
    longName=nameList[k][1]
    }
  }
}
    console.log(nameList)
    print(nameList)
    decimals.push(0)
    addCount++
    promedio=suma/addCount
    document.getElementById('stadistic1').innerHTML='Cantidad de alumnos: '+ addCount;
    document.getElementById('stadistic2').innerHTML='Promedio de caracteres: '+ (suma/addCount);
    document.getElementById('stadistic3').innerHTML='Nombre más corto: '+ shortName;
    document.getElementById('stadistic4').innerHTML='Nombre más largo: '+ longName;


    document.getElementById('source1').value=''
    document.getElementById('source1').focus()

}



function imprimirPantalla() {
        var mywindow = window.open('', 'PRINT', 'height=1000,width=1200');
        mywindow.document.write(`<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="styles.css">
        </head>
        <style>
        @font-face {
            font-family: 'Roboto';
            src: url('fonts/Roboto-Light.ttf') format('truetype');
          }
        
        body, html{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2vh;
          flex-direction: column;
          font-family: Roboto;
        }
        header{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 97vw;
          height: 7vh;
          gap: 1vw;
        }
        
        header input[type=text]{
          padding: 10px;
          width: 20%;
          background: transparent;
          border-radius: 0px;
          border: 0;
          border-bottom: .2vh solid black;
          font-size: 15px;
          color: black;
          outline: none;
        }
        header input[type=text]::placeholder{
        position: relative;
        transition: all .5s ease;
        top: 0;
        }
        
        header input[type=text]:hover::placeholder{
          position: relative;
          top: -5vh;
        }
        
        
        header #logo{
          width: 2.5%;
        }
        
        
          #matrix{
            background-color: rgb(226, 237, 241);
            border-radius: .5vh;
            display: grid;
            grid-auto-rows:1fr;
            width: 99vw;
          }
        
            #matrix div{
              border: 1px solid lightgrey;
              display: grid;
              grid-template-columns: repeat(6, 1fr);
             
            }
              #matrix div section{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid lightgrey;
              }
        
              section input{
                background-color: #edf2fa;
                border: none;
                outline: none;
                width: 99%;
                height: 95%;
                font-size: 1EM;
                text-align: center;
              }
              
          nav{
            position:relative;
            width: 97vw;
            height: 6vh;
            background-color: rgb(226, 237, 241);
            border-radius: 3vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            padding-left: 1vw ;
            padding-right: 1vw;
            
          }
        
        
          .toolbar {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            }
            
            .tool { 
              display: flex;
              justify-content: center;
              align-items: center;
              width: 5%;
              height: 70%;
              border-radius: .6vh;
              /* border: 0.1vh solid black; */
              box-sizing: border-box;
             
             }
              .tool img:hover{
                background-color: #d1d7e0;
              }
             .tool img{
              border-radius: .6vh;
              padding: 10%;
              width: 50%;
             }

             section input {
                background: white;
                     
              }
              section {
                background: white;
                     
              }
              section button{
                background: transparent;
                border: 0;
              }
              section button:hover{
                background: lightcoral;
                border: 0;
                border-radius: .6vh;
              }
        
        
            
        </style>
        <body>
        <div id="matrix">
        `+impresion+`
    </div>
<footer></footer>    
</body>
<script src="script.js"></script>
</html>`);

        // mywindow.print();
        // mywindow.document.close(); // necessary for IE >= 10
        // mywindow.focus(); // necessary for IE >= 10*/
    
        mywindow.print();
        mywindow.close();
    
        return true;
        
        }
