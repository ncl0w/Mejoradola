var boom = function () {
	alert("BOOM!!!");
	document.write("<h1>DOOM!!! Pizaste una bomba.. :(</h1>");
}

var gameOver = function(){
	document.write("<h1>GAMEOVER.. :(</h1>");
}

var ganaste = function() {
	document.write("<h1>GANASTE!!! :)</h1>");	
}

var aleatorio = function(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
	return numero;
}

var campo;
var crearCampo = function(longitud){
	campo = new Array(longitud);
	for(i = 0; i < longitud; i++){
		campo[i] = new Array(longitud);
		for(ii = 0; ii < longitud; ii++){
			campo[i][ii] = aleatorio(0, 1);
			//console.log(campo[i][ii]);
		}
	}
}

var tam = prompt("Bienvenido, necesito que me digas la medida de un terreno (en números enteros mayores a 0),\n en el podras encontrar bonitos tesoros!!!", 10);
if (tam > 0 ){
	crearCampo(tam);
	alert("Ups, olvide mencionarte que tambien hay bombas...\n asi que cuidado en donde pones el pie\n Estas en un campo minado \n elige una posicion entre 0 y " + (tam - 1) + " para x y para y");

	var textos = ["Encontraste un tesoro","Pisaste una bomba"];
	var x = prompt("Posicion en X? (Entre 0 y " + (tam - 1) + ")", 0);
	var y = prompt("Posicion en Y? (Entre 0 y " + (tam - 1) + ")", 0);

	if((x >= 0 && x < tam) && (y >= 0 & y < tam)){
		var posicion = campo[x][y];
		document.write(textos[posicion]);
		if(posicion == 1){
			boom();
			gameOver();
		}else{
			ganaste();
		}
	}else{
		document.write("Te saliste del campo ._.");
		gameOver();
	}
}else{
	alert("QUE CARAJO, NO SABES LEER??... Perdiste");
	gameOver();
}