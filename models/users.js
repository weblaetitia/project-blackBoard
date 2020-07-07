var mongoose = require('mongoose')

// Schema messages
var MessageSchema = mongoose.Schema( {
    title: String,
    content: String,
    dateExp: Date,
    read: Boolean,
    sender: String
})

// Schema task
var TaskSchema = mongoose.Schema({
    name: String,
    category: String,
    owner: String,
    dateInsert: Date,
    dateDue: Date,
    dateCloture: Date
})

// Schema client
var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,
    messages: [MessageSchema],
    tasks: [TaskSchema]
})

// Model
var UserModel = mongoose.model('users', UserSchema)

// export models 
module.exports = UserModel