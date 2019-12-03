console.log('JS loaded 🍇')

const offset = 500
const y = 10
let x
let width
let randomValue
let content
let timeline
// let itemContainer

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
  // GET WIDTH OF TIMELINE
  width = timeline.offsetWidth - 25
  console.log('width', width)
  const square = document.createElement('div')

  // GET RANDOM VALUE TO OFFSET AXIS, WITH FUNCTION
  const randomValue = scatter()

  content.map(item => {
    // PUSH ALL ELEMENTS UP FOR AESTHETICS
    const year = parseInt(item.year) - 1425
    // PLACE ITEMS ON ITEMLINE USING YEAR VALUE AND VALUE SET FOR 'Y'
    const yAxis = parseInt(year * y)
    // SET TRANSFORM
    square.style.setProperty('--transform-y', `${yAxis}px`)
    // SET BASE CLASSES FOR ITEMS
    square.className = `item ${item.key} ${item.category}`
    square.innerHTML = `${item.title} ${item.year}`

    // PUSH ELEMENTS TO DOM TIMELINE
    timeline.appendChild(square)

    // GET POSITION OF ITEM ON THE X AXIS
    x = window.scrollX + document.querySelector('.item').getBoundingClientRect().left


    // // GET RANDOM VALUE TO OFFSET AXIS, WITH FUNCTION
    // const randomValue = scatter()


    // GET THE FINAL X AXIS VALUE = THE INITIAL VALUE + RANDOM OFFSET VALUE
    let xAxis = x + randomValue
    // IF FINAL X AXIS VALUE IS LESS THAN THE BOUNDS OF THE TIMELINE
    while (xAxis <= 25) {
      // MAKE NEW RANDOM NUMBER TO POSITIVE
      xAxis = Math.abs(xAxis)
    }
    // IF FINAL X AXIS VALUE IS MORE THAN THE BOUNDS OF THE TIMELINE
    while (xAxis >= width) {
      // MAKE NEW RANDOM NUMBER TO POSITIVE
      xAxis = -xAxis
    }
    console.log('xAxis', xAxis)
    square.style.setProperty('--transform-x', `${xAxis}px`)
  })
}

const scatter = function() {
  // MAKE POSITIVE OR NEGATIVE NUMBER
  const posOrNeg = Math.random() < 0.5 ? -1 : 1
  // MAKE A RANDOM VALUE
  randomValue = Math.round(Math.random() * offset - 1)
  // RANDOMLY MAKE THE VALUE POSITIVE OR NEGATIVE
  randomValue = randomValue * posOrNeg
  return randomValue
}

// const offsetAxisValue = function() {
//   // console.log('=====')
//   // GET RANDOM POSITIVE OR NEGATIVE VALUE
//   const randomNumber = scatter()
//   console.log('randomNumber', randomNumber)
//   // GET WIDTH OF THE TIMELINE ELEMENT
//   width = timeline.offsetWidth
//   console.log('width', width)
//   // GET PERCENTAGE OF WIDTH USING RANDOM VALUE
//   const offsetAxisValue = (width / randomNumber) * 100
//   // const offsetAxisValue = width + randomNumber
//   console.log('offsetAxisValue', offsetAxisValue)
//   return offsetAxisValue
// }

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  // itemContainer = document.getElementById('item')
  loadData()
  console.log('scatter()', scatter())
})





// // GET POSITION OF ITEM ON THE X AXIS
// x = window.scrollX + document.querySelector('.item').getBoundingClientRect().left
// // GET RANDOM VALUE TO OFFSET AXIS, WITH FUNCTION
// let offsetAxis = offsetAxisValue()
// // GET THE FINAL X AXIS VALUE = THE INITIAL VALUE + RANDOM OFFSET VALUE
// let xAxisValue = x + offsetAxis
// // IF FINAL X AXIS VALUE LESS OR MORE THAN THE BOUNDS OF THE TIMELINE
// while (xAxisValue <= 0 || xAxisValue >= width) {
//   // MAKE NEW RANDOM NUMBER TO OFFSET AXIS BY
//   offsetAxis = offsetAxisValue()
//   // CREATE NEW AXIS NUMBER BY X VALUE + RANDOM OFFSET VALUE
//   xAxisValue = x + randomNumber
//   // CHECK IT AGAIN....
