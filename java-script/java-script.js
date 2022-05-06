function productos ( nombre , precioDelProducto ) {
    producto = nombre;
    alert("usted a seleccionado el producto " + producto);
    cantidadDeProductos = prompt("cuantos productos quiere");
    precio = cantidadDeProductos * precioDelProducto;
    alert("El precio seria de " + precio + " pesos");
    return cantidadDeProductos;
    return precio;
}
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
        productos( "Calcos fantasia" , 150);
    break
    case 2:
        productos( "Calcos personalizadas" , 200);
    break;
    case 3:
        productos( "Calcos para motos" , 140);
    break;
    case 4:
        productos( "Calcos para baterias" , 130);
    break;
    case 5:
        productos( "Calcos para lanchas" , 10450);
    break;
    case 6:
        productos( "Bolsos porta celular" , 660);
    break;
    case 7:
        productos( "Bolso bajo asiento" , 550);
    break;
    case 8:
        productos( "Cubre vaina" , 250);
    break;
    case 9:
        productos( "Pines para rayos" , 280);
    break;
    case 10:
        productos( "Protectores anti ralladura" , 300);
    break;
    case 11:
        productos( "Fundas fantasia" , 280);
    break;
    case 12:
        productos( "Fundas mtb" , 650);
    break;
}
SiNo = prompt("Es correcta esta compra de " + cantidadDeProductos + " " + producto + " por " + precio + " (responda porfavor con un si o no)");
}
alert("Su compra de " + cantidadDeProductos + " " + producto + " por " + precio + " pesos a sido confirmada \n Su pedido llegara a su casa en 15 dias");