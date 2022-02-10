
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    surname: {
        type: String,
        required: [true, 'Surname is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    createdAt: {
        type: Date,
        required: [true, 'Date is required'],
        default: Date.now()
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator(value) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
            }
        },
        unique: [true, 'This is email is registered']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'host', 'pro'],
        required: true,
        default: 'user'
    },
    location: {
        type: String
    },
    /*pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pet',
        required: false
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
        required: false
    }],
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'booking',
        required: false
    }],
    pictures: [{
        type: String,
        required: false
    }],
    complaints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'complaint',
        required: false
    }],
    host: {
        house_type: {
            type: String,
            required: true
        },
        address: {
            type: String,
            require: true
        },
        accept_pet_specie: [{
            type: String,
            require: true
        }],
        services: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: false,
            price: Number
        }],
        available_dates: [{
            type: Boolean,
            required: true,
            default: false
        }],
        description: {
            type: String,
            required: true
        },
        rating: [{
            type: Number
        }],
        verified: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    pro_user: {
        logo: {
            type: String,
            required: false
        },
        professional_type: {
            type: String,
            required: true
        },
        web: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: true
        },
        accepted_pet_specie: [{
            type: String,
            required: true
        }],
        services: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: false,
            price: Number
        }],
        available_dates: [{
            type: Boolean,
            required: true,
            default: false
        }],
        description: {
            type: String,
            required: true
        },
        rating: [{
            type: Number
        }],
        verified: {
            type: Boolean,
            required: true,
            default: false
        }
    }*/

})



const userModel = mongoose.model('user', userSchema)
module.exports = userModel


