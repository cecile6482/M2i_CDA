let temp = Number(prompt("Entrez la température de l'eau :"));
let etat = temp < 0 ? "SOLIDE" : temp <= 100 ? "LIQUIDE" : "GAZEUX";

console.log("L'état de l'eau est : " + etat);
alert("L'état de l'eau est : " + etat);
