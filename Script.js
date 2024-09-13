const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function computerChoice() {
 const choices = ['stone', 'scissor', 'paper']

 const random = Math.floor(Math.random() * choices.length)

 return choices[random]
}

function determineWinner (playerChoice, computerChoice) {
if (playerChoice === computerChoice){
    return "Its a draw!"
}

if((playerChoice === 'stone' && computerChoice === 'scissor') || (playerChoice === 'scissor' && computerChoice === 'paper')
    || (playerChoice === 'paper' && computerChoice === 'stone')){

        return "You win!"
} else {
    return "You lost!"
}
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    rl.question("Choose Stone, paper or scissor! \n" , (playerChoice) => {
        playerChoice = playerChoice.toLowerCase()
        const validChoices = ['stone', 'paper', 'scissor']

        if(!validChoices.includes(playerChoice)){
            console.log("Please enter a valid choice")
            playGame()
        }
    

    const computerSelected = computerChoice()
    console.log(`You choose ${playerChoice}`)
    console.log(`Computer choose ${computerSelected}`)
    const result = determineWinner(playerChoice, computerSelected)

    if (result === "You win!"){
        playerScore++
    } else if (result === "You lost!"){
        computerScore++
    }
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)

    if(playerScore === 3){
        console.log("You win the game!")
        rl.close()
    } else if(computerScore === 3){
        console.log("You lost the game!")
        rl.close()
    } else {
        playGame(playerScore, computerScore)
    }
    console.log(result)
    rl.close()
})
}
playGame()

