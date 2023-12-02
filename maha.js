// my new intreactive game

let myBoolean = confirm('are you intrest play games say yes or no');
console.log(myBoolean);

let playGame = confirm("shall we play stone,paper, and sccisor game")
if(playGame)
{
    let playerChoice = prompt("type any one select stone,paper,sccisor");
    if(playerChoice)
    {
        let playerOne = playerChoice.trim().toLowerCase();
    console.log(playerChoice);
    if
    (
        playerOne === "stone"|| playerOne === "paper"||
        playerOne === "sccisor"
    )
    {
        let computerChoice = Math.floor(Math.random()*3 + 1);
        console.log(computerChoice);
        let computer = 
        computerChoice === 1 ? "stone" :
        computerChoice === 2 ? "paper" :
        "sccisor";
       

        let result =
        playerOne === computer ? "tie" :
        playerOne === "stone" && computer === "paper" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`:
        playerOne === "paper" && computer === "sccisor" ? `playerOne: ${playerOne}\ncomputer :${computer}\ncomputer wins`:
        `playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins`;

        alert(result);
        let playAgain = confirm("you will play again");
        playAgain ? location.reload() : alert("ok thanks for playing");

    }
    else
    {
        alert("you dint select any option");
    }
}
else
{
    alert("ok i guess your mind wil be changed");
}
    

}
else
{
    alert("ok no problem ");

}


