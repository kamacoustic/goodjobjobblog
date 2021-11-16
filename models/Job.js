const mongoose = require('mongoose') 
const Schema = mongoose.Schema

// Create Schema
const JobSchema = new Schema ({
    pos_company: {
        type: String,
        required: true
    },
    pos_date_applied: {
        type: String,
        required: true
    },
    pos_summary: {
        type: String,
        required: true
    },
    pos_url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = Job = mongoose.model('job', JobSchema)