console.log('JS loaded 🍇')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded 🍓')

  let content

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


  document.getElementById('timeline')
})
