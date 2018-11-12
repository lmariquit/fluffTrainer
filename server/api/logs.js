const router = require('express').Router()
const { Log } = require('../db/models')

module.exports = router

// api/logs
router.get('/', async (req, res, next) => {
    try {
        const allLogs = await Log.findAll({
            where: {
                userId: req.user.id
            }
        })
        res.json(allLogs)
    } catch(err) {
        console.error(err)
    }
})

// api/logs
router.post('/', async (req, res, next) => {
    console.log('in add route')
    const { phrase, likeCount, speechTime } = req.body
    try {
        const newLog = await Log.create({
            userId: req.user.id,
            phrase,
            likeCount,
            speechTime
        })
        res.json(newLog)
    } catch(err) {
        console.error(err)
    }
})

// api/logs
router.delete('/remove/:id', async (req, res, next) => {
    console.log('in the delete route. req.params:', req.params)
    const id = req.params.id
    console.log('id: ', id, 'userID', req.user.id)
    try {
        const deleted = await Log.destroy({
            where: {
                userId: req.user.id,
                id
            }
        })
        console.log('deleted', deleted)
        res.status(204).json(deleted)
    } catch(err) {
        console.error(err)
    }
})