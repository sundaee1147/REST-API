const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    subscribedToChannel : {
        type: String,
        required: true
    },
    subscribedToDate : {
        type : Date,
        required : true,
        default: Date.now
    }
})

module.exports = mongoose.model('subscriber', subscriberSchema)