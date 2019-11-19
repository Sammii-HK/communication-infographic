console.log('JS loaded 🍇')

const express = require('express')
const app = express()

app.listen(8000, () => {
  console.log('App listening on port 8000! 🍌')
})

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile('./index.html')
})
