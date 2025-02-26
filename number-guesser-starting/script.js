let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let randomNumber = Math.floor(Math.random() * 9);

    return randomNumber;

};

const getAbsoluteDistance = (input, target) =>{

let distance = Math.abs(input - target);

return distance;

};

const compareGuesses = (user, computer, target) => {
    let winner; 
    let userDistance = getAbsoluteDistance(user, target);
    let computerDistance = getAbsoluteDistance(computer, target);

    if (user < 0 || user > 9) {

        alert('Error, you must enter a number between 0 and 9.');
    }else if(userDistance <= computerDistance){
        winner = true;
    }else {
        winner = false;
    }

    return winner;
};

const updateScore = winner => {
    
    if (winner === 'human'){
        humanScore++;
    }else {
        computerScore++;
    }

};

const advanceRound = () => currentRoundNumber++;

//console.log(generateTarget);
console.log(compareGuesses(5,12,generateTarget));
console.log(updateScore);
console.log(advanceRound);