const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema ({
    reported:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: false
    },
    complainant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: false
    },
    complaint: {
        type: String,
        required: true
    },
    complaint_status: {
        type: String,
        required: true,
        default: false
    }


})



const complaintModel = mongoose.model('complaint', complaintSchema)
module.exports = complaintModel