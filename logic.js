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
let resultDiv;
function playRound(humanChoice, computerChoice){
    let winningMessage = "You Win!";
    let losingMessage = "You Lose";
    let tieMessage = "You tied";

    if (!humanChoice) {
        resultDiv.textContent = "Invalid human choice. Round not played.";
        return;
    }

    let resultMessage; 
    if (humanChoice === computerChoice) {
        resultMessage = tieMessage;
    }
    if (humanChoice == "rock"){
        if(computerChoice == "scissors"){
            resultMessage = winningMessage;
            humanScore +=1;
        }
        else{
            resultMessage = losingMessage;
            computerScore += 1;
        }
    }
    if (humanChoice == "paper"){
        if(computerChoice == "rock"){
            resultMessage = winningMessage;
            humanScore +=1;
        }
        else{
            resultMessage = losingMessage;
            computerScore += 1;
        }
    }
    if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            resultMessage = winningMessage;
            humanScore +=1;
        }
        else{
            resultMessage = losingMessage;
            computerScore += 1;
        }
    }
    resultDiv.textContent = `${resultMessage} Human: ${humanScore} Computer: ${computerScore}`;

    // Check if either player has reached 5 points
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}
    // Function to announce the winner and reset the game
    function announceWinner() {
        let winnerMessage;
        if (humanScore === 5) {
            winnerMessage = "Congratulations! You won the game!";
        } else if (computerScore === 5) {
            winnerMessage = "Sorry, the computer won the game.";
        }

        resultDiv.textContent = `${winnerMessage} Final Score - Human: ${humanScore} Computer: ${computerScore}`;

        // Disable buttons after game ends
        document.querySelectorAll("button").forEach(button => button.disabled = true);
    }

function playGame() {
    // create div for buttons
    const div = document.createElement("div");
    div.style.backgroundColor = "lightgrey";
    div.style.width = "400px";
    div.style.height = "200px";
    // Append the div to the body
    document.body.appendChild(div);

    // Create and style the result div
    resultDiv = document.createElement("div");
    resultDiv.style.backgroundColor = "lightyellow";
    resultDiv.style.width = "400px";
    resultDiv.style.height = "200px";
    resultDiv.style.marginTop = "10px"; // Adds spacing below the button div
    document.body.appendChild(resultDiv);

    //create and append button
    const rockButton = document.createElement("button");
    rockButton.textContent = "rock";
    rockButton.style.margin = "5px"; // Add margin for spacing
    div.appendChild(rockButton);

    // create and append for paper button
    const paperButton = document.createElement("button");
    paperButton.textContent = "paper";
    paperButton.style.margin = "5px";
    div.appendChild(paperButton);

    // create and append for scissors
    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "scissors";
    scissorsButton.style.margin = "5px";
    div.appendChild(scissorsButton);

    // Add event listeners to buttons
    rockButton.addEventListener("click", () => {
        let humanChoice = "rock";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    paperButton.addEventListener("click", () => {
        let humanChoice = "paper";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

    scissorsButton.addEventListener("click", () => {
        let humanChoice = "scissors";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
}


playGame();