const Sequelize = require('sequelize')
const db = require('../db')

const Log = db.define('logs', {
    phrase: {
        type: Sequelize.STRING
    },
    likeCount: {
        type: Sequelize.INTEGER
    },
    speechTime: {
        type: Sequelize.STRING
    }
})

module.exports = Log