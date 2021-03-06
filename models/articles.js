var mongoose = require('mongoose')

// Schema
var ArticleSchema = mongoose.Schema({
    title: String,
    description : String,
    price: Number,
    stock: Number,
    weight: Number,
    img: String
})

// model
var ArticlesModel = mongoose.model('articles', ArticleSchema)

// export models 
module.exports = ArticlesModel