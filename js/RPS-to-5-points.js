//////////////////////////////////////////////////////////////////////////////////////// Create elements ////////////////////////////////////////////////////////////////////////////
const center = document.querySelector("body");

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("flexy");

const rock = document.createElement("button");
rock.classList.add("buttons")
rock.innerHTML = "Rock";

const papper = document.createElement("button");
papper.classList.add("buttons")
papper.innerHTML = "Papper";

const scissors = document.createElement("button");
scissors.classList.add("buttons")
scissors.innerHTML = "Scissors";

const resultbox = document.createElement("div");
resultbox.classList.add("flexy");

///////////////// Box Player ////////////////
const boxPlayer = document.createElement("div");

const playerWinLabel = document.createElement("p");
playerWinLabel.classList.add("result");
playerWinLabel.innerHTML = "Player Wins:";
const playerWinCount = document.createElement("p");
playerWinCount.classList.add("count");
playerWinCount.innerHTML = "0";

///////////////// Box Computer ////////////////
const boxComputer = document.createElement("div");

const computerWinLabel = document.createElement("p");
computerWinLabel.classList.add("result");
computerWinLabel.innerHTML = "Computer Wins:";

const computerWinCount = document.createElement("p");
computerWinCount.classList.add("count");
computerWinCount.innerHTML = "0";

//////////// Appends ////////////////

center.appendChild(buttonDiv);
buttonDiv.appendChild(rock);
buttonDiv.appendChild(papper);
buttonDiv.appendChild(scissors);
center.appendChild(resultbox)

resultbox.appendChild(boxPlayer);
resultbox.appendChild(boxComputer);
boxPlayer.appendChild(playerWinLabel);
boxPlayer.appendChild(playerWinCount);
boxComputer.appendChild(computerWinLabel);
boxComputer.appendChild(computerWinCount);

/////////////// Global Variables ////////////

let computerWins = 0;
let playerWins = 0;

////////////// Listeners ////////////////

rock.addEventListener('click', () => {
    Game("rock");
})
papper.addEventListener('click', () => {
    Game("papper");
})
scissors.addEventListener('click', () => {
    Game("scissors");
})

//////////////////////////////////////////////////////////////////////////////////////// Computer Move ////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////// Check who wins ////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////// Plays a game and displays results //////////////////////////////////////////////////////////////////////
function removeChildren (){
    /*let nodes = document.getElementsByClassName('paras');
    console.log(nodes.length);
    for(let i = 0; i < nodes.length; i++){
      nodes[i].parentNode.removeChild(nodes[i]); 
    } */
    let elements = document.getElementsByClassName('paras'),
    element;
    while (element = elements[0]) {
    element.parentNode.removeChild(element);
}
}


function Game(player){
    let computerSelection = computerPlay();
    let playerSelection = player;
    text = playRound(playerSelection,computerSelection);
    const element = document.createElement("p");
    element.classList.add("paras")
    center.appendChild(element);
    element.innerHTML = text;
    if (text == `Player wins! ${playerSelection} beats ${computerSelection}`){
            playerWins++;
        }
    else if (text == `You Lose! ${computerSelection} beats ${playerSelection}`){
            computerWins++;
        }

    if (playerWins == 5){
        playerWinCount.innerHTML = Number(playerWins);
        setTimeout(() => {alert("Congratulations. You win the game! Game will be reset.");}, 0);
        playerWins = 0;
        computerWins = 0;
        removeChildren();

        }
    if (computerWins == 5){
        computerWinCount.innerHTML = Number(computerWins);
        setTimeout( () => {alert("Computer wins the game. Get rekt mate. Game will be reset.")}, 0);
        playerWins = 0;
        computerWins = 0;
        removeChildren();

    }

    setTimeout(() =>{
    playerWinCount.innerHTML = Number(playerWins);
    computerWinCount.innerHTML = Number(computerWins);
    }, 0)
    }



