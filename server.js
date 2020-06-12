//bring in express and define app
const express = require('express')
const app = express()

//bring in middleware functions
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bring in routes folder
app.use(require('./routes'))

//bring in database connection in config folder
require('./config')
//listen for port 3000
    .then(app.listen(3000, () => {
        //console.log below message
        console.log("App running on port 3000!")
      }))
    //catch any errors
    .catch(err => console.error(err))
