/* 10. Desestructuración y Rest (Destructuring + Rest Operator)
Dado el siguiente objeto de configuración, usa desestructuración para extraer la propiedad theme en una variable, y agrupa el
resto de las propiedades (url y port) en un objeto llamado connection.
 */
const config = {
 theme: "dark",
 url: "localhost",
 port: 8080
};
let { theme, ...connection } = config;
console.log(theme);
console.log(connection);