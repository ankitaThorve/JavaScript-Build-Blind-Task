const choices = ["rock", "paper", "scissor"];

const playerChoice = "rock";
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Player's choice: ${playerChoice}`);
console.log(`Computer's choice: ${computerChoice}`);

if (playerChoice === computerChoice) {
  console.log("It's a tie!");
} else if (
  (playerChoice === "rock" && computerChoice === "scissor") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissor" && computerChoice === "paper")
) {
  console.log("You win!!!");
} else {
  console.log("Computer wins!");
}
