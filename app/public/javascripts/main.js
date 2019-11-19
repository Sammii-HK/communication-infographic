console.log('JS loaded 🍇')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded 🍓')

  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      console.log(data)
    })
    .catch(err => {
      // Do something for an error here
      console.log(`Error: ${err}`)
    })
})
