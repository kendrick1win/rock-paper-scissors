console.log("Hello World")

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
  
function getComputerChoice(){
    let result = getRandomInt();
    if(result == 0){
        return "Rock"
    }
    else if(result == 1){
        return "Paper"
    }
    else if(result == 2){
        return "Scissors"
    }
}