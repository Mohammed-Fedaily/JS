const isTesting = true;

const weekMessage = "Pas encore le weekend... Courage !";
const weekendMessage = "C'est le weekend ! 🎉🎉🎉🎉";

const myDate = new Date();

let currentDay;
let currentHour;

if (isTesting) {
  currentDay = parseInt(
    prompt("Entrez le jour de la semaine (0-6, 0 = Dimanche)")
  );
  currentHour = parseInt(prompt("Entrez l'heure (0-23)"));
} else {
  currentDay = myDate.getDay();
  currentHour = myDate.getHours();
}

function isWeekend() {
  if (currentDay === 0 || currentDay === 6) {
    return true;
  }

  if (currentDay === 5 && currentHour >= 17) {
    return true;
  }

  if (currentDay === 1 && currentHour < 9) {
    return true;
  }

  return false;
}

if (isWeekend()) {
  console.log(weekendMessage);
} else {
  console.log(weekMessage);
}

if (isTesting) {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  console.log(`Mode test activé`);
  console.log(`Jour : ${days[currentDay]}`);
  console.log(`Heure : ${currentHour}h`);
}
