let PlayerScore = 0;
let ComputerScore = 0;
let playerselection;
let computerselection = computerplay();
const userScore = document.querySelector('#yourScore');
const compScore = document.querySelector('#computerScore');
const outcome = document.querySelector('.result');


function computerplay() {
    var x = Math.floor(Math.random() * 3) + 1;
    if (x < 2) {
        x = 'rock';
    }else if (x > 2) {
        x = 'paper';
    }else x = 'scissors';
    
    return x;
}

rock.addEventListener('click', function(){
    playerselection = 'rock';
    computerselection = computerplay();
    (playround());
    console.log(`Your Points- ${PlayerScore} Computer Points- ${ComputerScore}`);
    });


paper.addEventListener('click', function(){
    playerselection = 'paper';
    computerselection = computerplay();
    (playround());
    console.log(`Your Points- ${PlayerScore} Computer Points- ${ComputerScore}`);
    });

scissors.addEventListener('click', function(){
    playerselection = 'scissors';
    computerselection = computerplay();
    (playround());
    console.log(`Your Points- ${PlayerScore} Computer Points- ${ComputerScore}`);
    });


  
function playround() {
    
    let result;
    if (playerselection == 'rock' && computerselection == 'paper') {
    result = outcome.innerHTML ='You Lose! Paper Beats Rock'; compScore.innerHTML = ++ComputerScore;
    }if (playerselection == 'rock' && computerselection =='scissors')  {
    result = outcome.innerHTML ='You Win! Rock Beats Scissors'; userScore.innerHTML = ++PlayerScore;
    }if (playerselection == 'rock' && computerselection =='rock') {
    result = outcome.innerHTML ='Tie!';
    }if (playerselection == 'paper' && computerselection =='rock') {
    result = outcome.innerHTML ='You Win! Paper Beats Rock'; userScore.innerHTML = ++PlayerScore;
    }if (playerselection == 'paper' && computerselection =='paper') {
    result = outcome.innerHTML ='Tie!';
    }if (playerselection == 'paper' && computerselection =='scissors') {
    result = outcome.innerHTML ='You Lose! Scissors Beats Paper'; compScore.innerHTML = ++ComputerScore;
    }if (playerselection == 'scissors' && computerselection =='rock') {
    result = outcome.innerHTML ='You Lose! Rock Beats Scissors'; compScore.innerHTML = ++ComputerScore;
    }if (playerselection == 'scissors' && computerselection =='paper') {
    result = outcome.innerHTML ='You Win! Scissors Beats Paper'; userScore.innerHTML = ++PlayerScore;
    } if (playerselection == 'scissors' && computerselection =='scissors') {
    result = outcome.innerHTML ='Tie!';
    } if (PlayerScore === 5){
        result = outcome.innerHTML = 'GAMEOVER! YOU WIN!'
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    } if (ComputerScore ===5){
        result = outcome.innerHTML = 'GAME OVER! YOU LOST!'
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}