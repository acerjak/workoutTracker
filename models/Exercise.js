//bring in mongoose Schema and model 
const { Schema, model } = require('mongoose')

//define what exercise will look like for new data
module.exports = model('Exercise', new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
}))

