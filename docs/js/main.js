const fila = document.querySelector('.contenedor-carousel');
const pelicula = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//--------------Event Listener Para la Flecha Derecha-------------

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
});

//--------------Event Listener Para la Flecha izquierda-------------
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
});

//-----------------Paginación-------------------------------------
 const numeroPaginas = Math.ceil(pelicula.length / 5);
 for(let i = 0; i < numeroPaginas; i++){
 	const indicador = document.createElement('button');

 	if(i === 0){
 		indicador.classList.add('activo');
 	}


 	document.querySelector('.indicadores').appendChild(indicador);
 	indicador.addEventListener('click', (e) => {
 		fila.scrollLeft = i * fila.offsetWidth;
 	});
 }
 

 //----------------------hover----------------------------------
 peliculas.forEach((pelicula) =>{
 	pelicula.addEventListener('mouseenter', (e) => {
 		const elemento = e.currentTarget;
 		setTimeout(() => {
 			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
 			elemento.classList.add('hover');
 		}, 220);
 	});
 });
