
let number = parseInt(prompt("Entrez le nombre maximal pour la table de multiplication :"), 10); 

let cellWidth = parseInt(prompt("Entrez la largeur de la cellule (nombre d'espaces) :"), 10);


// le séparateur et l'en-tête
let separator = '+' + ('-'.repeat(cellWidth + 2)+ '+').repeat(10); // +2 pour les espaces de chaque côté de la cellule 
let header = '|';
for (let i = 1; i <= 10; i++) { 
        header += ` ${i.toString().padEnd(cellWidth, ' ')} |`; // padEnd pour ajouter des espaces à la fin de la chaîne 
}

// Affichage de l'en-tête de la table
console.log(separator);
console.log(header);
console.log(separator);

// Construire et afficher chaque ligne de la table
for (let i = 1; i <= number; i++) { 
        let row = '|';
        for (let j = 1; j <= 10; j++) {
            let product = (i * j).toString().padEnd(cellWidth, ' '); 
            row += ` ${product} |`;
        }
        console.log(row);
        console.log(separator);
}

