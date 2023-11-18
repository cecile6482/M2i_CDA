let nb1, nb2, resultat;

function calculer() {
    nb1 = Number(prompt("Premier nombre : ")); 
    nb2 = Number(prompt("Deuxieme nombre : "));

    resultat = nb1 + nb2;

    console.log(resultat);
    alert("L'addition de " + nb1 + " + " + nb2 + " = " + resultat);
}

document.getElementById('startButton').addEventListener('click', calculer);
