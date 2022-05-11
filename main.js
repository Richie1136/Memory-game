
const cardArray = [
  {
    name: 'fries',
    img: './images/fries.png'
  },
  {
    name: 'milkshake',
    img: './images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: './images/hotdog.png'
  },
  {
    name: 'cheeseburger',
    img: './images/cheeseburger.png'
  },
  {
    name: 'pizza',
    img: './images/pizza.png'
  },
  {
    name: 'icecream',
    img: './images/ice-cream.png'
  },
  {
    name: 'fries',
    img: './images/fries.png'
  },
  {
    name: 'milkshake',
    img: './images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: './images/hotdog.png'
  },
  {
    name: 'cheeseburger',
    img: './images/cheeseburger.png'
  },
  {
    name: 'pizza',
    img: './images/pizza.png'
  },
  {
    name: 'icecream',
    img: './images/ice-cream.png'
  },
]

cardArray.sort(() => 0.5 - Math.random())

console.log(cardArray)

let grid = document.querySelector('#grid')

let chosenCards = []
let chosenCardsID = []

const checkMatch = () => {
  let cards = document.querySelectorAll('#grid img')
  score = 0
  console.log("Check for match")
  if (chosenCards[0] === chosenCards[1]) {
    alert("You found a match")
    cards[chosenCardsID[0]].setAttribute('src', './images/white.png')
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id')
  chosenCards.push(cardArray[cardId].name)
  chosenCardsID.push(cardId)
  console.log(chosenCards)
  console.log(chosenCardsID)
  let result = this.setAttribute('src', cardArray[cardId].img)
  if (chosenCards.length === 2) {
    setTimeout(() => {
      checkMatch()
    }, 500);
  }
}


const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', './images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

createBoard()