let N = Number(prompt("Entrez la valeur de N pour les tables de multiplication :"));

// Premier style d'affichage

console.log("Premier style d'affichage :");

for (let i = 1; i <= N; i++) {
    console.log(`Table des ${i} :`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-".repeat(20));
}

// Deuxième style d'affichage

console.log("Deuxième style d'affichage :");

// Afficher l'en-tête
let header = "    "; 
for (let i = 1; i <= 10; i++) {
    header += i.toString().padStart(4, ' '); // Chaque nombre prend 4 espaces
}
console.log(header);
console.log("-".repeat(45));

// Afficher chaque ligne de la table
for (let i = 1; i <= N; i++) {
    let line = i.toString().padStart(3, ' '); // Premier nombre de la ligne avec 3 espaces
    for (let j = 1; j <= 10; j++) {
        line += (i * j).toString().padStart(4, ' '); // Chaque résultat de multiplication prend 4 espaces
    }
    console.log(line);
}
