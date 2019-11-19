console.log('JS loaded 🍇')
const timeline = document.getElementById('timeline')

let content
let itemContainer

fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    content = data
    console.log('content:', content)
  })
  .catch(err => {
    // Do something for an error here
    console.log(`Error: ${err}`)
  })


// CREATE ITEMS FROM JSON OBJECTS AND PUSH TO DOM
function makeTimeline() {
  console.log(timeline)
  console.log(content)
  content.map(item => {
    console.log('item:', item)
  })
}


// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded 🍓')

  makeTimeline()

})
