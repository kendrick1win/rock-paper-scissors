console.log("Hello World")

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
  
function getComputerChoice(){
    let result = getRandomInt();
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    if(result == 0){
        return rock
    }
    else if(result == 1){
        return paper
    }
    else if(result == 2){
        return scissors
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock Paper or Scissors?");
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let errorMessage = "You must enter a valid word";
    if (humanChoice.toLowerCase() == "rock"){
        return rock;
    }
    else if (humanChoice.toLowerCase() == "paper"){
        return paper;
    }
    else if (humanChoice.toLowerCase() == "scissors"){
        return scissors;
    }
    else{
        return errorMessage;
    }
}

let humanScore = 0;
let computerScore = 0;