let img1 = document.querySelector('#gato');
let img2 = document.querySelector('#perro');
let img3 = document.querySelector('#loro');
let boton = document.querySelector('#recargarButton');
img1.addEventListener('mouseover', () => {
	img1.src = './img/perro.png';
});
img2.addEventListener('mouseover', () => {
	img2.src = './img/calavera.png';
});
img3.addEventListener('mouseover', () => {
	img3.src = './img/perro.png';
});
boton.addEventListener('click', () => {
    location.reload();
})