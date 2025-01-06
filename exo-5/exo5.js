const input = "Turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

function isVowel(letter) {
  let found = false;
  for (let j = 0; j < vowels.length; j++) {
    if (letter.toLowerCase() === vowels[j]) {
      found = true;
      break;
    }
  }
  return found;
}

for (let i = 0; i < input.length; i++) {
  console.log("Lettre courante:", input[i]);

  /* if (vowels.indexOf(input[i].toLowerCase()) !== -1) {
        resultArray.push(input[i]);
    }*/

  if (isVowel(input[i])) {
    resultArray.push(input[i]);
  }
}

console.log("Voyelles trouvées:", resultArray);

const whaleTranslation = resultArray.join("").toUpperCase();

console.log("\nPhrase originale:", input);
console.log("Traduction en langue des baleines:", whaleTranslation);
