/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/

console.log('JS loaded 🍇')

const y = 10
let axisValues = []
let year
let xAxis = 0
let width
let randomValue
let content
let timeline

function loadData () {
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
    // PUSH ELEMENTS TO DOM TIMELINE
    timeline.appendChild(square)
    // SCATTER ITEMS ON TIMELINE
    scatter()
    square.style.setProperty('--transform-x', `${xAxis}px`)
    axisValues.push({ title: item.title, year: item.year, yAxis: yAxis, xAxis: xAxis })

    // SORT CONTENT BY YEAR
    axisValues = axisValues.sort(function(a, b) {
      const aYear = parseInt(a.year)
      const bYear = parseInt(b.year)
      return aYear - bYear
    })
  })
}

// const withinTenYears = function() {
//   const withinTen = []
//   // axisValues.map(item => {
//   //   const currentYear = parseInt(item.year)
//   //   if (currentYear)
//   // })
//   for (let i = 0; i <= axisValues.length - 1; i++ ) {
//     const currentItem = axisValues[i]
//     const currentYear = parseInt(currentItem.year)
//     // console.log('currentYear', currentYear)
//     // console.log('lastYear', lastYear)
//     if (currentYear >= (lastYear - 10)) return withinTen.push(currentYear)
//   }
//   // console.log('withinTen', withinTen)
// }

const scatter = function() {
  let withinTenYears = []
  if (axisValues.length === 0) return
  const comparisonItem = axisValues[axisValues.length - 1]
  const comparisonYear = parseInt(comparisonItem.year)
  // GET RANDOM VALUE TO OFFSET AXIS, WITH FUNCTION
  xAxis = randomNumber()
  // CHECK FOR OVERLAPS
  axisValues.map((item, i) => {
    if (i === 0) return

    const currentYear = parseInt(item.year)
    console.log(item.title, comparisonYear, currentYear)
    if ((currentYear + 10) >= comparisonYear) {
      withinTenYears.push(item)
      console.log('withinTenYears', withinTenYears)
    }
    // withinTenYears()
    // const lastItem = axisValues[ i - 1 ]
    // const lastYear = parseInt(lastItem.year)
    // let axisDifference = Math.abs(lastItem.xAxis - item.xAxis)


    // for (i = 0; axisValues.length; i++) {
    //   if (parseInt(axisValues[i].year) >= (currentYear - 10)) {
    //     console.log(axisDifference)
    //     // withinTenYears.push(axisValues[i])
    //   }
    // }

    // IF CURRENT ITEM WITHIN 10 YEARS OF THE LAST
    // if (currentYear <= lastYear + 10) {
    // // if (currentYear <= lastYear + 10) {
    //   while (axisDifference <= (width / 5)) {
    //     console.log('diff 1:', axisDifference, item.title, item.xAxis, lastItem.title, lastItem.xAxis)
    //     const newNumber = randomNumber()
    //     item.xAxis = 0
    //     item.xAxis += newNumber
    //     axisDifference = Math.abs(lastItem.xAxis - item.xAxis)
    //
    //     // if (i >= 1) return
    //     // const secondLastItem = axisValues[ i - 2 ]
    //     // let secondAxisDifference = Math.abs(secondLastItem.xAxis - item.xAxis)
    //     // while (secondAxisDifference <= (width / 5)) {
    //     //   const newNumber = randomNumber()
    //     //   item.xAxis = 0
    //     //   item.xAxis += newNumber
    //     //   secondAxisDifference = Math.abs(secondLastItem.xAxis - item.xAxis)
    //     // }
    //     xAxis = item.xAxis
    //     console.log('diff 2:', axisDifference, item.xAxis)
    //   }
    // }
  })
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
