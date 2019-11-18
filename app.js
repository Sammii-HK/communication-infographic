// NODE.JS SERVER SET UP
const http = require('http')
const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})


// MAIN JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded 🍇')

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
