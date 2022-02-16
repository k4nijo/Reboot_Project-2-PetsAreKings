
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
        enum: ['user', 'hostPro', 'admin'],
        required: true,
        default: 'user'
    },
    location: {
        type: String
    },
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pet',
        required: false
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments',
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
            required: false
        },
        address: {
            type: String,
            require: false
        },
        accept_pet_specie: [{
            type: String,
            require: false
        }],
        services: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: false,
            price: Number
        }],
        available_dates: {
            from_date: {
                type: Date,
                required: false,
            },
            to_date: {
                type: Date,
                required: false,
            }
        },
        description: {
            type: String,
            required: false
        },
        rating: [{
            type: Number
        }],
        verified: {
            type: Boolean,
            required: false,
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
            required: false
        },
        web: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        accepted_pet_specie: [{
            type: String,
            required: false
        }],
        services: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: false,
            price: Number
        }],
        available_dates: {
            from_date: {
                type: Date,
                required: false,
            },
            to_date: {
                type: Date,
                required: false,
            }
        },
        description: {
            type: String,
            required: false
        },
        rating: [{
            type: Number
        }],
        verified: {
            type: Boolean,
            required: false,
            default: false
        }
    }

})



const userModel = mongoose.model('user', userSchema)
module.exports = userModel

