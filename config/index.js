module.exports = require('mongoose').connect('mongodb://localhost/workoutDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})