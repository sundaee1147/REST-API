const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')


//Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message})
        
    }
})
//Getting one
router.get('/', (req, res) => {
    
})
// Creating one
router.post('/', (req, res) => {

    const subscriber = new Subscriber({
        name : req.body.name,
        age : req.body.age,
        subcribedToChannel : req.body.subscribedToChannel
    })

    
    
})
//Updating one
router.patch('/:id', (req, res) => {
    
})
//Deleting one
router.delete('/:id', (req, res) => {
    
})

module.exports = router