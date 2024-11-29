// let dia = "lunes";

// if (dia === "lunes") {
//     console.log("Hoy es lunes, empieza la semana con energía.");
// } else if (dia === "martes") {
//     console.log("Hoy es martes, sigue adelante.");
// } else if (dia === "miércoles") {
//     console.log("Hoy es miércoles, mitad de semana.");
// } else if (dia === "jueves") {
//     console.log("Hoy es jueves, casi es viernes.");
// } else if (dia === "viernes") {
//     console.log("Hoy es viernes, el fin de semana está cerca.");
// } else if (dia === "sábado") {
//     console.log("Hoy es sábado, disfruta tu día.");
// } else if (dia === "domingo") {
//     console.log("Hoy es domingo, día de descanso.");
// } else {
//     console.log("Día no válido.");
// }



// let dia = "lunes";

// switch (dia.toLowerCase()) {
//     case "lunes":
//     case "miércoles":
//     case "viernes":
//         console.log("Tenés clases.");
//         break;
//     default:
//         console.log("No tenés clases.");
// }



const prompt = require('prompt-sync')();

let calificación = prompt("¿Cómo calificarías la película? (Muy mala, Mala, Mediocre, Buena, Muy buena): ").toLowerCase();

switch (calificación) {
    case "muy mala":
        console.log("Calificaste la película como Muy Mala, lo lamentamos mucho.");
        break;
    case "mala":
        console.log("Calificaste la película como Mala, lamentamos que no haya sido de tu agrado.");
        break;
    case "mediocre":
        console.log("Calificaste la película como Mediocre, gracias por tu honestidad.");
        break;
    case "buena":
        console.log("Calificaste la película como Buena, ¡Nos alegra que te haya gustado!");
        break;
    case "muy buena":
        console.log("Calificaste la película como Muy Buena, ¡Nos alegra mucho que la hayas disfrutado!");
        break;
    default:
        console.log("Ingresaste un valor inválido.");
}

console.log("Gracias por tu visita.");