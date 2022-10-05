
// making a function that gets a computer to randomly generate either rock, paper or scissors
function getComputerChoice(){
    // making variable x equal a random number between 0 and 99
    let x = Math.floor(Math.random() * 100);
    // dividing 99 into thirds generated blocks of 33
    // if x equals a number inside one of each three blocks, it returns a value of rock, paper or scissors corresponding to that block
    if (x <= 33) {
        return "rock";
    }
    else if (x <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }

}


let userWin = 0;
let compWin = 0;

//making a function that lets the user and computer play one round of rock paper scissors against each other
function playRound(playerSelection, computerSelection){
    // value playerSelection contains user input argument of either rock, paper or scissors 
    // user input gets converted to LowerCase();
    playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
    // value computerSelection contains computer input argument
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return "Its a draw";
    }
    // there are three ways to win against the computer at rock, paper, scissors!
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        userWin++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        userWin++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        userWin++;
        return `You win! ${playerSelection} beats ${computerSelection}`;

    } else {
        compWin++;
        return `You lose \:\( ${playerSelection} loses to ${computerSelection}`;
    }

}


// making a function that allows the user to play five games against the computer
function playGame() {
    // a for loop iterates through playRound() 5 times before terminating
    // allowing the user to play 5 times against the computer, and the computer logs the results
    for(i = 0; i < 5; i++) {
        console.log(playRound());
    }
    // making a function that tallys the win/loss rate of the user, and prints an overall win/loss rate
    if (userWin > compWin) {
        console.log('Winna winna');
    }
    else {
        console.log('Oh dear')
    }
}






// function playGame(){

//}

