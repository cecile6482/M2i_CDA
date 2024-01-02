let n = Number(prompt("Saisir un nombre entier :"));
let nbPremier;

console.log(`Les nombres premiers inférieurs à ${n} sont :`);


for (let i = 2; i < n; i++) {
    // Supposer que le nombre est premier jusqu'à preuve du contraire
    nbPremier = true;

    // Un nombre n'est pas premier s'il est divisible par un autre nombre que 1 et lui-même
    // On ne doit vérifier que jusqu'à la racine carrée du nombre
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            nbPremier = false;
            break; // Si le nombre est divisible, ce n'est pas un nombre premier
        }
    }

    if (nbPremier) {
        console.log(i);
    }
}

