const mongoose = require('mongoose')
const schema = mongoose.Schema

const eventModel = new schema({
    name: { type: String, required : true} ,
    description: { type: String},
    sport: { type: String, required : true},
    venue: { type: String, required : true},
    team1: { type: String, required : true},
    team2: { type: String, required : true},
    time: { type: Date, required : true }
})

module.exports = mongoose.model('event', eventModel)