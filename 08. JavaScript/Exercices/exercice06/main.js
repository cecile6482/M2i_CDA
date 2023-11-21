// Récupérer les informations du candidat
let age = Number(prompt("Entrez votre âge :"));
let salaire = Number(prompt("Entrez votre prétention salariale (en euros) :"));
let experience = Number(prompt("Entrez votre nombre d'années d'expérience :"));

// Vérifier les conditions
if (age < 30) {
    console.log("Refusé : L'âge minimum pour le poste est de 30 ans.");
} else if (salaire > 40000) {
    console.log("Refusé : Le salaire maximum possible est de 40 000 euros.");
} else if (experience < 5) {
    console.log("Refusé : Le nombre minimum d'années d'expérience est de 5 ans.");
} else {
    console.log("Profil valable pour la candidature.");
}
