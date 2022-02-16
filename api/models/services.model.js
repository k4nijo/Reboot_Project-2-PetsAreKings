const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
   services_name: {
        type: String,
        enum: ['trainer', 'veterinary', 'grooming', 'walker'],
        required: false,
        }
    })      

const serviceModel = mongoose.model('services', serviceSchema)
module.exports = serviceModel