console.log('JS loaded 🍇')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile('./index.html')
})

app.use(express.static('public'))

// app.get('/', function(request, response){
//     response.sendFile('absolutePathToYour/htmlPage.html');
// });

app.listen(8000, () => {
  console.log('App listening on port 8000! 🍌')
})


// document.addEventListener('DOMContentLoaded', () => {
//   fetch('./data.json')
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       // Work with JSON data here
//       console.log(data)
//     })
//     .catch(err => {
//       // Do something for an error here
//       console.log(`Error: ${err}`)
//     })

// let data

// $.ajax({
//   beforeSend: function(xhr) {
//     if (xhr.overrideMimeType) {
//       xhr.overrideMimeType('application/json')
//     }
//   }
// })
//
// function loadData() {
//   $.getJSON('./data.json')
//     .done(function(res) {
//       data = res
//       console.log(data)
//     }).fail(function(res) {
//       console.log(`Error: ${res}`)
//     })
// }
//
// loadData()

// })
