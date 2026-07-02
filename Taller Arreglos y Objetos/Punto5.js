/* 5. Buscar por etiqueta (Método includes + filter)
Filtre los siguientes posts para obtener solo aquellos que incluyan la etiqueta ("tag") "javascript". (Pista: Combina filter con
includes en la propiedad tags). */
const posts = [
	{ id: 1, title: 'Intro a React', tags: ['javascript', 'react'] },
	{ id: 2, title: 'Diseño con CSS', tags: ['css', 'design'] },
	{ id: 3, title: 'Node básico', tags: ['javascript', 'backend'] },
];
let postsJava= posts.filter (post => post.tags.includes("javascript"));
console.log(postsJava);