
const button = document.getElementById('avatar-navbar');
const closeButton = document.querySelector('.close-button');
const navigationMenu = document.querySelector('.navigation__menu');

button.addEventListener('click', () => {
    navigationMenu.classList.remove('none');
    navigationMenu.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
    navigationMenu.classList.add('hide');
});



const fechas= document.querySelectorAll(".fecha")
const fechaInicio = document.querySelector("#fecha-inicio")
const fechaFin = document.querySelector("#fecha-fin")
const buscarfechas = document.querySelector("#buscar-fechas")
const cards = document.querySelectorAll(".card")

buscarfechas.addEventListener('click',() => {

    for (var i=0;i<cards.length;i++){
        console.log("Inicio "+i+": "+fechaInicio.value)
        console.log("Fin "+i+": "+fechaFin.value)
        console.log("Fecha "+i+": "+fechas[i].value)
        console.log("------------------------------")


        cards[i].style.display='none'

        if (fechaInicio.value<= fechas[i].value && fechas[i].value <= fechaFin.value){
            cards[i].style.display='flex'
        }
        
    }
})

document.addEventListener('DOMContentLoaded', function() {
let date = new Date()
 let day = `${(date.getDate())}`.padStart(2,'0');
 let month = `${(date.getMonth()+1)}`.padStart(2,'0');
 let year = date.getFullYear();

    fechaInicio.value=  `${year}-${month}-${day}`
    fechaFin.value= `${year}-${month}-${day}`
}, false);



const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    allTabs.forEach((tab) => {
      const id = tab.id;
      if (id.includes(linkId)) {
        tab.classList.add("tab-content--active");
      } else {
        tab.classList.remove("tab-content--active");
      }
    });
  });
});




