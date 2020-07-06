var mongoose = require('mongoose')

// Schema
var orderSchema = mongoose.Schema({
    total: Number,
    shipping_cost: Number, 
    date_insert: Date,
    status_payment: String,
    date_payment: Date,
    status_shipment: Boolean,
    date_shipment: Date,
    delivery_address: String,
    delivery_city: String,
    delivery_zipcode: String
})

// model
var OrdersModel = mongoose.model('orders', orderSchema)

// export models 
module.exports = OrdersModel