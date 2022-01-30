const express = require('express');

const MessageSchema = require('./model/Message')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const messages = await MessageSchema.find();
        res.json(messages)
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async (req, res) => {
    try {
        const messageEntry = new MessageSchema(req.body);
        const createdMessageEntry = await messageEntry.save();
        res.json(createdMessageEntry)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;