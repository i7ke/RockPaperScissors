let PlayerScore = 0;
let ComputerScore = 0;


function computerplay(x) {
    var x = Math.floor(Math.random() * 3) + 1;
    if (x < 2) {
        x = 'rock';
    }else if (x > 2) {
        x = 'paper';
    }else if (x == 2) {
        x = 'scissors';
    }
    return x;
}



function playround(playerselection, computerselection) {
    let result;
    if (playerselection == 'rock' && computerselection == 'paper') {
    result = 'You Lose! Paper Beats Rock'; ComputerScore++;
    }if (playerselection == 'rock' && computerselection =='scissors')  {
    result = 'You Win! Rock Beats Scissors'; PlayerScore++;
    }if (playerselection == 'rock' && computerselection =='rock') {
    result = 'Tie!';
    }if (playerselection == 'paper' && computerselection =='rock') {
    result = 'You Win! Paper Beats Rock'; PlayerScore++;
    }if (playerselection == 'paper' && computerselection =='paper') {
    result = 'Tie!';
    }if (playerselection == 'paper' && computerselection =='scissors') {
    result = 'You Lose! Scissors Beats Paper'; ComputerScore++;
    }if (playerselection == 'scissors' && computerselection =='rock') {
    result = 'You Lose! Rock Beats Scissors'; ComputerScore++;
    }if (playerselection == 'scissors' && computerselection =='paper') {
    result = 'You Win! Scissors Beats Paper'; PlayerScore++;
    } if (playerselection == 'scissors' && computerselection =='scissors') {
    result = 'Tie!';
    }
    return result;
}

function game(){


   
    while (PlayerScore < 5 && ComputerScore < 5){
        let computerselection = computerplay();
        let playerselection = prompt('Rock, Paper, or Scissors').toLowerCase();
        console.log(playround(playerselection, computerselection,));
        console.log("Your Choice-" +playerselection);
        console.log("Computer Choice-" +computerselection);
        console.log("Your Score-" + PlayerScore);
        console.log("Computers Score-" + ComputerScore);
    }
   
        if (PlayerScore = 5 && PlayerScore > ComputerScore){
            console.log("You Win!");
        }else if (ComputerScore = 5 && ComputerScore > PlayerScore){
            console.log("You Lost!");
        


    
       
        
        }


}
game();