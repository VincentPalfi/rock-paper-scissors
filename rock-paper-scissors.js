function computerPlay(){
    let items = ["rock", "paper", "scissors"];
    let computerChooses = items[Math.floor(Math.random() * items.length)];
    return computerChooses;
}

function playRound(playerSelection, computerSelection){

    
    let draw = "It's a draw!";
    let playerwinsRock = "You win! Rock beats Scissors";
    let playerwinsScissors = "You win! Scissors beats Paper";
    let playerwinsPaper = "You win! Paper beats Rock";
    let computerwinsPaper = "You lose! Paper beats Rock";
    let computerwinsRock = "You lose! Rock beats Scissors";
    let computerwinsScissors = "You lose! Scissors beats Paper";

    playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    computerSelection = computerPlay();
    console.log("Computer selects", computerSelection);

    if (playerSelection === computerSelection){
        return draw;
    }

    if ((playerSelection === "rock") && (computerSelection === "scissors")){
        playerScore++;
        return playerwinsRock;
    }

    if ((playerSelection === "scissors") && (computerSelection === "paper")){
        playerScore++;
        return playerwinsScissors;
    }

    if ((playerSelection === "paper") && (computerSelection === "rock")){
        playerScore++;
        return playerwinsPaper;
    }

    if ((playerSelection === "rock") && (computerSelection === "paper")){
        computerScore++;
        return computerwinsPaper;
    }

    if ((playerSelection === "scissors") && (computerSelection === "rock")){
        computerScore++;
        return computerwinsRock;
    }

    if ((playerSelection === "paper") && (computerSelection === "scissors")){
        computerScore++;
        return computerwinsScissors;
    }
}

let computerScore = 0;
let playerScore = 0;

function game(){
    
    let computerWins = "Computer wins!";
    let playerWins = "You win!";
    let tie = "It's a tie!";

    for (let i = 0; i < 5; i++){
        playRound();
        console.log(playerScore, computerScore);
    }

    if (computerScore > playerScore){
        return computerWins;
    }

    if(playerScore > computerScore){
        return playerWins;
    }

    if (playerScore == computerScore){
        return tie;
    }
}

console.log(game());
