const nombreProf = prompt("Bienvenido al Portal del Profesor/Maestro. \n Ingrese su nombre. Recuerde inspeccionar la consola para mas info");
// creo la lista del curso que contendrá alumnos!
const curso = [];
// creo el objeto Alumno
const alumno = {}
    // esto es un constructor de Alumnos
function Alumno(id, nombre, apellido, nota) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = nota;
}

do {
    opcionElegida = menu();
    switch (opcionElegida) {
        case "1":
            agregarAlumnos();
            break;
        case "2":
            verCurso();
            break;
        case "3":
            escala();
            break;
        case "4":
            promedio();
            break;
        case "5":
            alert("Gracias por su visita")
            break;
    }
} while (opcionElegida != 5);

function menu() {
    let option = prompt("Hola " + nombreProf + " ingrese una opcion : \n  1/Agregar Alumnos. \n 2/ Ver lista de Alumnos \n 3/Hacer escala de notas  \n 4/Obtener Promedio \n 5/Salir")
    while (option == 0 || option > 5) {
        option = prompt(nombreProf + " Recuerde ingresar un numero del 1 al 5. \n  1/Agregar Alumnos. \n 2/ Ver lista de Alumnos \n 3/Hacer escala de notas  \n 4/Obtener Promedio \n 5/Salir");
    }
    return option;
}

function agregarAlumnos() {
    const id = curso.length + 1;
    const nombre = prompt("Ingrese nombre del alumno");
    const apellido = prompt("Ingrese apellido del alumno");
    const nota = parseInt(prompt("Ingrese nota del alumno"));
    const alumno = new Alumno(id, nombre, apellido, nota)
    curso.push(alumno)
}

function verCurso() {
    for (let index = 0; index < curso.length; index++) {
        console.log(curso[index]);
    }
}


function escala() {
    let nota = prompt("Ingrese cual es la nota maxima, el total de puntos, para generar su escala de notas");
    let inicio = 1;
    let notaMin = (nota * (inicio - 0.5)) / 10;
    let notaMax = (nota * (inicio + 0.5)) / 10;

    for (let i = 1; i < 11; i++) {
        notaMin = (nota * (i - 0.5)) / 10;
        if (i == 1) {
            notaMin = 0;
        }
        notaMax = ((nota * (i + 0.5)) / 10) - 0.1;
        if (i == 10) {
            notaMax = nota;
        }
        console.log("La nota " + i + " es desde " + notaMin + " puntos hasta " + notaMax + " puntos ");
    }
    alert("Recuerde revisar consola para acceder a la escala. Cosulte a su programador más cercano")
}


function promedio() {

    let alumnosTotales = curso.length;
    let x = alumnosTotales;
    let notaTotal = 0;
    let notaIndividual = 0;

    for (let index = 0; index < curso.length; index++) {
        notaIndividual = curso[index].nota;
        notaTotal = (notaTotal + notaIndividual);
    }
    let promedio = (notaTotal / alumnosTotales);
    alert(" el promedio general del curso es " + promedio);
}