/* 1. Clonar y actualizar (Operador Spread)
Tiene un objeto que representa a un usuario. Crea una función llamada updateEmail que reciba el objeto usuario y un nuevo
correo, y devuelva un nuevo objeto con el correo actualizado sin modificar el original.
JavaScript */

const user = { id: 1, name: "Ana", email: "ana@old.com" };
function updateEmail(objeto,nuevoEmail){
    let nuevoUser = {...objeto ,email:nuevoEmail}//Clonar un objeto con el operador spread y actualizar el email
    return nuevoUser; //Devolver el nuevo objeto con el email actualizado
   /*  console.log(nuevoUser); //devuelve el nuevo objeto */
}
console.log(updateEmail(user,"nuevo@gmail.com")); //Llamar a la función con el objeto original y el nuevo email