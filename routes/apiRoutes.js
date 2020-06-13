const Workout = require('../models/Workout.js')
const { route } = require('./statsRoutes.js')

//define express router
const router = require('express').Router()
//GET all exercises
router.get('/workouts', (req, res) => {
    Workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => console.error(err))
})
//GET one exercise
router.get('/workouts/:id', (req, res) => {
    Workout.findById(req.query)
        .then(workout => res.json(workout))
        .catch(err => console.error(err))
})
//PUT one exercise
router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push : { exercises: req.body } })
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})
//POST one workout
router.post('/workouts/range', (req, res) => {
    Workout.create(req.body)
        .then(workout => res.json(workout))
        .catch(err => console.error(err))
})
//export routes
module.exports = router