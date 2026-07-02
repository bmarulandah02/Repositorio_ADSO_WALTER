const inventario = [
	{
		id: 1,
		nombre: 'Laptop Pro',
		categoria: 'Electrónica',
		precio: 1200,
		stock: 8,
		valoraciones: [5, 4, 4.5],
	},
	{
		id: 2,
		nombre: 'Teclado Mecánico',
		categoria: 'Periféricos',
		precio: 150,
		stock: 0,
		valoraciones: [4, 4, 3.5],
	},
	{
		id: 3,
		nombre: 'Monitor 4K',
		categoria: 'Electrónica',
		precio: 450,
		stock: 3,
		valoraciones: [4.8, 4.9],
	},
	{
		id: 4,
		nombre: 'Ratón Gaming',
		categoria: 'Periféricos',
		precio: 80,
		stock: 15,
		valoraciones: [4.5, 4.2, 4.7],
	},
	{
		id: 5,
		nombre: 'Silla Ergonómica',
		categoria: 'Muebles',
		precio: 250,
		stock: 5,
		valoraciones: [4, 3, 4.2],
	},
];
/* Cree una función que reciba un id y devuelva únicamente el objeto del producto correspondiente. Si no
lo encuentra, debe devolver un mensaje de error: "Producto no encontrado" */
let buscarProducto = document.getElementById('buscarProducto');
function encontrarProducto() {
	let id = buscarProducto.value;
	let producto = inventario.find((p) => p.id === parseInt(id));
	if (producto) {
		console.log(producto);
	} else {
		console.log('Producto no encontrado');
	}
}

/* Comprueba si al menos uno de los productos del inventario supera los $1000. La función debe devolver
un booleano (true/false). */

function verificarProducto() {
	let precio = inventario.some((p) => p.precio < 1000);
	if (precio) {
		console.log(true);
	} else {
		console.log(false);
	}
}
/* Queremos asegurarnos de que todos los productos de la tienda tienen al
menos una valoración (que el array valoraciones no esté vacío).
Devuelve true o false. */
function verificarValoracion() {
	let valoraciones = inventario.every((p) => p.valoraciones.length > 0);
	console.log(valoraciones);
}
/* Crea una función que reciba una cadena de texto (por ejemplo, "pro") y
devuelva todos los productos cuyo nombre contenga ese texto, sin
importar si está en mayúsculas o minúsculas. */
function verificarTexto() {
    let texto = document.getElementById('buscarTexto').value.toLowerCase();
    let productosEncontrados = inventario.filter((p) =>
        p.nombre.toLowerCase().includes(texto)
    );
    console.log(productosEncontrados);
}
/* Encuentra el primer producto que tenga una valoración media (promedio) superior a 4.5. (Pista: tendrá
que calcular el promedio de las valoraciones dentro de la búsqueda).
 */
function verificarValoracionMedia() {
    let producto = inventario.find((p) => {
        let promedio = p.valoraciones.reduce((a, b) => a + b, 0) / p.valoraciones.length;
        return promedio > 4.5;
    });
    console.log(producto);
}
/* Genera un nuevo array que contenga únicamente los nombres de los productos en mayúsculas. (Ej:
["LAPTOP PRO", "TECLADO MECÁNICO", ...]). */
function GenerarArrayMayusculas() {
    let nombresMayusculas = inventario.map((p) => p.nombre.toUpperCase());
    console.log(nombresMayusculas);
}