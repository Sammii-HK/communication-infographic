/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/

console.log('JS loaded 🍇')

const y = 10
const axisValues = []
let year
let xAxis = 0
let width
let randomValue
let content
let timeline

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
  // GET WIDTH OF TIMELINE
  width = timeline.offsetWidth
  const tenPerc = (width / 10)
  console.log('width', width, tenPerc)

  // SORT CONTENT BY YEAR
  content.sort(function(a, b) {
    const aYear = parseInt(a.year)
    const bYear = parseInt(b.year)
    return aYear - bYear
  })
  console.log('content 🥝', content)

  content.map(item => {
    // SAVE CREATE DIV AS VAR
    const square = document.createElement('div')
    // SET BASE CLASSES FOR ITEMS
    square.className = `item ${item.key} ${item.category}`
    square.innerHTML = `${item.title} <br> ${item.year}`
    // PUSH ALL ELEMENTS UP FOR AESTHETICS
    year = parseInt(item.year) - 1425
    // PLACE ITEMS ON ITEMLINE USING YEAR VALUE AND VALUE SET FOR 'Y'
    const yAxis = parseInt(year * y)
    // SET TRANSFORM
    square.style.setProperty('--transform-y', `${yAxis}px`)
    // SCATTER ITEMS ON TIMELINE
    axisValues.push({ title: item.title, year: item.year, yAxis: yAxis, xAxis: xAxis })
    scatter()
    square.style.setProperty('--transform-x', `${xAxis}px`)
    // console.log('timeline xAxis', xAxis)
    // PUSH ELEMENTS TO DOM TIMELINE
    timeline.appendChild(square)
  })
}

const scatter = function() {
  const withinTenYears = []
  if (axisValues.length === 0) return
  // GET LAST ITEM IN THE ARRAY FOR COMPARISON
  const comparisonItem = axisValues[axisValues.length - 1]
  const comparisonYear = Math.abs(comparisonItem.year)
  const paddingValue = width / 8
  console.log(paddingValue)
  // console.log('paddingValue', paddingValue)
  // GET RANDOM VALUE TO OFFSET AXIS, WITH FUNCTION
  xAxis = randomNumber()
  console.log('1 xAxis', xAxis)
  comparisonItem.xAxis = xAxis
  // CHECK FOR OVERLAPS
  axisValues.map(item => {
    // MAKE VALUE A NUMBER
    const currentYear = parseInt(item.year)
    // IF CURRENT YEAR IS WITHIN TEN YEARS OF THE COMPARISON YEAR
    // if ((currentYear - comparisonYear) <= 10) {
    if ((currentYear + 10) >= comparisonYear) {
      // PUSH XAXIS VALUE TO ARRAY
      withinTenYears.push(item.xAxis)
    }
  })
  // REMOVE LAST ITEM AS IT IS ITSELF
  withinTenYears.pop()
  console.log('2', comparisonItem.title, comparisonItem.xAxis, withinTenYears)
  // MAP WITHIN TEN YEARS ARRAY
  while (withinTenYears.some(value => {
    return comparisonItem.xAxis >= (value - paddingValue) && comparisonItem.xAxis <= (value + paddingValue)
  })
  ) {
    // MAKE A NEW NUMBER
    const newNumber = randomNumber()
    console.log('3 newNumber', newNumber)
    // SET XAXIS VALUE FOR USE LATER
    comparisonItem.xAxis = newNumber
  }
  xAxis = comparisonItem.xAxis
  console.log('4', comparisonItem.title, comparisonItem.xAxis, withinTenYears)
}

// MAKE POSITIVE OR NEGATIVE NUMBER
const posOrNeg = function() {
  return Math.random() < 0.5 ? -1 : 1
}

const randomNumber = function() {
  // MAKE A RANDOM VALUE WHICH IS HALF OF TIMELINE WIDTH
  randomValue = Math.round(Math.random() * (width / 2) - 1)
  // RANDOMLY MAKE THE VALUE POSITIVE OR NEGATIVE
  randomValue = randomValue * posOrNeg()
  return randomValue
}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  loadData()
})
