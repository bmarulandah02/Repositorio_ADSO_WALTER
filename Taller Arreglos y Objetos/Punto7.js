/* 7. Modificar precios (Método map + Spread)
Tiene un array de productos. Aplica un 10% de descuento a todos los productos. Devuelve un nuevo array sin modificar los
objetos originales.
 */
const store = [
 { name: "Camisa", price: 30 },
 { name: "Pantalón", price: 50 },
 { name: "Zapatos", price: 80 }
];
let storeNuevo = store.map(product => {
 return { ...product, price: product.price - product.price * 0.1 };
});
console.log(storeNuevo);
