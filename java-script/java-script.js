let alumnos = prompt("cantidad de alumnos");
for(let i = 0 ; i < alumnos ; i = i + 1){
    let nota1 =parseInt( prompt("ingrese la primera nota,del 1 al 10"));
    let nota2 =parseInt( prompt("ingrese la segunda nota,del 1 al 10"));
    let promedio = nota1+nota2;
    promedio = promedio/2;
    console.log(promedio);
    if (promedio < 6){
        console.log("desaprobado");
    }else if( promedio >= 6 && promedio <= 7){
        console.log("bueno");
    }else if( promedio >= 7 && promedio <= 8){
        console.log("muy bueno");
    }else{
        console.log("Exelente");
    }
}