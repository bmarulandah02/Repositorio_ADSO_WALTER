let listaTareas = [
	{
		id: 1,
		titulo: 'Aprender JavaScript',
		prioridad: 'Alta', // Puede ser: "Alta", "Media", "Baja"
		completada: false,
	},
];
let tabla_tareas = document.getElementById('tabla_tareas');
function listarTareas(listado = listaTareas) {
	tabla_tareas.innerHTML = ''; //housekeeping
	listado.forEach((tarea) => {
		let estado = tarea.completada
			? '<span class="badge bg-success">Completada</span>'
			: '<span class="badge bg-warning">Pendiente</span>';
		let prioridad = '';
		if (tarea.prioridad === 'Alta') {
			prioridad += ' <span class="badge bg-danger">Alta</span>';
		} else if (tarea.prioridad === 'Media') {
			prioridad += ' <span class="badge bg-primary">Media</span>';
		} else if (tarea.prioridad === 'Baja') {
			prioridad += ' <span class="badge bg-secondary">Baja</span>';
		}
		let fila = `<tr><td>${tarea.id}</td><td>${tarea.titulo}</td><td>${prioridad}</td><td>${estado}</td></tr>`;
		tabla_tareas.innerHTML += fila;
	});
}
function agregarTarea() {
	let numero_tarea = document.getElementById('numero_tarea').value;
	let titulo_tarea = document.getElementById('titulo_tarea').value;
	let prioridad_tarea = document.getElementById('prioridad_tarea').value;
	/* Clono el arreglo de objetos , lista de tareas y agrego un elemento :objeto */
	/* inmutabilidad */
	listaTareas = [
		...listaTareas,
		{
			id: numero_tarea,
			titulo: titulo_tarea,
			prioridad: prioridad_tarea,
			completada: false,
		},
	];

	listarTareas();
}
function completarTarea() {
	let codigo = document.getElementById('codigo_tarea').value;
	/* Inmutabilidad al 100% */
	listaTareas = listaTareas.map((tarea) => {
		if (tarea.id == codigo) {
			return { ...tarea, completada: true };
		}
		return tarea;
	});
	listarTareas();
}
function cambiarPrioridad() {
	let codigo = document.getElementById('codigo_tarea').value;
	let nuevaPrioridad = document.getElementById('nueva_prioridad').value;
	listaTareas = listaTareas.map((tarea) => {
		if (tarea.id == codigo) {
			return { ...tarea, prioridad: nuevaPrioridad };
		}
		return tarea;
	});
	listarTareas();
}
function cambiarPrioridad() {
	let codigo = document.getElementById('codigo_tarea').value;
	let nuevaPrioridad = document.getElementById('nueva_prioridad').value;
	listaTareas = listaTareas.map((tarea) => {
		if (tarea.id == codigo) {
			return { ...tarea, prioridad: nuevaPrioridad };
		}
		return tarea;
	});
	listarTareas();
}
function filtrarPendientes() {
	let pendientes = listaTareas.filter((tarea) => tarea.completada === false);
	listarTareas(pendientes);
}

function filtrarCompletas() {
	let completas = listaTareas.filter((tarea) => tarea.completada === true);
	listarTareas(completas);
}
listarTareas();