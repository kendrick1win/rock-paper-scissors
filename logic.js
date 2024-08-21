console.log("Hello World")

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
  
function getComputerChoice(){
    let result = getRandomInt();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
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
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
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
function playRound(humanChoice, computerChoice){
    let winningMessage = "You Win!";
    let losingMessage = "You Lose";
    let tieMessage = "You tied";
    let totalScore = humanScore + " " + computerScore;
    if (humanChoice === computerChoice) {
        console.log(tieMessage);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    if (humanChoice == "rock"){
        if(computerChoice == "scissors"){
            console.log(winningMessage);
            humanScore +=1;
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        }
        else{
            console.log(losingMessage)
            computerScore += 1;
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        }
    }
    if (humanChoice == "paper"){
        if(computerChoice == "rock"){
            console.log(winningMessage);
            humanScore +=1;
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        }
        else{
            console.log(losingMessage)
            computerScore += 1;
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        }
    }
    if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            console.log(winningMessage);
            humanScore +=1;
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        }
        else{
            console.log(losingMessage)
            computerScore += 1;
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        }
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);