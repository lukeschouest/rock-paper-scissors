function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let input = prompt("Enter rock paper or scissors");
  let humanChoice = input.toLowerCase();
  return humanChoice;
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  function playRound(humanChoice, computerChoice) {
    // human rock choice outcomes
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("You picked rock and the computer picked rock: Its a Tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You picked rock and the computer picked paper: You Lose!");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You picked rock and the computer picked scissors: You Won!");
      humanScore++;
      // human paper choice outcomes
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log(
        "You picked paper and the computer picked paper: It's a Tie!",
      );
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(
        "You picked paper and the computer picked scissors: You Lose!",
      );
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You picked paper and the computer picked rock: You Won!");
      humanScore++;
      // human scissors choice outcomes
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log(
        "You picked scissors and the computer picked scissors: It's a Tie",
      );
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(
        "You picked scissors and the computer picked rock: You Lose!",
      );
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(
        "You picked scissors and the computer picked paper: You Won!",
      );
      humanScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    console.log(
      "computer score is " + computerScore + " your score is " + humanScore,
    );
  }
  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a Tie!");
  }
}

playGame();
