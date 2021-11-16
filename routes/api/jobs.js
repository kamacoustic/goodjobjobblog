const express = require('express')
const router = express.Router()

// Job Model
const Job = require('../../models/Job')

// @route GET api/jobs
// @desc Get all jobs
// @access Public

router.get('/', (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
})

// @route POST api/jobs
// @desc Create an job listing
// @access Public

router.post('/', (req, res) => {
    const newJob = new Job({
        pos_company: req.body.pos_company,
        pos_date_applied: req.body.pos_date_applied,
        pos_summary: req.body.pos_summary,
        pos_url: req.body.pos_url,
        title: req.body.title
    })

    newJob.save().then(job => res.json(job))
})


// @route DELETE api/jobs/:id
// @desc Delete a Post
// @access Private

router.delete('/:id', (req, res) => {
    Job.findById(req.params.id)
        .then(job => job.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router