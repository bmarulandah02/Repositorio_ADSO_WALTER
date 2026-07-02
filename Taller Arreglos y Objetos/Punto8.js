/* 8. ¿Todos son mayores de edad? (Método every)
Verifique si todos los usuarios de la lista son mayores de edad (18 años o más). La función debe devolver true o false.
 */
const group = [
	{ name: 'Juan', age: 20 },
	{ name: 'Sofía', age: 17 },
	{ name: 'Pedro', age: 25 },
];
let MayoresEdad = group.every(personas => personas.age >= 18);
console.log(MayoresEdad);