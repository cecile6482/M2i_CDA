function sayHello() {      // Déclaration de la fonction
    alert('Hello everyone !'); 
}

sayHello();                // Appel de la fonction

console.log(sayHello);     // Affiche la fonction
console.log(sayHello());   // Affiche le résultat de la fonction

// 2. Fonction avec paramètres

function sayHelloTo(name) { // Déclaration de la fonction 
    alert(`Hello ${name} !`); // Utilisation de la variable name (qui est un paramètre)
}

sayHelloTo('Guillaume');         // Appel de la fonction
let rox = 'Roxane';
sayHelloTo(rox);         // Appel de la fonction où la variable rox est passée en paramètre

// 3. Fonction avec paramètres par défaut

function sayMessage(from, message) {
    alert(`${from} says : ${message}`);
}

sayMessage('Guillaume', 'Hello everyone !'); // Affiche "Guillaume says : Hello everyone !"
sayMessage('Guillaume'); // Affiche "Guillaume says : undefined"

function sayMessageWithDefault(from, message = 'Hello everyone !') {
    alert(`${from} says : ${message}`);
}

sayMessageWithDefault('Guillaume'); // Affiche "Guillaume says : Hello everyone !"