/* 9. Contador de categorías (Método reduce / Objetos dinámicos)
Tiene un array de productos con categorías. Usa reduce para crear un objeto que cuente cuántos productos hay por cada
categoría. Resultado esperado: { electronica: 2, ropa: 1 } */
const items = [
	{ name: 'TV', category: 'electronica' },
	{ name: 'Sudadera', category: 'ropa' },
	{ name: 'Smartphone', category: 'electronica' },
];
let contadorCategoria = items.reduce((contador, item) => {
    if (contador[item.category]) {
        contador[item.category]++;
    } else {
        contador[item.category] = 1;
    }
    return contador;
}, {});
console.log(contadorCategoria);