function getPlayerChoice(playerInput) {
  playerInput = playerInput.toLowerCase();

  if (
    playerInput === "rock" ||
    playerInput === "paper" ||
    playerInput === "scissors" ||
    playerInput === "bomb"
  ) {
    return playerInput;
  } else {
    console.log("Erreur : Veuillez entrer 'rock', 'paper', ou 'scissors'");
    return null;
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === "bomb") {
    return "Won";
  }

  if (playerChoice === computerChoice) {
    return "Tied";
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "Won";
    } else {
      return "Lost";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "Won";
    } else {
      return "Lost";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "Won";
    } else {
      return "Lost";
    }
  }
}

function playGame() {
  const playerInput = prompt("Your choice (rock, paper, scissors) ?");
  const uChoice = getPlayerChoice(playerInput);

  if (uChoice === null) {
    return;
  }

  const computerChoice = getComputerChoice();

  console.log("Votre choix : " + uChoice);
  console.log("Choix de l'ordinateur : " + computerChoice);

  console.log("Résultat : " + findWinner(uChoice, computerChoice));
}

playGame();
