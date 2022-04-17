let lg = document.getElementById("granjita");
let papel = lg.getContext("2d");

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};



let fondo = 
{
    url: "tile.png",
    cargaOk: false
}

let vaca = 
{
    url: "vaca.png",
    x : [],
	y : [],
    cargaOk: false
};

let cerdo = 
{
    url: "cerdo.png",
    x : [],
	y : [],
    cargaOk: false
};

let pollo = 
{
    url: "pollo.png",
    x : [],
	y : [],
    cargaOk: false
};

let perro = 
{
    url: "perro.png",
    x : 0,
	y : 0,
    cargaOk: false
};


let cantidad = aleatorio(0, 10);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

perro.objeto = new Image();
perro.objeto.src = perro.url;
perro.objeto.addEventListener("load", cargarPerro);



function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPerro()
{
    perro.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.objeto, 0, 0);
    }

    if(vaca.cargaOk)
    {

        console.log(cantidad);
        for(let v=0; v < cantidad; v++)
        {
            let x= (aleatorio (0,7)*60);
            let y= (aleatorio (0,7)*60);
            vaca.x[v] = x;
			vaca.y[v] = y;
            papel.drawImage(vaca.objeto, x, y);
        }
    }

    if(pollo.cargaOk)
    {

        console.log(cantidad);
        for(let p=0; p < cantidad; p++)
        {
            let x = (aleatorio (0,7)*60);
            let y = (aleatorio (0,7)*60);
            pollo.x [p] = x;
			pollo.y [p] = y;
            papel.drawImage(pollo.objeto, x, y);
        }
    
    }
    

    if(cerdo.cargaOk)
        {
    
            console.log(cantidad);
            for(let c=0; c < cantidad; c++)
            {
                let x = (aleatorio (0,7)*60);
                let y = (aleatorio (0,7)*60);
                cerdo.x [c] = x;
		        cerdo.y [c ]= y;
                papel.drawImage(cerdo.objeto, x, y);
            }

    }

    if(perro.cargaOk)
    {       
            let x = (aleatorio (0,7)*60);
            let y = (aleatorio (0,7)*60);
            perro.x = x;
            perro.y = y;
            papel.drawImage(perro.objeto, x, y);
        }

}


  function aleatorio(min, maxi){
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  }


  function moverPerro(x,y)
  {
      papel.drawImage(perro.objeto,x,y);
  }
  
  function dibujarOtraVez()
  {
      if(fondo.cargaOk)
      {
          papel.drawImage(fondo.objeto , 0 , 0);
      }
       if(vaca.cargaOk)
       {
           for( let v = 0; v < cantidad; v++)
          {
              papel.drawImage(vaca.objeto , vaca.x[v] , vaca.y[v]);
              console.log(cantidad);
          }
       }
       if(pollo.cargaOk)
       {
           for( let p = 0; p < cantidad; p++)
          {
              papel.drawImage(pollo.objeto , pollo.x[p] , pollo.y[p]);
              console.log(cantidad);
          }
       }

       if(cerdo.cargaOk)
       {
           for( let c = 0; c < cantidad; c++)
          {
              papel.drawImage(cerdo.objeto , cerdo.x[c] , cerdo.y[c]);
              console.log(cantidad);
          }
       }
  }

  document.addEventListener("keyup", moverTecla); 
	function moverTecla(evento)
	{
			var movimiento = 10;
			switch (evento.keyCode)
		{
			case teclas.UP:
				dibujarOtraVez();
				moverPerro(perro.x,perro.y);
				perro.y = perro.y - movimiento;
			break;
			case teclas.DOWN:
				dibujarOtraVez();
				moverPerro(perro.x,perro.y);
				perro.y = perro.y + movimiento;				
			break;
			case teclas.LEFT:
				dibujarOtraVez();
				moverPerro(perro.x,perro.y);
				perro.x = perro.x - movimiento;				
			break;
			case teclas.RIGHT:
				dibujarOtraVez();
				moverPerro(perro.x,perro.y);
				perro.x = perro.x + movimiento;				
			break;
			default:
				console.log("Otra tecla");
			break;
		}	
	}	