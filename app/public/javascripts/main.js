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
  const randomNumber = scatter()
  content.map(item => {
    const square = document.createElement('div')
    const year = item.year - 1425
    const yAxis = parseInt(year * y)
    square.style.setProperty('--transform-y', `${yAxis}px`)

    square.className = `item ${item.key} ${item.category}`
    square.innerHTML = `${item.title}`

    timeline.appendChild(square)

    x = window.scrollX + document.querySelector('.item').getBoundingClientRect().left
    console.log('x', item.key, x)

    console.log('**--**', randomNumber)
  })
}

function scatter() {
  const posOrNeg = Math.round(Math.random) * 2 - 1
  randomValue = Math.round(Math.random()) * width
  randomValue = randomValue * posOrNeg
  console.log(randomValue)
  return randomValue
}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  itemContainer = document.getElementById('item')
  loadData()

})
