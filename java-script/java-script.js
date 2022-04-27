let Alumnos = parseInt(prompt("ingrese cantidad de alumnos"));
let CantidadNotas = parseInt(prompt("ingrese cantidad de notas"));
let PromedioCurso = 0;
let NumeroDeAlumno = 1;
for (let i = 0; i < Alumnos; i = i + 1) {
    let NotaFinal = 0;
    for (let j = 0; j < CantidadNotas; j = j + 1) {
        let nota = parseFloat(prompt("ingrese la nota del alumno " + NumeroDeAlumno + "(solo calificaciones del 1 al 10)"));
        if (nota > 10) {
            while (nota > 10){
                nota = parseFloat(prompt("ingrese correctamente la nota del alumno " + NumeroDeAlumno + "(solo calificaciones del 1 al 10)"));
            }
        }
        NotaFinal = NotaFinal + nota;
    }
    let Promedio = NotaFinal;
    Promedio = Promedio / CantidadNotas;
    console.log(Promedio);
    alert("el promedio del alumno numero " + NumeroDeAlumno + " es " + Promedio);
    if (Promedio < 5.5) {
        console.log("desaprobado");
        alert("desaprobado");
    } else if (Promedio >= 5.5 && Promedio <= 7.5) {
        console.log("bueno");
        alert("bueno");
    } else if (Promedio >= 7.5 && Promedio <= 9.5) {
        console.log("muy bueno");
        alert("muy bueno");
    } else {
        console.log("Exelente");
        alert("Exelente");
    }
    PromedioCurso = PromedioCurso + Promedio;
    NumeroDeAlumno = NumeroDeAlumno + 1;
}
PromedioCurso = PromedioCurso / Alumnos;
console.log(PromedioCurso);
if (PromedioCurso < 5.5) {
    console.log("desempreño del curso deficiente");
    alert("desempreño del curso deficiente");
} else if (PromedioCurso >= 5.5 && PromedioCurso <= 7) {
    console.log("desempreño del curso bueno");
    alert("desempreño del curso bueno");
} else if (PromedioCurso >= 7.5 && PromedioCurso <= 9) {
    console.log("desempreño del curso muy bueno");
    alert("desempreño del curso muy bueno");
} else {
    console.log("desempreño del curso Exelente");
    alert("desempreño del curso Exelente");
}