console.log('JS loaded 🍇')

let content
let timeline
let itemContainer
let resData

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
    console.log('item:', item.title)
    console.log('key:', item.key)

    const square = document.createElement('div')
    square.innerHTML = `${item.title}`

    square.className = `${item.key}`

    timeline.appendChild(square)
  })
}


// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  loadData()

})
