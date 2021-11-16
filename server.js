const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const jobs = require('./routes/api/jobs')


const app = express()


//Bodyparser Middleware
app.use(express.json())

//DB Config
const db = config.get('uri')


//Connect to Mongo
mongoose
.connect(db, {
    // useNewUrlParser: true,
    // useCreateIndex: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(`Error: ${err}`))


const port = process.env.PORT || 5000

// use Routes
app.use('/api/jobs', jobs)
app.use('/api/users', require('./routes/api/users'))
app.use("/api/auth", require('./routes/api/auth'))


app.listen(port, () => console.log(`Server started on ${port}`))