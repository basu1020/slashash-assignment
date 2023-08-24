const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const {addMovie, movieValidator, deleteMovie, fetchMovies} = require('./controllers/movieController')
// importing the sequelize instance
const sequelize = require('./models/index')

// configuring some basic middlewares 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes for adding, deleting, and fetching movies
app.post('/add-movies', movieValidator, addMovie);
app.delete('/movies/:id', deleteMovie);
app.get('/movies', fetchMovies);

// connecting and syncing with the database. 
sequelize.sync()
    .then(() => {
        console.log("Synced db.")
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message)
    })

// starting our backend on port 5000 
app.listen(port, () => {
    console.log(`live on ${port}`)
})