/* 6. El cliente VIP (Método find)
Encuentre al primer usuario de la lista que tenga la propiedad isVip en true. Debes devolver el objeto completo.
 */
const customers = [
	{ id: 101, name: 'Luis', isVip: false },
	{ id: 102, name: 'María', isVip: true },
	{ id: 103, name: 'Carlos', isVip: true },
];

let clienteVip = customers.find(customer => customer.isVip === true);
console.log(clienteVip);