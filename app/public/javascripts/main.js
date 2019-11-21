console.log('JS loaded 🍇')

const y = 10
const width = 100
let x
let randomValue
let content
let timeline
let itemContainer

function loadData() {
  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      content = Object.keys(data).map(i => {
        data[i].key = i
        return data[i]
      })
      makeTimeline()
    })
    .catch(err => {
      console.error(`${err}`)
    })
}


// CREATE ITEMS FROM JSON OBJECTS AND PUSH TO DOM
function makeTimeline() {
  console.log('content 🥝', content)
  content.map(item => {
    const square = document.createElement('div')
    const year = item.year - 1425
    const yAxis = parseInt(year * y)
    square.style.setProperty('--transform-y', `${yAxis}px`)

    square.className = `item ${item.key} ${item.category}`
    square.innerHTML = `${item.title}`

    timeline.appendChild(square)

    x = window.scrollX + document.querySelector('.item').getBoundingClientRect().left
    console.log('x', x)
  })
}

function scatter() {
  const posOrNeg = Math.raound(Math.random) * 2 - 1
  randomValue = Math.round(Math.random()) * width
  randomValue = randomValue * posOrNeg
  return randomValue
}

function applyScatter() {
}


// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  itemContainer = document.getElementById('item')
  loadData()

})
