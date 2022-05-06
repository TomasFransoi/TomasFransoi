let SiNo = " ";
let precio = 0;
let cantidadDeProductos = 0;
let producto = " ";
while (SiNo.toUpperCase() != "SI"){
let numeroDeProducto =parseInt(prompt("seleccione el numero de un producto \n 1-Calcos fantasia \n 2-Calcos personalizadas \n 3-Calcos para motos \n 4-Calcos para baterias \n 5-Calcos para lanchas \n 6-Bolso porta celular \n 7-Bolso bajo asiento \n 8-Cubre vaina \n 9-Pines para rayos \n 10-Protectores anti ralladura \n 11-Fundas fantasia \n 12-Fundas mtb"));
if(numeroDeProducto > 12){
do {
    numeroDeProducto =parseInt(prompt("seleccione el numero de un producto correctamente porfavor \n 1-Calcos fantasia \n 2-Calcos personalizadas \n 3-Calcos para motos \n 4-Calcos para baterias \n 5-Calcos para lanchas \n 6-Bolsos porta celular \n 7-Bolso bajo asiento \n 8-Cubre vaina \n 9-Pines para rayos \n 10-Protectores anti ralladura \n 11-Fundas fantasia \n 12-Fundas mtb"));
} while (numeroDeProducto > 12);
}
switch (numeroDeProducto) {
    case 1:
        producto = "Calcos fantasia";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 150;
        alert("El precio seria de " + precio + " pesos");
        break;
    case 2:
        producto = "Calcos personalizadas";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 200;
        alert("El precio seria de " + precio + " pesos");
        break;
    case 3:
        producto = "Calcos para motos";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 140;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 4:
        producto = "Calcos para baterias";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 130;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 5:
        producto = "Calcos para lanchas";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 10450;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 6:
        producto = "Bolsos porta celular";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 660;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 7:
        producto = "Bolso bajo asiento";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 550;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 8:
        producto = "Cubre vaina";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 250;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 9:
        producto = "Pines para rayos";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 280;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 10:
        producto = "Protectores anti ralladura";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 300;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 11:
        producto = "Fundas fantasia";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 280;
        alert("El precio seria de " + precio + " pesos");
    break;
    case 12:
        producto = "Fundas mtb";
        alert("usted a seleccionado el producto " + producto);
        cantidadDeProductos = prompt("cuantos productos quiere");
        precio = cantidadDeProductos * 650;
        alert("El precio seria de " + precio + " pesos");
    break;
}
SiNo = prompt("Es correcta esta compra de " + cantidadDeProductos + " " + producto + " por " + precio + " (responda porfavor con un si o no)");
}
alert("Su compra de " + cantidadDeProductos + " " + producto + " por " + precio + " pesos a sido confirmada \n Su pedido llegara a su casa en 15 dias");