// Système hexadécimal
const letters = '0123456789ABCDEF'; 
let color = '#'; 

for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // 16 parce qu'il y a 16 caractères dans le système hexadécimal
}

console.log("Saisir la hauteur du sapin : %c" + 20, "color: green;");

// Dessin du sapin
for (let i = 0; i < 20; i++) { 
    let line = ''; 
    let lineStyle = []; // Tableau pour stocker les styles de chaque caractère
    for (let j = 0; j < 20 - i; j++) { // 20 - i pour que le sapin soit centré
        line += ' '; 
    }
    for (let k = 0; k < (2 * i + 1); k++) { 
        let char = Math.random() > 0.9 ? 'o' : '*'; // 10% de chance d'avoir une boule
        line += '%c' + char; // %c pour appliquer un style à un caractère
        let charColor = char == 'o' ? color : 'green'; 
        lineStyle.push(`color: ${charColor};`); // Ajouter le style du caractère au tableau
    }
    console.log(line, ...lineStyle); // ... pour étaler le tableau
}

// Tronc
let trunkHeight = 5; // La hauteur du tronc doit faire 5 lignes
let trunkWidth = 1; 
let trunkStyle = []; // Tableau pour stocker les styles de chaque caractère

for (let i = 0; i < trunkHeight; i++) {
    let line = ''; 
    for (let j = 0; j < 20 - trunkWidth / 2; j++) { // 20 - trunkWidth / 2 pour que le tronc soit centré
        line += ' '; 
    }
    for (let k = 0; k < trunkWidth; k++) {  // trunkWidth pour que le tronc soit centré
        line += '%c' + '|  |'; 
        trunkStyle.push('color: brown;'); 
    }
    console.log(line, trunkStyle); 
}
