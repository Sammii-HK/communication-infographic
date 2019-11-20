console.log('JS loaded 🍇')

let content
let timeline
let itemContainer

function loadData() {
  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      content = data
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
  console.log('content 🍊', content.printing_press)
  content.map(item => {
    console.log('item:', item)
  })
}


// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  loadData()

})
