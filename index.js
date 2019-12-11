
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const port = require('./config/environment')
require('dotenv').config()


const app = express()

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)


app.listen(port, () => console.log(`App listening on port ${port} 🍌`))
