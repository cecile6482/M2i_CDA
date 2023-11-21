let hauteur = Number(prompt("Entrez la hauteur du triangle :"));

for (let i = 1; i <= hauteur; i++) {        // i c'est le numéro de la ligne
    let espace = " ".repeat(hauteur - i);  // hauteur - i c'est le nombre d'espaces à mettre car on commence à 1 et on enlève 1 espace à chaque ligne
    let etoile = "*".repeat(i * 2 - 1);   // i * 2 - 1 c'est le nombre d'étoiles à mettre car on commence à 1 et on ajoute 2 étoiles à chaque ligne
    console.log(espace + etoile);
}

    