let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const genComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};


const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game was draw! Play again";
}

const showWinner = (userWin) => {
    if(userWin){
       userScore++;
         userScorepara.innerText = `User Score: ${userScore}`;
        msg.innerText = "You wins!";
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorepara.innerText = `Computer Score: ${computerScore}`;
        console.log("You lose!");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>  {
    console.log("user choice =", userChoice)
    const computerChoice = genComChoice();
    console.log("computer choice =", computerChoice);

if(userChoice === computerChoice){
        drawGame();
    }
    else{
       let userWin = true;
       if(userChoice === "rock" ){
        userWin = computerChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = computerChoice === "scissors" ? false : true;
    }
    else if(userChoice === "scissors"){
        userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}

}
    

    


choices.forEach((choice) => {
  choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
});