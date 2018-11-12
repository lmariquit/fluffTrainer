const router = require('express').Router()
module.exports = router

console.log('comes in here')
router.use('/users', require('./users'))
router.use('/logs', require('./logs'))

console.log('didnt find anything')

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
