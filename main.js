
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

let grid = document.querySelector('#grid')
let result = document.querySelector('#result')

let chosenCards = []
let chosenCardsID = []
let cardsWon = []

const checkMatch = () => {
  let optioneOneId = chosenCardsID[0]
  let optioneTwoId = chosenCardsID[1]
  let cards = document.querySelectorAll('#grid img')
  let numOfTries = 0

  if (optioneOneId === optioneTwoId) {
    cards[optioneOneId].setAttribute('src', './images/blank.png')
    cards[optioneTwoId].setAttribute('src', './images/blank.png')
    alert("You clicked the same card")
  }

  if (chosenCards[0] === chosenCards[1]) {
    cards[optioneOneId].setAttribute('src', './images/white.png')
    cards[optioneTwoId].setAttribute('src', './images/white.png')
    cards[optioneOneId].removeEventListener('click', flipCard)
    cards[optioneTwoId].removeEventListener('click', flipCard)
    cardsWon.push(chosenCards)
  } else {
    cards[optioneOneId].setAttribute('src', './images/blank.png')
    cards[optioneTwoId].setAttribute('src', './images/blank.png')
  }

  result.innerHTML = cardsWon.length

  chosenCards = []
  chosenCardsID = []

  if (cardsWon.length === cardArray.length / 2) {
    result.innerHTML = "You found all of the matches"
  }

}

function flipCard() {
  let cardId = this.getAttribute('data-id')
  chosenCards.push(cardArray[cardId].name)
  chosenCardsID.push(cardId)
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