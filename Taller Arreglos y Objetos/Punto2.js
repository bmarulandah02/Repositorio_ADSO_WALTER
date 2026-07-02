/* 2. Combinar propiedades (Operador Spread)
Tiene dos objetos: uno con los datos básicos de un producto y otro con los datos de envío. Combínalos en un solo objeto
llamado fullProduct usando el operador spread.
JavaScript */
const basicInfo={id:"P100", name:"Laptop"};
const shippingInfo={weight:"1.5kg",price:"999"};
function fullProduct(basic,shipping){
    let fullInfo={...basic,...shipping}
    return fullInfo; 
}
console.log(fullProduct(basicInfo,shippingInfo));