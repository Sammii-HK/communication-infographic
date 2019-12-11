const router = require('express').Router()

router.get('/', (req, res) => res.json({ message: 'Welcome' }))

module.exports = router
