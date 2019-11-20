console.log('JS loaded 🍇')

let content
let timeline
let itemContainer
let resData
const y = 2

function loadData() {
  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      resData = data
      content = Object.keys(data).map(i => {
        data[i].key = i
        return data[i]
      })
      makeTimeline()
    })
    .catch(err => {
      // Do something for an error here
      console.error(`${err}`)
    })
}


// CREATE ITEMS FROM JSON OBJECTS AND PUSH TO DOM
function makeTimeline() {
  console.log('content 🥝', content)
  content.map(item => {
    const square = document.createElement('div')
    // find the items year value
    const year = item.year
    // times the year value with const y value
    const yAxis = parseInt(year * y)
    // set this value to style, as number of px on y axis
    square.style.setProperty('--transform-y', `0 ${yAxis}px`)
    // square.style.transformOrigin = `0 ${yAxis}px`


    square.className = `item ${item.key} ${item.category}`
    square.innerHTML = `${item.title}`

    timeline.appendChild(square)
  })
}



// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  itemContainer = document.getElementById('item')
  loadData()

})
