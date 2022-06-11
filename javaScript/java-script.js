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
let productos = []
const sectionCarrito = document.getElementById("sectionCarrito");
const sectionContenedor = document.getElementById("sectionProductos");
const main = document.getElementById("main")
fetch('../javaScript/productos.json')
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        for (const elements of data) {
            let idCalculator = 1
            let div = document.createElement("div");
            div.innerHTML = `<h3>${elements.nombre}</h3> <p> el precio del producto es ${elements.precio} </p> \n <button type="button" id=${idCalculator} >agregar al carrito</button>`;
            sectionContenedor.appendChild(div);

            idCalculator = idCalculator + 1;
        }
        const botonesAgregar = document.querySelectorAll("#sectionProductos button");

        for (const boton of botonesAgregar) {
            boton.onclick = (e) => {
                const productoSeleccionado = data.find((item) => item.id == e.target.id);
                console.log(productoSeleccionado)
                carrito.push(productoSeleccionado);
                guardarEnLocal("carrito", carrito);
                let div = document.createElement("div");
                div.innerHTML = `<h3>${productoSeleccionado.nombre}</h3> <p> el precio del producto es ${productoSeleccionado.precio} </p>`
                sectionCarrito.appendChild(div);
                Toastify({
                    text: "Producto agregado",
                    className: "info",
                    duration: 1000,
                    stopOnFocus: true,
                    position: "right",
                    gravity: "top",
                    newWindow: true,
                }).showToast();
            }
        }
    })
console.log(productos)
const carrito = obtenerValor("carrito") || [];

divBoton = document.createElement("div");
divBoton.innerHTML = `<button type="button" id=13>Vaciar carrito</button><button type="button" id=14>Comprar carrito</button>`;
main.appendChild(divBoton)



for (let index = 0; index < carrito.length; index++) {
    const carrito = obtenerValor("carrito")
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