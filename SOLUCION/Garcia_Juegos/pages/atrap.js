let imagenes = [];
imagenes["vaquita"] = "vaca.png";
imagenes["chickeno"] = "pollo.png";
imagenes["chanchuno"] = "cerdo.png";


let coleccion = [];
coleccion.push(new Atrapalo("vaquita", 100, 30));
coleccion.push(new Atrapalo("chickeno", 80, 50));
coleccion.push(new Atrapalo("chanchuno", 120, 40));

for(atrap of coleccion)
{
    atrap.mostrar();
}