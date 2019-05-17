let cardsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 
let noOfCardsDealt = 0; 
let cardsNowAvailable;
let newCardDrawn; 

function drawCard() {
    newCardDrawn = (Math.ceil(Math.random() * cardsAvailable.length));
    console.log(newCardDrawn);
    return newCardDrawn;
}

let begin = document.getElementById('start');
begin.onclick = drawCard;

function removeCardFromDeck() {
    let index = cardsAvailable.indexOf(newCardDrawn);
    cardsAvailable.splice(index, 1);
}
//I was trying to splice this using (newCardDrawn- 1) however this was changing the index each time. Therefore find index first

let previousCard = drawCard();


function addOneToCardsDealt() {
    noOfCardsDealt += 1; 
}

function checkCardNumber() {
    if (noOfCardsDealt === 3) {
        alert ('Congratulations you win!');
        } else {
            alert ('play again');
        }        
}

let high = document.getElementById('higher');
high.onclick = chooseHigher; 

function chooseHigher() {
   
    newCardDrawn = drawCard();
    
    

    if (newCardDrawn > previousCard) {
        alert("Go again");
        previousCard = newCardDrawn; 
        //reassign the variable here, as this is the exact point when the previous card becomes the new card. If do this below if/else statement, this isn't correct as it doesnt' apply to the 'else' part.
        console.log(`My new value is ${previousCard}`);
        addOneToCardsDealt();
        console.log(`number of cards dealt is ${noOfCardsDealt}`);
        checkCardNumber();

        removeCardFromDeck();
        console.log(cardsAvailable);

     } else {
         alert("You Lose!");
    }

    //need to add card to number of cards dealt
}

let low = document.getElementById('lower');
low.onclick = chooseLower; 

function chooseLower() {
    
    newCardDrawn = drawCard();
    

    if (newCardDrawn < previousCard) {
        alert("Go again");
        previousCard = newCardDrawn;
        console.log(`My new value is ${previousCard}`);
        addOneToCardsDealt();
        console.log(`number of cards dealt is ${noOfCardsDealt}`);
        checkCardNumber();

        removeCardFromDeck();
        console.log(cardsAvailable);

    } else {
        alert("You Lose!");
    }
}




