const mongoose = require('mongoose')

const Schema = mongoose.Schema

let baseEntity = require('./entity')()
let userEntity = {
    ...baseEntity,
    birthday: Date,
    fullName: String,
    gender: { type: String, enum: [ 'Male', 'Female', ], },
    imagePath: String,
}

var User = mongoose.model('users', new mongoose.Schema(userEntity))

module.exports = User
