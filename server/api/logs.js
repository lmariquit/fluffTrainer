const router = require('express').Router()
const { Log } = require('../db/models')

module.exports = router

// api/logs
router.get('/', async (req, res, next) => {
    console.log('in here')
    try {
        const allLogs = await Log.findAll({
            where: {
                userId: req.user.id
            }
        })
        console.log('found: ', allLogs)
        res.json(allLogs)
    } catch(err) {
        console.error(err)
    }
})


// api/logs
router.post('/', async (req, res, next) => {
    const { phrase, likeCount } = req.body
    try {
        const newLog = await Log.create({
            userId: req.user.id,
            phrase,
            likeCount
        })
        res.json(newLog)
    } catch(err) {
        console.error(err)
    }
})

router.delete('/', async (req, res, next) => {
    const { phrase } = req.body
    try {
        await Log.destroy({
            where: {
                userId: req.user.id,
                phrase
            }
        })
        res.sendStatus(204)
    } catch(err) {
        console.error(err)
    }
})