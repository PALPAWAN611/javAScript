const ComputerChoicecomputerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber =Math.floor(Math.random() * 3) + 1 //or you can use possiblechoices.lenght
    
    if(randomNumber === 1){
        ComputerChoice = 'rock'
    }
    if (randomNumber === 2){
        ComputerChoice ='scissors'
    }
    if (randomNumber === 3){
        ComputerChoice ='paper'
    }
    
    ComputerChoicecomputerChoice.innerHTML = ComputerChoice
    
    console.log(randomNumber)

    

}
function getResult() {
    if (ComputerChoice=== userChoice){
        result = 'its a draw!'
    }
    if (ComputerChoice === 'rock' && userChoice === "paper"){
        result = 'you win!'
}
if (ComputerChoice === 'rock' && userChoice ==="scissiors"){
    result = 'you lost!'
}
if (ComputerChoice === 'paper' && userChoice ==="scissiors"){
    result = 'you win!'
}
if (ComputerChoice === 'paper' && userChoice ==="rock"){
    result = 'you lose!'
}
if (ComputerChoice === 'scissors' && userChoice ==="rock"){
    result = 'you win!'
}
if (ComputerChoice === 'scissors' && userChoice ==="paper"){
    result = 'you lose!'
}
if (ComputerChoice === 'rock' && userChoice ==="scissors"){
    result = 'you lose!'
}
resultDisplay.innerHTML = result
}