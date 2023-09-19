//Make sure this is built being displayed with console.log() speifically for this project
//!create a function named getComputerChoice that will randomly return either rock, paper, or scissors 
//!Write a function that plays a single round between human choice and random computer choice, then have it return a string like "paper beat rock you win"
//!Make sure the human input isnt case senstive so they can enter say rOck for example
//create a new function game(). Use the previous function to create a 5 round game that keeps socre and reports a winner/loser



//random rps choice Prompt1
function getComputerChoice(){
  const RPS = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return RPS[randomChoice];
}




//Prompt(s) 2 & 3
const playerChoices = prompt("Rock, Paper, or Scissors?"); 
console.log(playerChoices);  //Pop-up for player input 

function playerVsComputer(){
  //Format and called the computerChoice function and consoled logged it
  const playerChoice = playerChoices.toLowerCase().charAt(0).toUpperCase() + playerChoices.toLowerCase().slice(1);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  //Rock Factor
  if (computerChoice === "Rock" && playerChoice === "Scissors"){
    console.log("Rock Beats Scissors, you lose...");
  } else if(playerChoice === "Rock" && computerChoice === "Scissors"){
    console.log("Rock Beats Scissors, you win!");
  } else if(playerChoice === "Rock" && computerChoice === "Rock"){
    console.log("It's A Tie!");
  
  //Scissors Factor
  } else if(computerChoice === "Scissors" && playerChoice === "Paper"){
    console.log("Scissors Beats Paper, you lose...");
  } else if(playerChoice === "Scissors" && computerChoice === "Paper"){
    console.log("Scissors Beats Paper, you win!");  
  } else if(playerChoice === "Scissors" && computerChoice === "Scissors"){
      console.log("It's A Tie!");
  
  //Paper Factor
  } else if(computerChoice === "Paper" && playerChoice === "Rock"){
      console.log("Paper Beats Rock, you lose...");
  } else if(playerChoice === "Paper" && computerChoice === "Rock"){
      console.log("Paper Beats Rock, you win!");
  } else if(playerChoice === "Paper" && computerChoice === "Paper"){
    console.log("It's A Tie!");
  }

}
const winnerLosser = playerVsComputer();

function game(){

}