const express = require('express')
const http = require('http')
const db = require('./database')
const { User, } = require('./schemes')
// const mongoose = require('mongoose')

const app = express()
// const middleware = require('./middleware')(app, express)
const config = require('./config')
const log = require('./utils/log')

const startServer = () => {
    let port = config.get('port')

    http.createServer(app).listen(port, () => {
        log.info(`Express server listening on port ${port}`)

        var user = User.create({
            birthday: new Date(1999, 1, 29),
            fullName: 'Taras Frame',
            gender: 'Male',
        })
    })
}

const onDatabaseError = (error) => {
    log.error(error.toString())
}

db.connectDb()
    .on('error', onDatabaseError)
    // .on('disconnected', db.connectDb)
    .once('open', startServer)
