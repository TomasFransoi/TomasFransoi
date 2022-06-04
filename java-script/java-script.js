class Producto {
    constructor(nombre, precio, id, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
}

function guardarEnLocal(key, valor) {
    localStorage.setItem(key, JSON.stringify(valor))
}

function obtenerValor(key) {
    let info = JSON.parse(localStorage.getItem(key));
    return (info)
}


const sectionCarrito = document.getElementById("sectionCarrito");
const sectionContenedor = document.getElementById("sectionProductos");
const main = document.getElementById("main")
let calcosFantasia = new Producto("Calcos Fantacia", 150, 1, 1);
let calcosPersonalizadas = new Producto("Calcos Personalizadas", 200, 2, 1);
let calcosParaMotos = new Producto("Calcos Para Motos", 140, 3, 1);
let calcosParaBaterias = new Producto("Calcos Para Baterias", 130, 4, 1);
let calcosParaLanchas = new Producto("Calcos Para Lanchas", 10450, 5, 1);
let bolsosPortaCelular = new Producto("Bolsos Porta Celular", 660, 6, 1);
let bolsoBajoAsiento = new Producto("Bolso Bajo Asiento", 550, 7, 1);
let cubreVaina = new Producto("Cubre Vaina", 250, 8, 1);
let pinesParaRayos = new Producto("Pines Para Rayos", 280, 9, 1);
let protectoresAntiRalladura = new Producto("Protectores Anti Ralladura", 300, 10, 1);
let fundasFantasia = new Producto("Fundas Fantasia", 280, 11, 1);
let fundasMtb = new Producto("Fundas Mtb", 650, 12, 1);
const productos = [calcosFantasia, calcosPersonalizadas, calcosParaMotos, calcosParaBaterias, calcosParaLanchas, bolsosPortaCelular, bolsoBajoAsiento, cubreVaina, pinesParaRayos, protectoresAntiRalladura, fundasFantasia, fundasMtb];
const carrito = [];
let idCalculator = 1
for (const elements of productos) {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${elements.nombre}</h3> <p> el precio del producto es ${elements.precio} </p> \n <button type="button" id=${idCalculator} >agregar al carrito</button>`;
    sectionContenedor.appendChild(div);

    idCalculator = idCalculator + 1;
}
let boton1 = document.getElementById("1");
let boton2 = document.getElementById("2");
let boton3 = document.getElementById("3");
let boton4 = document.getElementById("4");
let boton5 = document.getElementById("5");
let boton6 = document.getElementById("6");
let boton7 = document.getElementById("7");
let boton8 = document.getElementById("8");
let boton9 = document.getElementById("9");
let boton10 = document.getElementById("10");
let boton11 = document.getElementById("11");
let boton12 = document.getElementById("12");
let buttonsAgregar = [boton1, boton2, boton3, boton4, boton5, boton6, boton7, boton8, boton9, boton10, boton11, boton12];


for (let index = 0; index < productos.length; index++) {
    buttonsAgregar[index].onclick = () => {
        carrito.push(productos[index]);
        guardarEnLocal("carrito", carrito);
        let div = document.createElement("div");
        div.innerHTML = `<h3>${productos[index].nombre}</h3> <p> el precio del producto es ${productos[index].precio} </p>`
        sectionCarrito.appendChild(div);
        idCalculator = idCalculator + 1;
        Toastify({
            text: "Producto agregado",
            className: "info",
            duration: 100000,
            stopOnFocus: true,
            position: "right",
            gravity: "top", 
            newWindow: true,
          }).showToast();
    }
};
divBoton = document.createElement("div");
divBoton.innerHTML = `<button type="button" id=13>Vaciar carrito</button><button type="button" id=14>Comprar carrito</button>`;
main.appendChild(divBoton)

const carritoLocal = obtenerValor("carrito");
if (carritoLocal != null) {
    carritoLocal.forEach(element => {
        carrito.push(element)
    });
}


for (let index = 0; index < carrito.length; index++) {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${carrito[index].nombre}</h3> <p> el precio del producto es ${carrito[index].precio} </p>`
    sectionCarrito.appendChild(div);
    main.appendChild(divBoton);
}

let botonVaciar = document.getElementById("13");
let botonComprar = document.getElementById("14");
botonVaciar.onclick = () => {
    Swal.fire({
        title: 'estas seguro?',
        text: "no vas a poder revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'borrado!',
                'tu carrito a sido borrado',
                'success'
            )
        }
        let divs = document.querySelectorAll("#sectionCarrito div");
        for (let index = 0; index < carrito.length; index++) {
            divs[index].remove();
        }
        localStorage.removeItem("carrito");
        carrito.splice(0);
    })

}
botonComprar.onclick = () => {
    if (carrito.length <= 0) {
        Swal.fire({
            title: 'Error!',
            text: 'El carrito esta vacio',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        })
    } else {
        let divs = document.querySelectorAll("#sectionCarrito div");
        for (let index = 0; index < carrito.length; index++) {
            divs[index].remove();
        }
        Swal.fire({
            title: 'Bien',
            text: 'Su compra se realizo con exito',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })
        localStorage.removeItem("carrito")
        carrito.splice(0)

    }

}