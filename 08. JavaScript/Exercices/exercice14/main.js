function completeName(prenom, nom) {
    let prenomCapitalise = prenom.charAt(0).toUpperCase() + prenom.substr(1).toLowerCase();
    let nomCapitalise = nom.charAt(0).toUpperCase() + nom.substr(1).toLowerCase();

    return prenomCapitalise + " " + nomCapitalise;
}

let result = completeName("john", "doe");
console.log(result); 
