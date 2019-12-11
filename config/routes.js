const router = require('express').Router()

router.get('/', (req, res) => res.json({ message: 'Welcome to On Set London' }))

module.exports = router
