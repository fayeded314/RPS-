//!create a function named getComputerChoice that will randomly return either rock, paper, or scissors 
//Write a function that plays a single round between human choice and random computer choice, then have it return a string like "paper beat rock you win"
//Make sure the human input isnt case senstive so they can enter say rOck for example
//Remember to return results not console log them unless you need to test to see if they're working
//create a new function game(). Use the previous function to create a 5 round game that keeps socre and reports a winner/loser
//At this point you should be using console.log() to display the results of each round and the winner at the end.

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3);
    const RPS = ["Rock", "Paper", "Scissors"];
    return RPS[randomChoice];
}

const randomChoice = getComputerChoice();
console.log(randomChoice)

function playerVsComputer(){
    
    
    const numStr = prompt("Rock,Paper,or Scissors?");
    const num = parseInt(numStr);
    const playerWins = "You've Won!";
    const playerLoses = "You've Lost!";
}