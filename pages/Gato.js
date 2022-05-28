var contador=1;
var b1="b1", b2="b2", b3="b3", b4="b4", b5="b5", b6="b6", b7="b7", b8="b8", b9="b9";

function accion(boton){
	if(boton.className=="botones"){
		boton.className="marcado";
		var valor;
		if (contador==9){
			swal("Ups", "No hubo ganador", "info");
		}
		if(contador%2==0){
			valor="X";
		}else{
			valor="O";
		}
		boton.value=valor;
		boton.appendChild(document.createTextNode(valor));
		contador++;
		asignaBoton(valor, boton);
	}else{
		/*console.log("Accion 4");*/
	}
}

function asignaBoton(valor, boton){
	if(b1==boton.name){
		b1=valor;
	}else if(b2==boton.name){
		b2=valor;
	}else if(b3==boton.name){
		b3=valor;
	}else if(b4==boton.name){
		b4=valor;
	}else if(b5==boton.name){
		b5=valor;
	}else if(b6==boton.name){
		b6=valor;
	}else if(b7==boton.name){
		b7=valor;
	}else if(b8==boton.name){
		b8=valor;
	}else if(b9==boton.name){
		b9=valor;
	}
	validaJugada(valor);
}

function finalizar(){
	window.location.reload();
}

function validaJugada(valor){
	if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
		swal("Ganaste!", "Jugador "+valor, "success");
	}
}