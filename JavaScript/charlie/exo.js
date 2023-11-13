// ## Exercice : Calculateur de Pourboire

// ### Objectif :
// Écrivez une fonction JavaScript qui calcule le montant du pourboire à laisser dans un restaurant en fonction du montant total de la facture et du pourcentage de service souhaité.

// ### Spécifications :

// 1. La fonction doit s'appeler calculPourboire.
// 2. La fonction prend deux arguments :
// montantFacture : un nombre représentant le montant total de la facture.
// pourcentagePourboire : un nombre représentant le pourcentage du pourboire (par exemple, 20 pour 20%).
// 3. La fonction doit retourner le montant du pourboire.
// 4. Affichez le résultat dans la console sous la forme : "Le pourboire est de XX.XX euros pour une facture de YY.YY euros."
// 5. Assurez-vous que le montant du pourboire est arrondi à deux décimales.

// ### Bonus :

// Validez que les arguments passés à la fonction sont des nombres et qu'ils sont positifs. Si ce n'est pas le cas, la fonction doit afficher un message d'erreur dans la console.

// Solution :

function calculPourboire(montantFacture, pourcentagePourboire) {
    if (
        typeof montantFacture !== "number" ||
        typeof pourcentagePourboire !== "number" ||
        montantFacture < 0 ||
        pourcentagePourboire < 0
    ) {
        console.log("Les arguments doivent être des nombres positifs.");
    } else {
        const pourboire = montantFacture * (pourcentagePourboire / 100);
        console.log(
        `Le pourboire est de ${pourboire.toFixed(
            2
        )} euros pour une facture de ${montantFacture.toFixed(2)} euros.`
        );
    }
    }

