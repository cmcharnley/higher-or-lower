let cardsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 
let noOfCardsDealt = 0;  
let previousCard;

const begin = document.getElementById('start');
const high = document.getElementById('higher');
const low = document.getElementById('lower');

function drawCard() {
    let index = (Math.floor(Math.random() * cardsAvailable.length));
    const [card] = cardsAvailable.splice(index, 1); //this is because splice returns a new array of the removed item
    return card;
}

function startGame() { //initialising 
    previousCard = drawCard();
    high.removeAttribute('disabled');
    low.removeAttribute('disabled');
    start.setAttribute('disabled', true);
    console.log(previousCard);
    document.getElementById("container").src = `img/${previousCard}.png`;
    noOfCardsDealt +=1; 
}

function checkCardNumber() {
    if (noOfCardsDealt === 6) {
        alert ('Congratulations you win!');
        } else {
            alert ('play again');
        }        
}

function chooseHigher() {
   
    let newCardDrawn = drawCard();
    console.log(newCardDrawn);
    document.getElementById("container").src = `img/${newCardDrawn}.png`;
    
    if (newCardDrawn > previousCard) {
        alert("Go again");
        previousCard = newCardDrawn; 
        //reassign the variable here, as this is the exact point when the previous card becomes the new card. If do this below if/else statement, this isn't correct as it doesnt' apply to the 'else' part.
        noOfCardsDealt += 1; 
        console.log(`number of cards dealt is ${noOfCardsDealt}`);
        checkCardNumber();

        console.log(cardsAvailable);

     } else {
         alert("You Lose!");
    }

}

function chooseLower() {
    
    let newCardDrawn = drawCard();
    console.log(newCardDrawn);
    document.getElementById("container").src = `img/${newCardDrawn}.png`;
    
    if (newCardDrawn < previousCard) {
        alert("Go again");
        previousCard = newCardDrawn;
        noOfCardsDealt += 1; 
        console.log(`number of cards dealt is ${noOfCardsDealt}`);
        checkCardNumber();

        console.log(cardsAvailable);

    } else {
        alert("You Lose!");
    }
}

begin.addEventListener('click', startGame);
high.addEventListener('click', chooseHigher);
low.addEventListener('click', chooseLower);
