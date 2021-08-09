const mongoose = require('mongoose')

const discountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    threshold: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Discount', discountSchema)
