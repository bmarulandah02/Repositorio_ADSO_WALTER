/* 4. Filtrar por inventario (Método filter)
Tiene una lista de productos en una tienda. Usa filter para obtener un nuevo array que solo contenga los productos que tienen
stock mayor a 0. */
const inventory = [
	{ name: 'Teclado', stock: 5 },
	{ name: 'Mouse', stock: 0 },
	{ name: 'Monitor', stock: 2 },
	{ name: 'Audífonos', stock: 0 },
];
let productosStock = inventory.filter(product => product.stock > 0);
console.log(productosStock);