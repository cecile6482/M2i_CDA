// Demander à l'utilisateur d'entrer les données nécessaires
let populationInitiale = Number(prompt("Saisir la population initiale :"));
let tauxAccroissement = Number(prompt("Saisir le taux d'accroissement (%) :")) / 100; // Convertir le pourcentage en décimal
let populationVisee = Number(prompt("Saisir la population visée :"));

let populationActuelle = populationInitiale;
let annee = 0;

// Calculer combien de temps il faudra pour atteindre la population visée
while (populationActuelle < populationVisee) {
    populationActuelle += populationActuelle * tauxAccroissement;
    annee++;
}

console.log(`La population dépasse la population visée à l'année ${annee} (${Math.round(populationActuelle)} habitants)`);
