//bring in mongoose Schema and model 
const { Schema, model } = require('mongoose')
//define what exercise will look like for new data
const exerciseSchema = new Schema(
    {
    // define first index
      day: {
        type: Date,
        default: () => new Date()
    },
        // define secondary index
    exercise: [
    {
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type" 
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
}, 
{
    toJSON: {
    //enable virtual properties 
    virtuals: true
    } 
  }
)

//define virtual properties for totaling duration
exerciseSchema.virtual("totalDuration").get(function () {
    //reduce array allows sum of duration
    return this.exercises.reduce((total, exercise) =>  total + exercise.duration, 0)
})

module.exports = model('Excercise', exerciseSchema)
