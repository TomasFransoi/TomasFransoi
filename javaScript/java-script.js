//funciones
function guardarEnLocal(key, valor) {
    localStorage.setItem(key, JSON.stringify(valor))
}

function obtenerValor(key) {
    let info = JSON.parse(localStorage.getItem(key));
    return (info)
}

const eliminadorDivs = (array) => {
    for (let index = 0; index < array.length; index++) {
        array[index].remove();
    }
}
const renderProductos = (array) => {
    let idCalculator = 1
    for (const elements of array) {

        let div = document.createElement("div");
        div.innerHTML = `<h3>${elements.nombre}</h3> <p> el precio del producto es ${elements.precio} </p> \n <button type="button" id=${idCalculator} >agregar al carrito</button>`;
        sectionContenedor.appendChild(div);

        idCalculator++
    }
}
//declaracion de variables globales
const sectionCarrito = document.getElementById("sectionCarrito");
const sectionContenedor = document.getElementById("sectionProductos");
const main = document.getElementById("main")
const carrito = obtenerValor("carrito") || [];
let precioTotal = 0;
const precioTotalDiv = document.createElement(`div`)
//extracion de obtencion de productos de api local
fetch('../javaScript/productos.json')
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        carrito.forEach(element => {
            precioTotal = precioTotal + element.precio * element.cantidad
        });
        precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
        //render de productos
        main.appendChild(precioTotalDiv);
        renderProductos(data);
        let sumarRestar = 15
        const productosDivs = document.querySelectorAll("#sectionProductos div")
        const botonesAgregar = document.querySelectorAll("#sectionProductos button");
        // botones para agregar productos al carrito
        for (const boton of botonesAgregar) {
            boton.onclick = (e) => {

                const productoSeleccionado = data.find((item) => item.id == e.target.id);
                productosDivs[e.target.id - 1].remove();
                console.log(productoSeleccionado)
                carrito.push(productoSeleccionado);
                guardarEnLocal("carrito", carrito);
                let div = document.createElement(`div`);
                div.innerHTML = `<h3>${productoSeleccionado.nombre}</h3> <p> el precio por unidad del producto es ${productoSeleccionado.precio} </p><p> la cantidad seleccionada es de ${productoSeleccionado.cantidad}</p><p> el precio es de ${productoSeleccionado.cantidad*productoSeleccionado.precio}</p>`
                sectionCarrito.appendChild(div);
                let botonSumRes = document.createElement(`div`);
                botonSumRes.innerHTML = `<button type="button" id=${sumarRestar} >Mas 1</button><button type="button" id=${sumarRestar + 1} >menos 1</button>`
                precioTotal = 0;
                carrito.forEach(element => {
                    precioTotal = precioTotal + element.precio * element.cantidad
                });
                precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
                main.appendChild(precioTotalDiv);
                sectionCarrito.appendChild(botonSumRes);
                const sumar = document.getElementById(`${sumarRestar}`);
                const restar = document.getElementById(`${sumarRestar + 1}`);
                // boton para aumentar cantidad del producto seleccionado
                sumar.onclick = () => {
                    productoSeleccionado.cantidad++
                    div.innerHTML = `<h3>${productoSeleccionado.nombre}</h3> <p> el precio por unidad del producto es ${productoSeleccionado.precio} </p><p> la cantidad seleccionada es de ${productoSeleccionado.cantidad}</p><p> el precio es de ${productoSeleccionado.cantidad*productoSeleccionado.precio}</p>`
                    guardarEnLocal("carrito", carrito);
                    precioTotal = 0;
                    carrito.forEach(element => {
                        precioTotal = precioTotal + element.precio * element.cantidad
                    });
                    precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
                    main.appendChild(precioTotalDiv);
                }
                // boton para disminuir cantidad del producto seleccionado
                restar.onclick = () => {

                    if (productoSeleccionado.cantidad == 0) {
                        Toastify({
                            text: "no podes tener menos cantidad",
                            className: "info",
                            duration: 1000,
                            stopOnFocus: true,
                            position: "right",
                            gravity: "top",
                            newWindow: true,
                        }).showToast();
                    } else {
                        productoSeleccionado.cantidad--
                        div.innerHTML = `<h3>${productoSeleccionado.nombre}</h3> <p> el precio por unidad del producto es ${productoSeleccionado.precio} </p><p> la cantidad seleccionada es de ${productoSeleccionado.cantidad}</p><p> el precio es de ${productoSeleccionado.cantidad*productoSeleccionado.precio}</p>`
                    }
                    guardarEnLocal("carrito", carrito);
                    precioTotal = 0;
                    carrito.forEach(element => {
                        precioTotal = precioTotal + element.precio * element.cantidad
                    });
                    precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
                    main.appendChild(precioTotalDiv);
                }

                sumarRestar = sumarRestar + 2
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
        divBoton = document.createElement("div");
        divBoton.innerHTML = `<button type="button" id=13>Vaciar carrito</button><button type="button" id=14>Comprar carrito</button>`;
        main.appendChild(divBoton);
        //boton para vaciar el carrito
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
                localStorage.removeItem("carrito");
                carrito.splice(0);
                precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
                main.appendChild(precioTotalDiv);
                eliminadorDivs(divs);
                eliminadorDivs(productosDivs)
                renderProductos(data);
            })

        }
        //boton para comprar el carrito
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
                Swal.fire({
                    title: 'Bien',
                    text: 'Su compra se realizo con exito',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
                localStorage.removeItem("carrito")
                carrito.splice(0)
                precioTotal = 0;
                precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
                main.appendChild(precioTotalDiv);
                eliminadorDivs(divs);
                eliminadorDivs(productosDivs)
                renderProductos(data);
            }

        }
    });
console.log(productos)


// obtencion y render de datos del carrito desde el almacenamiento local
let sumarRestar = 15
for (let index = 0; index < carrito.length; index++) {
    const carrito = obtenerValor("carrito")
    let div = document.createElement(`div`);
    div.innerHTML = `<h3>${carrito[index].nombre}</h3> <p> el precio por unidad del producto es ${carrito[index].precio} </p><p> la cantidad seleccionada es de ${carrito[index].cantidad}</p><p> la cantidad todal es de ${carrito[index].cantidad*carrito[index].precio}</p>`
    sectionCarrito.appendChild(div);
    let botonSumRes = document.createElement(`div`);
    botonSumRes.innerHTML = `<button type="button" id=${sumarRestar} >Mas 1</button><button type="button" id=${sumarRestar + 1} >menos 1</button>`
    precioTotal = 0;
    carrito.forEach(element => {
        precioTotal = precioTotal + element.precio * element.cantidad
    });
    precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
    main.appendChild(precioTotalDiv);
    sectionCarrito.appendChild(botonSumRes);

    const sumar = document.getElementById(`${sumarRestar}`);
    const restar = document.getElementById(`${sumarRestar + 1}`);
    //boton para aumentar cantidad de producto
    sumar.onclick = () => {
        carrito[index].cantidad++
        div.innerHTML = `<h3>${carrito[index].nombre}</h3> <p> el precio por unidad del producto es ${carrito[index].precio} </p> <p>la cantidad seleccionada es de ${carrito[index].cantidad}</p><p> el precio es de ${carrito[index].cantidad*carrito[index].precio}</p>`
        guardarEnLocal("carrito", carrito);
        precioTotal = 0;
        carrito.forEach(element => {
            precioTotal = precioTotal + element.precio * element.cantidad
        });
        precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
        main.appendChild(precioTotalDiv);
    }
    //boton para disminuir cantidad de producto
    restar.onclick = () => {

        if (carrito[index].cantidad == 0) {
            Toastify({
                text: "no podes tener menos cantidad",
                className: "info",
                duration: 1000,
                stopOnFocus: true,
                position: "right",
                gravity: "top",
                newWindow: true,
            }).showToast();
        } else {
            carrito[index].cantidad--
            div.innerHTML = `<h3>${carrito[index].nombre}</h3> <p> el precio por unidad del producto es ${carrito[index].precio} </p> <p>la cantidad seleccionada es de ${carrito[index].cantidad}</p><p> el precio es de ${carrito[index].cantidad*carrito[index].precio}</p>`

        }
        guardarEnLocal("carrito", carrito);
        precioTotal = 0;
        carrito.forEach(element => {
            precioTotal = precioTotal + element.precio * element.cantidad
        });
        precioTotalDiv.innerHTML = `<p>El precio total de su compra es de ${precioTotal}</p>`
        main.appendChild(precioTotalDiv);
    }

    sumarRestar = sumarRestar + 2
}