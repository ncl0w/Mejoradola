function Pokemon(n,v,a,g){
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function(){
		alert(this.grito);
	}
}
function inicio(){
	var pikachu = new Pokemon("Pikachu", 100, 55, "Pika!");
	nombrePokemon.innerText = pikachu.nombre;
	datosPokemon.innerHTML = "Este pokemon tiene una vida de " + pikachu.vida + ", <br> un ataque de " + pikachu.ataque + "<br> y su grito es: " + pikachu.grito;
	imagenPokemon.src = pikachu.nombre + ".jpg";

	var bulbasaur = new Pokemon("Bulbasaur", 90, 50, "No me lo se!");
	nombrePokemon2.innerText = bulbasaur.nombre;
	datosPokemon2.innerHTML = "Este pokemon tiene una vida de " + bulbasaur.vida + ", <br> un ataque de " + bulbasaur.ataque + "<br> y su grito es: " + bulbasaur.grito;
	imagenPokemon2.src = bulbasaur.nombre + ".jpg";
}