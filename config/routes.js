const router = require('express').Router()
const data = require('../data.json')

router.get('/', (req, res) => res.json({ message: 'Welcome' }))

router.get('/data', (req, res) => res.json(data))

module.exports = router
