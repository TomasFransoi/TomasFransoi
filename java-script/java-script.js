class Producto {
    constructor(nombre, precio, id, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
} 
const sectionCarrito = document.getElementById("sectionCarrito");
const sectionContenedor = document.getElementById("sectionProductos");
let calcosFantasia = new Producto("Calcos Fantacia",150,1,0);
let calcosPersonalizadas = new Producto("Calcos Personalizadas",200,2,0);
let calcosParaMotos = new Producto("Calcos Para Motos",140,3,0);
let calcosParaBaterias = new Producto("Calcos Para Baterias",130,4,0);
let calcosParaLanchas = new Producto("Calcos Para Lanchas",10450,5,0);
let bolsosPortaCelular = new Producto("Bolsos Porta Celular",660,6,0);
let bolsoBajoAsiento = new Producto("Bolso Bajo Asiento",550,7,0);
let cubreVaina = new Producto("Cubre Vaina",250,8,0);
let pinesParaRayos = new Producto("Pines Para Rayos",280,9,0);
let protectoresAntiRalladura = new Producto("Protectores Anti Ralladura",300,10,0);
let fundasFantasia = new Producto("Fundas Fantasia",280,11,0);
let fundasMtb = new Producto("Fundas Mtb",650,12,0);
const productos = [calcosFantasia,calcosPersonalizadas,calcosParaMotos,calcosParaBaterias,calcosParaLanchas,bolsosPortaCelular,bolsoBajoAsiento,cubreVaina,pinesParaRayos,protectoresAntiRalladura,fundasFantasia,fundasMtb];
const carrito = [];
let idCalculator = 1
for (const elements of productos) {
    let div = document.createElement("div");
    div.innerHTML=`<h3>${elements.nombre}</h3> <p> el precio del producto es ${elements.precio} </p> \n <button type="button" id=${idCalculator} >agregar al carrito</button>`;
    sectionContenedor.appendChild(div); 
    idCalculator = idCalculator + 1;
}
let boton1 = document.getElementById("1");
boton1.onclick = () =>{carrito.push(calcosFantasia)};
let boton2 = document.getElementById("2");
boton2.onclick = () =>{carrito.push(calcosPersonalizadas)};
let boton3 = document.getElementById("3");
boton3.onclick = () =>{carrito.push(calcosParaMotos)};
let boton4 = document.getElementById("4");
boton4.onclick = () =>{carrito.push(calcosParaBaterias)};
let boton5 = document.getElementById("5");
boton5.onclick = () =>{carrito.push(calcosParaLanchas)};
let boton6 = document.getElementById("6");
boton6.onclick = () =>{carrito.push(bolsosPortaCelular)};
let boton7 = document.getElementById("7");
boton7.onclick = () =>{carrito.push(bolsoBajoAsiento)};
let boton8 = document.getElementById("8");
boton8.onclick = () =>{carrito.push(cubreVaina)};
let boton9 = document.getElementById("9");
boton9.onclick = () =>{carrito.push(pinesParaRayos)};
let boton10 = document.getElementById("10");
boton10.onclick = () =>{carrito.push(protectoresAntiRalladura)};
let boton11 = document.getElementById("11");
boton11.onclick = () =>{carrito.push(fundasFantasia)};
let boton12 = document.getElementById("12");
boton12.onclick = () =>{carrito.push(fundasMtb)};
