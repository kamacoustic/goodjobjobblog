const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

const jobs = require('./routes/api/jobs')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')


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




// use Routes
app.use('/api/jobs', jobs)
app.use('/api/users', users)
app.use("/api/auth", auth)

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/job-blog/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'job-blog', 'build', 'index.html'))
    })

}

const port = process.env.PORT || 5000


app.listen(port, () => console.log(`Server started on ${port}`))