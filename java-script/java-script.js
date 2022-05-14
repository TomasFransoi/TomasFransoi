class Producto {
    constructor(nombre, precio, id, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
}
let CalcosFantasia = new Producto("Calcos Fantacia",150,1,0);
let CalcosPersonalizadas = new Producto("Calcos Personalizadas",200,2,0);
let CalcosParaMotos = new Producto("Calcos Para Motos",140,3,0);
let CalcosParaBaterias = new Producto("Calcos Para Baterias",130,4,0);
let CalcosParaLanchas = new Producto("Calcos Para Lanchas",10450,5,0);
let BolsosPortaCelular = new Producto("Bolsos Porta Celular",660,6,0);
let BolsoBajoAsiento = new Producto("Bolso Bajo Asiento",550,7,0);
let CubreVaina = new Producto("Cubre Vaina",250,8,0);
let PinesParaRayos = new Producto("Pines Para Rayos",280,9,0);
let ProtectoresAntiRalladura = new Producto("Protectores Anti Ralladura",300,10,0);
let FundasFantasia = new Producto("Fundas Fantasia",280,11,0);
let FundasMtb = new Producto("Fundas Mtb",650,12,0);
const Productos = [CalcosFantasia,CalcosPersonalizadas,CalcosParaMotos,CalcosParaBaterias,CalcosParaLanchas,BolsosPortaCelular,BolsoBajoAsiento,CubreVaina,PinesParaRayos,ProtectoresAntiRalladura,FundasFantasia,FundasMtb];
let Carrito = []
const mostrarProductos = (array) => {
        let texto = "Seleccione el Numero de un producto \n";
        let orden = 0
        array.forEach((element) => {
            orden = orden + 1;
            texto += `${orden} ${element.nombre} ${element.precio} \n`;
        })
        let NumeroProducto = parseInt(prompt(texto));
        return NumeroProducto
    };
let Numero = 0
let SiNo = "";
do {
    Numero = mostrarProductos(Productos);
    while (Numero > 12 || Numero <= 0) {
        Numero = mostrarProductos(Productos);
    }
    switch (Numero) {
    case 1:
        alert(`Usted selecciono ${CalcosFantasia.nombre} con un precio por unidad de ${CalcosFantasia.precio}`);
        CalcosFantasia.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(CalcosFantasia);
    break;
    case 2:
        alert(`Usted selecciono ${CalcosPersonalizadas.nombre} con un precio por unidad de ${CalcosPersonalizadas.precio}`);
        CalcosPersonalizadas.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(CalcosPersonalizadas);
    break;
    case 3:
        alert(`Usted selecciono ${CalcosParaMotos.nombre} con un precio por unidad de ${CalcosParaMotos.precio}`);
        CalcosParaMotos.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(CalcosParaMotos);
    break;
    case 4:
        alert(`Usted selecciono ${CalcosParaBaterias.nombre} con un precio por unidad de ${CalcosParaBaterias.precio}`);
        CalcosParaBaterias.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(CalcosParaBaterias);
    break;
    case 5:
        alert(`Usted selecciono ${CalcosParaLanchas.nombre} con un precio por unidad de ${CalcosParaLanchas.precio}`);
        CalcosParaLanchas.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(CalcosParaLanchas);
    break;
    case 6:
        alert(`Usted selecciono ${BolsosPortaCelular.nombre} con un precio por unidad de ${BolsosPortaCelular.precio}`);
        BolsosPortaCelular.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(BolsosPortaCelular);
    break;
    case 7:
        alert(`Usted selecciono ${BolsoBajoAsiento.nombre} con un precio por unidad de ${BolsoBajoAsiento.precio}`);
        BolsoBajoAsiento.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(BolsoBajoAsiento);
    break;
    case 8:
        alert(`Usted selecciono ${CubreVaina.nombre} con un precio por unidad de ${CubreVaina.precio}`);
        CubreVaina.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(CubreVaina);
    break;
    case 9:
        alert(`Usted selecciono ${PinesParaRayos.nombre} con un precio por unidad de ${PinesParaRayos.precio}`);
        PinesParaRayos.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(PinesParaRayos);
    break;
    case 10:
        alert(`Usted selecciono ${ProtectoresAntiRalladura.nombre} con un precio por unidad de ${ProtectoresAntiRalladura.precio}`);
        ProtectoresAntiRalladura.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(ProtectoresAntiRalladura);
    break;
    case 11:
        alert(`Usted selecciono ${FundasFantasia.nombre} con un precio por unidad de ${FundasFantasia.precio}`);
        FundasFantasia.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(FundasFantasia);
    break;
    case 12:
        alert(`Usted selecciono ${FundasMtb.nombre} con un precio por unidad de ${FundasMtb.precio}`);
        FundasMtb.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        Carrito.push(FundasMtb);
    break;
}
    SiNo = prompt("quiere otro producto? (responda con un si o no)");
} while (SiNo.toUpperCase() == "SI");
    let texto = "Su compre es: \n";
    let orden = 0;
    let precioCompra = 0
Carrito.forEach(element => {
    let PrecioProductoTotal = element.precio * element.cantidad;
    texto += `${element.cantidad} ${element.nombre} = ${PrecioProductoTotal} \n`;
    precioCompra = precioCompra + PrecioProductoTotal;
});
alert(`${texto}El precio total de se compra es de ${precioCompra}`);
let nombre = prompt ("ingrese su nombre");
let ubicacion = prompt ("ingrese la ubicacion de su casa porfavot");
let telefono = prompt ("para poder contactarlo");
let gmail = prompt ("ingrese su gmail");
alert(`Gracias ${nombre} por el pedido, este llegara a su casa de 10-15 dias `)
