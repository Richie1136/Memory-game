
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

function flipCard() {
  console.log(cardArray)
  let cardId = this.getAttribute('data-id')
  chosenCards.push(cardArray[cardId].name)
  console.log(chosenCards)
  console.log("Clicked", cardId)
  let result = this.setAttribute('src', cardArray[cardId].img)
  console.log(result)
}


const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', './images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    console.log(card)
    grid.appendChild(card)
  }
}

createBoard()