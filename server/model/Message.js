const mongoose = require('mongoose')

const { Schema } = mongoose;

const messageSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const MessageSchema = mongoose.model('MessageSchema', messageSchema)

module.exports = MessageSchema;