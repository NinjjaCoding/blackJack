
let player = {
    name:  Yama,
    chips: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

//render player name and chips
playerEl.textContent = player.name + ": $" + player.chips 

//store the sum in a variable called sumEL or sum of the Elements 
//let sumEl = document.getElementById("sum-el")
//we also use querrySelector 
//let sumEl = document.querySelector("#sum-el")

//now we need to get rid of hardcoded cards and make randomCards funciton to use
function getRandomCard() {
    let randomCard = Math.floor (Math.random() *13) + 1
    if(randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    } 
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [ firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
} 

function renderGame() { 

    cardEl.textContent = "Cards: "
    //create a for loop that renders all the cards instead of just two
   for (let i = 0; i < cards.length; i++) {
       cardEl.textContent += cards[i] + " "
   }
    // we need to render all the cards 
    //cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
  
    if(sum <= 20 ) {
        message = "Do you want to draw a new card?"
} else if (sum === 21 ) {
       message = " you have got a blackjack"
       hasBlackJack = true
} else {
    message = "You are over 21! Game ended"
    isAlive = false
 }
  messageEl.textContent = message
}

function newCard() {

    //only allow player to get new card if total is < 21
    if(isAlive === true && hasBlackJack === false) {
         let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()
    }
}
 