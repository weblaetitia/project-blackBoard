var mongoose = require('mongoose')

// Schema
var articleSchema = mongoose.Schema({
    title: String,
    description : String,
    price: Number,
    stock: Number,
    weight: Number,
    img: String
})

// model
var ArticlesModel = mongoose.model('articles',articleSchema)

// export models 
module.exports = ArticlesModel