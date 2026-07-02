/* 3. Extraer nombres (Método map)
Tiene un array de objetos que representan libros. Usa map para crear un nuevo array que contenga solo los títulos de los
libros.
JavaScript */
const books =[
    { title:"El Quijote",author:"Cervantes"},
    { title:"Cien Años de Soledad",author:"Gabriel García Márquez"},
    { title :"Ficciones", author:"Borges"}
];
let titulos = books.map(book => book.title); 
console.log(titulos);