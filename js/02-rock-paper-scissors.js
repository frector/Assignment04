let choice;
let random;
let comp;

function displayTitle (){
    alert('Welcome to the Rock, Paper, Scissors Game');
}

function playerChoice() {
    choice = window.prompt('Please enter Rock, Paper, or Scissors').toLowerCase();
    if (choice !== 'rock'  && choice !== 'paper' && choice !== 'scissors') {
        window.alert('Sorry, Your entry must be Rock, Paper, or Scissors, refresh and try again');
    } else { 
        window.alert(`OK you chose ${choice}, here we go!`);
    }
}
function compChoice() {
    random = Math.floor(Math.random()*3) + 1;
      console.log(random);
    if (random == 1) {
        comp = 'rock';
    } else if (random == 2){
        comp = 'paper';
    } else {
        comp = 'scissors';
    }
}
function winner(){
    if (choice == 'rock' &&  comp == 'paper'){
        window.alert('Paper beats Rock, You lose!');
    } else if (choice == 'rock' &&  comp == 'scissors'){
        window.alert('Rock beats scissors, you win!');
    } else if (choice == 'paper' && comp == 'rock'){
        window.alert('Paper beats rock, you win!');
    } else if (choice == 'paper' && comp == 'scissors'){
        window.alert('Scissors beat paper, you lose!');
    } else if (choice == 'scissors' && comp == 'paper'){
        window.alert('Scissors beat paper, you win!');
    } else if (choice == 'scissors' && comp == 'rock'){
        window.alert('Rock beats scissors, you lose!')
    } else if (choice == comp){
        window.alert('It\'s a Tie! Go again!');
        main();
    }
}
function endTitle (){
    let playAgain = window.prompt('Thanks for playing, Wanna play again?').toLowerCase();
    if (playAgain !== 'yes' && playAgain !== 'no'){
        window.alert('Please enter yes or no');
    } else {
        if (playAgain == 'yes'){
            main();
        } else if (playAgain == 'no') {
            window.alert('Ok Bye');
        }
    }
}

function main(){
    displayTitle();
    playerChoice();
    compChoice();
    winner();
  endTitle();
}
main();