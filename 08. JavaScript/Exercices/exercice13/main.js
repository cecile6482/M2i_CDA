let n = Number(prompt("Saisir un nombre entier :"));

console.log(`Les sommes consécutives de ${n} sont :`);

// Parcourir toutes les séquences possibles d'entiers consécutifs
for (let i = 1; i < n; i++) { // i = point de départ de la séquence
    let somme = 0;
    let sequence = [];

    // Tester les séquences d'entiers consécutifs à partir du point de départ
    for (let j = i; somme < n; j++) {
        somme += j;
        sequence.push(j);

        // Si la somme des entiers consécutifs est égale à n, afficher la séquence
        if (somme === n) {
            console.log(`\t${n} = ${sequence.join('+')}`);
            break; 
        }
    }
}
