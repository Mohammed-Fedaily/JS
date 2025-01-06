let secretMessage = [
  "Learning",
  "isn't",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it's",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Afficher le tableau initial
console.log("Message initial :");
console.log(secretMessage.join(" "));

// 1. Enlever le dernier élément
secretMessage.pop();
console.log("\nAprès suppression du dernier élément :");
console.log(secretMessage.join(" "));

// 2. Ajouter 'to' et 'program' à la fin
secretMessage.push("to", "program");
console.log("\nAprès ajout de 'to' et 'program' :");
console.log(secretMessage.join(" "));

// 3. Remplacer 'easily' par 'right'
const easilyIndex = secretMessage.indexOf("easily");
secretMessage[easilyIndex] = "right";
console.log("\nAprès remplacement de 'easily' par 'right' :");
console.log(secretMessage.join(" "));

// 4. Supprimer le premier élément
secretMessage.shift();
console.log("\nAprès suppression du premier élément :");
console.log(secretMessage.join(" "));

// 5. Ajouter 'Programming' au début
secretMessage.unshift("Programming");
console.log("\nAprès ajout de 'Programming' au début :");
console.log(secretMessage.join(" "));

// 6. Remplacer 5 mots par 'know'
const getIndex = secretMessage.indexOf("get");
secretMessage.splice(getIndex, 5, "know");
console.log("\nAprès remplacement des 5 mots par 'know' :");
console.log(secretMessage.join(" "));

// 7. Afficher le message final
console.log("\nMessage secret final :");
console.log(secretMessage.join(" "));
