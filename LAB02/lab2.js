const prompt = require("prompt");

prompt.start();

prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error("Error getting input:", err);
    return;
  }

  // Normalize user input (case-insensitive)
  const userSelection = result.userSelection.trim().toUpperCase();

  // Generate computer selection
  const random = Math.random();
  let computerSelection = "";

  if (random <= 0.34) {
    computerSelection = "PAPER";
  } else if (random <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  
  console.log(`\nUser chose: ${userSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  // Decide winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else if (
    userSelection === "ROCK" ||
    userSelection === "PAPER" ||
    userSelection === "SCISSORS"
  ) {
    console.log("Computer Wins!");
  } else {
    console.log("Invalid input! Please choose ROCK, PAPER, or SCISSORS.");
  }
});
