
function change(){
    let selector= document.getElementById('selector').value
    let tex1= document.getElementById('tex1').value

for (i=1;i<17;i++){
    document.querySelector(".hijo:nth-child("+i+")").style=`  width: 25%;
    height: 25%;
    box-sizing: border-box;
    border: 1px solid black;
    display: flex;
    justify-content:center ;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: all 0.3s;`
}
   

document.querySelector(".hijo:nth-child("+selector+")").style=tex1
if (selector=='n'){
    document.querySelector(".hijo:nth-child(1)").style=tex1
    document.querySelector(".hijo:nth-child(2)").style=tex1
    document.querySelector(".hijo:nth-child(3)").style=tex1
    document.querySelector(".hijo:nth-child(4)").style=tex1
    document.querySelector(".hijo:nth-child(5)").style=tex1
    document.querySelector(".hijo:nth-child(6)").style=tex1
    document.querySelector(".hijo:nth-child(7)").style=tex1
    document.querySelector(".hijo:nth-child(8)").style=tex1
    document.querySelector(".hijo:nth-child(9)").style=tex1
    document.querySelector(".hijo:nth-child(10)").style=tex1
    document.querySelector(".hijo:nth-child(11)").style=tex1
    document.querySelector(".hijo:nth-child(12)").style=tex1
    document.querySelector(".hijo:nth-child(13)").style=tex1
    document.querySelector(".hijo:nth-child(14)").style=tex1
    document.querySelector(".hijo:nth-child(15)").style=tex1
    document.querySelector(".hijo:nth-child(16)").style=tex1
}
}
  

function change2(){
    let selector= document.getElementById('selector').value
    let tex1= document.getElementById('tex1').value
   

document.querySelector(".hijo:nth-child("+selector+")").style=tex1
if (selector=='n'){
    document.querySelector(".hijo:nth-child(1)").style=tex1
    document.querySelector(".hijo:nth-child(2)").style=tex1
    document.querySelector(".hijo:nth-child(3)").style=tex1
    document.querySelector(".hijo:nth-child(4)").style=tex1
    document.querySelector(".hijo:nth-child(5)").style=tex1
    document.querySelector(".hijo:nth-child(6)").style=tex1
    document.querySelector(".hijo:nth-child(7)").style=tex1
    document.querySelector(".hijo:nth-child(8)").style=tex1
    document.querySelector(".hijo:nth-child(9)").style=tex1
    document.querySelector(".hijo:nth-child(10)").style=tex1
    document.querySelector(".hijo:nth-child(11)").style=tex1
    document.querySelector(".hijo:nth-child(12)").style=tex1
    document.querySelector(".hijo:nth-child(13)").style=tex1
    document.querySelector(".hijo:nth-child(14)").style=tex1
    document.querySelector(".hijo:nth-child(15)").style=tex1
    document.querySelector(".hijo:nth-child(16)").style=tex1
}
}