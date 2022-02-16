const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
    },
    comment: {
        type: String,
        required: [true, 'Comment is required']
    },
    createdAt: {
        type: Date,
        required: [true, 'Date is required'],
        default: Date.now()
    }

})

const commentModel = mongoose.model('comments', commentSchema)
module.exports = commentModel

