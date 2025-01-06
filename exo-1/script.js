// Demande la température en Kelvins à l'utilisateur
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

// Pour convertir de Kelvins en Celsius, on soustrait 273
let celsius = kelvins - 273;

// La formule est : Fahrenheit = Celsius * (9/5) + 32
let fahrenheits = celsius * (9 / 5) + 32;

// Utilisation de Math.floor() pour supprimer les décimales
fahrenheits = Math.floor(fahrenheits);

// Affichage des résultats
console.log("La température est de " + kelvins + " Kelvins");
console.log("La température est de " + celsius + " degrés Celsius");
console.log("La température est de " + fahrenheits + " degrés Fahrenheit");
