
// function palindromo(){

// 	var fraseUsuario = prompt('Escribe tu frase');
	
// 	fraseUsuario = fraseUsuario.toLowerCase().replace(/\s/g,"");
// 	fraseReverse = fraseUsuario.split("").reverse().toString();

// 	for (var i = 0; i < ((fraseReverse.length)-1); i++){
// 		fraseReverse=fraseReverse.replace(",","");
// 	}
// 	if (fraseUsuario==fraseReverse){
// 		resultado="es un Palindromo";
// 	} else{
// 		resultado="no es un Palindromo";
// 	}
// 	document.getElementById('resultado').innerHTML = 'Tu resultado: ' + resultado;
// 	console.log(resultado);
// }

// Código para saber si una palabra es palindromo

function palindromo() {
	var fraseUsuario = prompt('Escribe tu frase o palabra');

	fraseUsuario = fraseUsuario.toLowerCase().split(' ').join('');
	fraseReverse = fraseUsuario.split("").reverse().toString();
	fraseReverse = fraseReverse.split(',').join('');

	if (fraseUsuario==fraseReverse){
		resultado="es un Palindromo";
	} else {
		resultado="No es un Palindromo";
	}
	document.getElementById('resultado').innerHTML = 'Tu resultado: ' + resultado;
	console.log(resultado)
};

// Código para realizar una pirámide de asteriscos

function piramide() {
	var numeroUsuario = parseInt(prompt('Ingrese un número', '000'), 10);

	for (i = 1; i >= ((numeroUsuario.length)-1); i--);
	console.log(numeroUsuario);
};

// Código para cambiar imagen según personaje

function personaje() {
	var level = parseInt(prompt('Escribe el nivel que actualmente tienes'));
	var image = document.getElementById('level-pic');

	if (level <= 10) {
		titulo = 'Principiante';
		image.src = 'img/baby.png';
	} else if (level > 10 && level <= 20){
		titulo = 'acróbata';
		image.src = 'img/acrobat.png';
	} else if (level > 20){
		titulo = 'ninja';
		image.src = 'img/ninja.png';
	}
document.getElementById('level-usuario').innerHTML = 'Tu título según tu nivel es: ' + titulo;
};
		

