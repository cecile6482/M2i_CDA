let temp = Number(prompt("Entrez la température de l'eau :"));
let etat;

if (temp < 0) {
    etat = "SOLIDE";
} else if (temp <= 100) {
    etat = "LIQUIDE";
} else {
    etat = "GAZEUX";
}

console.log("L'état de l'eau est : " + etat);
alert("L'état de l'eau est : " + etat);
