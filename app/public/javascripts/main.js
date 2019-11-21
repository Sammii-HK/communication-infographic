console.log('JS loaded 🍇')

const offset = 500
const y = 10
let x
let width
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

    // x = window.scrollX + document.querySelector('.item').getBoundingClientRect().left
    // console.log('x', item.key, x)

    // const randomNumber = scatter()
    // console.log('randomNumber', randomNumber)
    // width = timeline.offsetWidth
    // randomNumber = ()
    // if offset.min + randomNumber || offset.max + randomNumber
    // const offsetAxisValue = width + randomNumber
    // console.log('offsetAxisValue', offsetAxisValue)
    const offsetAxis = offsetAxisValue()
    if (offsetAxis <= 0 || offsetAxis >= width) offsetAxisValue()
    else if (offsetAxis >= 0 || offsetAxis <= width) square.style.setProperty('--transform-x', `${offsetAxis}px`)

    // square.style.setProperty('--transform-x', `${randomNumber}px`)
  })
}

const scatter = function() {
  const posOrNeg = Math.random() < 0.5 ? -1 : 1
  randomValue = Math.round(Math.random() * offset - 1)
  randomValue = randomValue * posOrNeg
  return randomValue
}

const offsetAxisValue = function() {
  console.log('=====')
  const randomNumber = scatter()
  console.log('randomNumber', randomNumber)
  width = timeline.offsetWidth
  console.log('width', width)
  const offsetAxisValue = width + randomNumber
  console.log('offsetAxisValue', offsetAxisValue)
  return offsetAxisValue
}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  itemContainer = document.getElementById('item')
  loadData()
  console.log('scatter()', scatter())
})
