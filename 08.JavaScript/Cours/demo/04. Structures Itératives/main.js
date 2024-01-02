// Demo de while 
// let nombre = 0;

// while (nombre < 3) {
//     console.log(nombre);
//     nombre++;
// }

// Demo de do while
// nombre = 0;

// do {
//     console.log(nombre);
//     nombre++;
// } while (nombre < 3);

// Demo de for
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// Exemple : le nombre mystère
// let random = Math.floor(Math.random() * 10);

// console.log(random);

// let reponse;

// do {
//     reponse = Number(prompt("Quel est le nombre mystère entre 1 et 10 ?"));
// } while (reponse != random);


// Demo de break

let nombre = 0;

while (nombre < 10) {
    nombre++;

    if (nombre === 4) {
        console.log("QUATRE => boucle suivante")
        continue;
    }

    if (nombre === 7) {
        console.log("SEPT => je casse la boucle")
        break;
    }

    console.log(nombre);
}

console.log("Après la boucle");