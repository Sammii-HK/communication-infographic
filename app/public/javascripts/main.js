console.log('JS loaded 🍇')

let content
let timeline
let itemContainer

// REFERENCE CODE ================== From 
// handleSubmit(e) {
//     e.preventDefault()
//
//     axios.post('/api/login', this.state.data)
//       .then(res => {
//         Auth.setToken(res.data.token)
//         Flash.setMessage('success', res.data.message)
//         // set the favorites from user db profile into local storage
//         Favorite.setFavorites(res.data.favorites)
//         this.props.history.push('/profile')
//       })
//       .catch(err => this.setState({ errors: err.response.data.error }))
//   }
// =================================

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

  console.log('timeline', timeline)
  console.log('content', content)
  content.map(item => {
    console.log('item:', item)
  })
}


// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  timeline = document.getElementById('timeline')
  console.log('DOMContentLoaded 🍓')

  if (content) {
    makeTimeline()
  }

})
