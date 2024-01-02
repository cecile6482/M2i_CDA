let epaisseurFeuille = 0.1; // épaisseur initiale en millimètres
let epaisseurCible = 400 * 1000; // conversion de 400 mètres en millimètres
let nombreDePlis = 0;

// Calculer le nombre de plis nécessaires pour dépasser l'épaisseur cible
while (epaisseurFeuille < epaisseurCible) {
    epaisseurFeuille *= 2; // Chaque pli double l'épaisseur
    nombreDePlis++;
}

console.log(`Il faut plier la feuille au minimum ${nombreDePlis} fois pour que l'épaisseur dépasse 400 mètres.`);

// Problème inverse :
let epaisseurInitiale = 400 * 1000; // épaisseur initiale en millimètres
let epaisseurFinale = 0.1; // épaisseur cible en millimètres
let nombreDeDéplis = 0;

// Calculer le nombre de déplis nécessaires pour atteindre l'épaisseur cible
while (epaisseurInitiale > epaisseurFinale) {
    epaisseurInitiale /= 2; // Chaque dépli divise l'épaisseur par deux
    nombreDeDéplis++;
}

console.log(`Il faut déplier la feuille au minimum ${nombreDeDéplis} fois pour que l'épaisseur dépasse 0.1 mm.`);

