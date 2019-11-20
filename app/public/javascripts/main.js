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
      console.log('content:', content)
    })
    .catch(err => {
      // Do something for an error here
      console.log(`Error: ${err}`)
    })
}


// CREATE ITEMS FROM JSON OBJECTS AND PUSH TO DOM
function makeTimeline() {
  console.log('timeline', timeline)
  console.log('content', content)
  // content.map(item => {
  //   console.log('item:', item)
  // })
}


// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  console.log('DOMContentLoaded 🍓')

  loadData()

})
