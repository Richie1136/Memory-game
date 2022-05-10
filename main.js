
const cardArray = [
  {
    name: 'fries',
    img: './images/fries'
  },
  {
    name: 'milkshake',
    img: './images/milkshake'
  },
  {
    name: 'hotdog',
    img: './images/hotdog'
  },
  {
    name: 'cheeseburger',
    img: './images/cheeseburger'
  },
  {
    name: 'pizza',
    img: './images/pizza'
  },
  {
    name: 'icecream',
    img: './images/ice-cream'
  },
  {
    name: 'fries',
    img: './images/fries'
  },
  {
    name: 'milkshake',
    img: './images/milkshake'
  },
  {
    name: 'hotdog',
    img: './images/hotdog'
  },
  {
    name: 'cheeseburger',
    img: './images/cheeseburger'
  },
  {
    name: 'pizza',
    img: './images/pizza'
  },
  {
    name: 'icecream',
    img: './images/ice-cream'
  },
]

cardArray.sort(() => 0.5 - Math.random())

console.log(cardArray)

let grid = document.querySelector('#grid')


const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', './images/blank.png')
    card.setAttribute('data-id', i)
    console.log(card)
    grid.appendChild(card)
  }
}

createBoard()