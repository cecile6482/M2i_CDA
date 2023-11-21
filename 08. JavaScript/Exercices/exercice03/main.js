// Demander le rayon et la hauteur
let rayon = Number(prompt("Entrez le rayon du cône :"));
let hauteur = Number(prompt("Entrez la hauteur du cône :"));

// Calculer le volume
let volume = (1/3) * Math.PI * rayon * rayon * hauteur;

// Afficher le résultat
console.log("Le volume du cône est : " + volume.toFixed(2));
alert("Le volume du cône est : " + volume.toFixed(2));
