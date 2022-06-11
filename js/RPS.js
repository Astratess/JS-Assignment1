function computerPlay(){
    /* 0 - rock , 1 - papper, 2 - scissors*/
    let move = Math.floor(Math.random() * 3);
    let computerSelection;
    switch (move){
        case 0:
            computerSelection = "Rock";
            break;
        case 1: 
            computerSelection = "Papper";
            break;
        case 2: 
            computerSelection = "Scissors";
            break;
    }      
    return computerSelection;
}

function playRound(playerSelection,computerSelection){
    let text;
    switch(computerSelection){
        case "Rock":
            if(playerSelection == "rock"){
                text = "tie";
            }
            else if (playerSelection == "papper"){
                text = `Player wins! ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection == "scissors"){
                text = `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        case "Papper":
            if(playerSelection == "papper"){
                text = "tie";
            }
            else if (playerSelection == "scissors"){
                text = `Player wins! ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection == "rock"){
                text = `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        case "Scissors":
            if(playerSelection == "scissors"){
                text = "tie";
            }
            else if (playerSelection == "rock"){
                text = `Player wins! ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection == "papper"){
                text = `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
    }
    return text;
}

function Game(){
    let computerWins = 0;
    let playerWins = 0;
    for (let index = 0; index < 5; index++) {
        
        let computerSelection = computerPlay();
        let player = prompt("Please enter your move:", "rock, papper or scissors");
        let playerSelection = player.toLowerCase();
        text = playRound(playerSelection,computerSelection);

        if (text == `Player wins! ${playerSelection} beats ${computerSelection}`){
            playerWins++;
        }
        else if (text == `You Lose! ${computerSelection} beats ${playerSelection}`){
            computerWins++;
        }
        
        document.getElementById(`${index}`).innerHTML = text;
        console.log(text);

    }
    if (playerWins > computerWins){
        console.log(`You won. Player won ${playerWins} times and computer won ${computerWins} times.`);
        document.getElementById("result").innerHTML = `You won. Player won ${playerWins} times and computer won ${computerWins} times.`;
    }
    else if (playerWins == computerWins){
        console.log(`Tie. Player won ${playerWins} times and computer won ${computerWins} times.`);
        document.getElementById("result").innerHTML = `Tie. Player won ${playerWins} times and computer won ${computerWins} times.`;
    }
    else {
        console.log(`Computer won. Player won ${playerWins} times and computer won ${computerWins} times.`);
        document.getElementById("result").innerHTML = `Computer won. Player won ${playerWins} times and computer won ${computerWins} times.`;
    }

}
