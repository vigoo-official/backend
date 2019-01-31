const mongoose = require('mongoose')
const config = require('../config')

module.exports = {
    connectDb: () => {
        const connectionString = config.get('mongoDb:connectionString')
        const databaseName = config.get('mongoDb:databaseName')
        const options = {
            useNewUrlParser: true,
        }
        const mongoDBConnectionString = `${connectionString}/${databaseName}`
        mongoose.connect(mongoDBConnectionString, options)
        mongoose.Promise = global.Promise
        return mongoose.connection
    },
}
