//define exress router
const router = require('express').Router()
//require index routes
router.use('/api', require('./indexRoutes.js'))
//export out router folder
module.exports = router