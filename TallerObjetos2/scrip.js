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

const categorias = inventario.map((producto) => producto.categoria);

// 2. Eliminar duplicados con Set
const categoriasUnicas = [...new Set(categorias)];

console.log(categoriasUnicas);
function perifericosDescuento(inventario) {
  return inventario
    .filter(p => p.categoria === "Periféricos") // solo periféricos
    .map(p => ({
      ...p,
      precio: p.precio * 0.8 // aplicar 20% descuento
    }));
}

const resultado = perifericosDescuento(inventario);

console.log(" periféricos con descuento:", resultado);