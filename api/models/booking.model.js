const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    host_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    pet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pet',
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    from_date: {
        type: Date,
        required: [true, 'Date is required']
    },
    to_date: {
        type: Date,
        required: [true, 'Date is required']
    },
    createdAt: {
        type: Date,
        required: [true, 'Date is required'],
        default: Date.now()
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }

})

const bookingModel = mongoose.model('booking', bookingSchema)
module.exports = bookingModel