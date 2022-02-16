
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
        required: false,
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
    /*comments: [{
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
<<<<<<< HEAD
            require: false
        },
        accept_pet_specie: [{
            type: String,
            require: false
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c
        }],
        services: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: false,
            price: Number
        }],
<<<<<<< HEAD
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
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c
        description: {
            type: String,
            required: false
        },
        rating: [{
            type: Number
        }],
        verified: {
            type: Boolean,
<<<<<<< HEAD
            required: false,
=======
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c
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
<<<<<<< HEAD
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
=======
        available_dates: [{
            type: Boolean,
            default: false
        }],
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c
        description: {
            type: String,
            required: false
        },
        rating: [{
            type: Number
        }],
        verified: {
            type: Boolean,
<<<<<<< HEAD
            required: false,
=======
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c
            default: false
        }
    }

})



const userModel = mongoose.model('user', userSchema)
module.exports = userModel

