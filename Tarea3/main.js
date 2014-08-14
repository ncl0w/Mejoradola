var boom = function () {
	alert("BOOM!!!");
	document.write("<h1>DOOM!!! Pizaste una bomba.. :(</h1>");
}

var ganaste = function() {
	document.write("<h1>GANASTE!!! :)</h1>");	
}

var aleatorio = function(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
	return numero;
}

//1 es bomba, 0 es vacio
var campo = [[aleatorio(0, 1),aleatorio(0, 1),aleatorio(0, 1)],
			 [aleatorio(0, 1),aleatorio(0, 1),aleatorio(0, 1)],
			 [aleatorio(0, 1),aleatorio(0, 1),aleatorio(0, 1)]];

var textos = ["cesped","bomba"];
var x, y;
alert("Estas en un campo minado \n elige una posicion entre 0 y 2 para x y para y");
x = prompt("Posicion en X? (Entre 0 y 2)", 0);
y = prompt("Posicion en Y? (Entre 0 y 2)", 0);

if((x >= 0 && x < 3) && (y >= 0 & y < 3)){
	var posicion = campo[x][y];
	document.write(textos[posicion]);
	if(posicion == 1){
		boom();
	}else{
		ganaste();
	}
}else{
	document.write("Te saliste del campo ._.");
}