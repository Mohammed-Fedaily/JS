// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ["Clio", "Van"],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log("Nombre de voitures de Joe:", joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("Nouveau nombre de salles de bain:", joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;
console.log("Joe a maintenant un garage:", joeInfo.garage);

const team = {
  players: [],
  games: [],

  addPlayer: function (firstName, lastName, age) {
    this.players.push({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
    console.log(`Joueur ajouté : ${firstName} ${lastName}`);
  },

  addGame: function (opponent, teamPoints, opponentPoints) {
    this.games.push({
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    });
    console.log(`Match ajouté contre ${opponent}`);
  },

  getTotalPoints: function () {
    return this.games.reduce((total, game) => total + game.teamPoints, 0);
  },

  getAverageOpponentPoints: function () {
    if (this.games.length === 0) return 0;
    const totalOpponentPoints = this.games.reduce(
      (total, game) => total + game.opponentPoints,
      0
    );
    return totalOpponentPoints / this.games.length;
  },

  getOldestPlayer: function () {
    if (this.players.length === 0) return null;
    return this.players.reduce((oldest, player) =>
      player.age > oldest.age ? player : oldest
    );
  },
  sortPlayersByName() {
    return this.players.sort(
      (a, b) =>
        a.lastName.localeCompare(b.lastName) ||
        a.firstName.localeCompare(b.firstName)
    );
  },
};

team.addPlayer("Pablo", "Sanchez", 11);
team.addPlayer("Dodo", "Momo", 15);
team.addPlayer("Nono", "Koko", 13);

team.addGame("Broncos", 42, 27);
team.addGame("Eagles", 35, 28);
team.addGame("Ravens", 21, 17);

const totalPoints = team.getTotalPoints();
console.log("Total des points:", totalPoints);

const averagePoints = team.getAverageOpponentPoints();
console.log("Moyenne des points adverses:", averagePoints);

const oldest = team.getOldestPlayer();
console.log(
  "Joueur le plus âgé:",
  oldest ? `${oldest.firstName} ${oldest.lastName}` : "Aucun joueur"
);

console.log("Joueurs triés:", team.sortPlayersByName());
