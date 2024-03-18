function arearectangulo(){ //FUNCION PARA AREA RECTANGULO
    var arectangulo=document.getElementById('a-rectangulo').value;
    var brectangulo=document.getElementById('b-rectangulo').value;
    
    document.getElementById('arearectangulo').innerHTML= ('Area: '+arectangulo*brectangulo); 
    }

function areatriangulo(){ //FUNCION PARA AREA TRIANGULO
    var atriangulo=document.getElementById('a-triangulo').value;
    var btriangulo=document.getElementById('b-triangulo').value;
    
    document.getElementById('areatriangulo').innerHTML= ('Area: '+(atriangulo*btriangulo)/2); 
    }

    function arearombo(){ //FUNCION PARA AREA ROMBO
    var dmayorrombo=document.getElementById('d-mayor-rombo').value;
    var dmenorrombo=document.getElementById('d-menor-rombo').value;
    
    document.getElementById('arearombo').innerHTML= ('Area: '+(dmayorrombo*dmenorrombo)/2); 
    }

    function areacuadrado(){ //FUNCION PARA AREA CUADRADO
    var lcuadrado=document.getElementById('l-cuadrado').value;
    
    document.getElementById('areacuadrado').innerHTML= ('Area: '+lcuadrado*lcuadrado); 
    }

    function areaparalelogramo(){ //FUNCION PARA AREA PARALELOGRAMO
    var aparalelogramo=document.getElementById('a-paralelogramo').value;
    var bparalelogramo=document.getElementById('b-paralelogramo').value;
    document.getElementById('areaparalelogramo').innerHTML= ('Area: '+aparalelogramo*bparalelogramo); 
    }

    function areatrapecio(){ //FUNCION PARA AREA TRAPECIO
    var bmayorparalelogramo=parseInt (document.getElementById('bmayor-trapecio').value);
    var bmenorparalelogramo=parseInt (document.getElementById('bmenor-trapecio').value);
    var alturaparalelogramo=document.getElementById('a-trapecio').value;

    document.getElementById('areatrapecio').innerHTML= ('Area: '+((bmayorparalelogramo+bmenorparalelogramo)/2)*alturaparalelogramo); 
    }

    function arearomboide(){ //FUNCION PARA AREA ROMBOIDE
    var dmayorromboide=document.getElementById('d-mayor-romboide').value;
    var dmenorromboide=document.getElementById('d-menor-romboide').value;
    document.getElementById('arearomboide').innerHTML= ('Area: '+(dmayorromboide*dmenorromboide)/2); 
    }

    function areapoligono(){ //FUNCION PARA AREA POLIGONO REGULAR
    var perimetro=document.getElementById('perimetro').value;
    var apotema=document.getElementById('apotema').value;
    document.getElementById('areapoligono').innerHTML= ('Area: '+(perimetro*apotema)/2); 
    }

    function areacirculo(){ //FUNCION PARA AREA CIRCULO
    var radio=document.getElementById('radio-circulo').value;

  
    document.getElementById('areacirculo').innerHTML= ('Area: '+ Math.PI*radio*radio); 
    }





// Añade funciones similares para las otras figuras
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

































