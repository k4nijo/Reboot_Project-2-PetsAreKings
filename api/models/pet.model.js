
const mongoose = require('mongoose')

const petSchema = new mongoose.Schema ({
    name: {
     type: String,
     required: true
    },
    pet_specie: {
      type: String,
      required: true
    },
    race: {
      type: String,
      required: false
    },
    age: {
        type: Number,
        require: false
    },
    sociable: {
        type: Boolean,
        required: true
    },
    caregivers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: false
    }],
    special_care: [{
        type: String,
        treatment: String,
        required: false
    }],
    pictures: [{
        type: String,
        required: false
    }],
    createdAt: {
        type: Date, 
        default: Date.now(),
        required: [true, 'Date is required']
    }
    

})



const petModel = mongoose.model('pet', petSchema)
module.exports = petModel
